-- =============================================
-- MIGRATION: Sync auth.users -> users table (SAFE VERSION)
-- =============================================
-- This file creates triggers to automatically sync Supabase auth.users
-- with the users table in the public schema
-- NOTE: Safe to run multiple times - checks for existence before creating

-- =============================================
-- FUNCTION: Handle new user creation
-- =============================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.users (
        id,
        email,
        nombre,
        apellido,
        telefono,
        avatar_url,
        activo,
        created_at,
        updated_at,
        last_login
    ) VALUES (
        NEW.id,
        NEW.email,
        COALESCE(
            NEW.raw_user_meta_data->>'nombre',
            NEW.raw_user_meta_data->>'first_name',
            SPLIT_PART(COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email), ' ', 1),
            'Sin nombre'
        ),
        COALESCE(
            NEW.raw_user_meta_data->>'apellido',
            NEW.raw_user_meta_data->>'last_name',
            NULLIF(SPLIT_PART(COALESCE(NEW.raw_user_meta_data->>'full_name', ''), ' ', 2), ''),
            ''
        ),
        COALESCE(
            NEW.raw_user_meta_data->>'telefono',
            NEW.raw_user_meta_data->>'phone',
            NEW.phone
        ),
        NEW.raw_user_meta_data->>'avatar_url',
        true,
        NOW(),
        NOW(),
        NOW()
    );
    RETURN NEW;
EXCEPTION
    WHEN unique_violation THEN
        UPDATE public.users
        SET
            nombre = COALESCE(
                NEW.raw_user_meta_data->>'nombre',
                NEW.raw_user_meta_data->>'first_name',
                users.nombre
            ),
            apellido = COALESCE(
                NEW.raw_user_meta_data->>'apellido',
                NEW.raw_user_meta_data->>'last_name',
                users.apellido
            ),
            telefono = COALESCE(
                NEW.raw_user_meta_data->>'telefono',
                NEW.raw_user_meta_data->>'phone',
                NEW.phone,
                users.telefono
            ),
            avatar_url = COALESCE(
                NEW.raw_user_meta_data->>'avatar_url',
                users.avatar_url
            ),
            updated_at = NOW(),
            last_login = NOW()
        WHERE id = NEW.id;
        RETURN NEW;
    WHEN OTHERS THEN
        RAISE WARNING 'Error al crear usuario desde auth.users: %', SQLERRM;
        RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =============================================
-- FUNCTION: Handle user updates
-- =============================================
CREATE OR REPLACE FUNCTION public.handle_user_updated()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE public.users
    SET
        email = NEW.email,
        telefono = COALESCE(
            NEW.raw_user_meta_data->>'telefono',
            NEW.raw_user_meta_data->>'phone',
            NEW.phone,
            users.telefono
        ),
        nombre = COALESCE(
            NEW.raw_user_meta_data->>'nombre',
            NEW.raw_user_meta_data->>'first_name',
            users.nombre
        ),
        apellido = COALESCE(
            NEW.raw_user_meta_data->>'apellido',
            NEW.raw_user_meta_data->>'last_name',
            users.apellido
        ),
        avatar_url = COALESCE(
            NEW.raw_user_meta_data->>'avatar_url',
            users.avatar_url
        ),
        updated_at = NOW(),
        last_login = CASE
            WHEN OLD.last_sign_in_at IS DISTINCT FROM NEW.last_sign_in_at
            THEN NEW.last_sign_in_at
            ELSE users.last_login
        END
    WHERE id = NEW.id;
    RETURN NEW;
EXCEPTION
    WHEN OTHERS THEN
        RAISE WARNING 'Error al actualizar usuario desde auth.users: %', SQLERRM;
        RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =============================================
-- FUNCTION: Handle user deletion
-- =============================================
CREATE OR REPLACE FUNCTION public.handle_user_deleted()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE public.users
    SET
        activo = false,
        updated_at = NOW()
    WHERE id = OLD.id;
    RETURN OLD;
EXCEPTION
    WHEN OTHERS THEN
        RAISE WARNING 'Error al desactivar usuario: %', SQLERRM;
        RETURN OLD;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =============================================
-- TRIGGERS: Safe creation (only if not exists)
-- =============================================

-- Trigger for new user creation
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_trigger WHERE tgname = 'on_auth_user_created'
    ) THEN
        CREATE TRIGGER on_auth_user_created
            AFTER INSERT ON auth.users
            FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
    END IF;
END
$$;

-- Trigger for user updates
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_trigger WHERE tgname = 'on_auth_user_updated'
    ) THEN
        CREATE TRIGGER on_auth_user_updated
            AFTER UPDATE ON auth.users
            FOR EACH ROW
            WHEN (
                OLD.email IS DISTINCT FROM NEW.email OR
                OLD.phone IS DISTINCT FROM NEW.phone OR
                OLD.raw_user_meta_data IS DISTINCT FROM NEW.raw_user_meta_data OR
                OLD.last_sign_in_at IS DISTINCT FROM NEW.last_sign_in_at
            )
            EXECUTE FUNCTION public.handle_user_updated();
    END IF;
END
$$;

-- Trigger for user deletion
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_trigger WHERE tgname = 'on_auth_user_deleted'
    ) THEN
        CREATE TRIGGER on_auth_user_deleted
            AFTER DELETE ON auth.users
            FOR EACH ROW EXECUTE FUNCTION public.handle_user_deleted();
    END IF;
END
$$;

-- =============================================
-- COMMENTS & DOCUMENTATION
-- =============================================

COMMENT ON FUNCTION public.handle_new_user() IS
'Sincroniza nuevos usuarios de auth.users a public.users.
Extrae metadata del usuario (nombre, apellido, teléfono, avatar)
desde raw_user_meta_data y crea el registro correspondiente.';

COMMENT ON FUNCTION public.handle_user_updated() IS
'Sincroniza actualizaciones de auth.users a public.users.
Actualiza email, teléfono, nombre, apellido, avatar y last_login.';

COMMENT ON FUNCTION public.handle_user_deleted() IS
'Marca usuarios como inactivos en lugar de eliminarlos.
Preserva integridad referencial con otras tablas.';
