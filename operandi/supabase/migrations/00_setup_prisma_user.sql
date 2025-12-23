-- =============================================
-- STEP 1: Create dedicated Prisma user
-- Execute this FIRST in Supabase SQL Editor
-- =============================================

-- Create a dedicated user for Prisma with necessary permissions
create user "prisma" with password 'operandi2026!' bypassrls createdb;

-- Grant necessary privileges
grant "prisma" to "postgres";
grant usage on schema public to prisma;
grant create on schema public to prisma;
grant all on all tables in schema public to prisma;
grant all on all routines in schema public to prisma;
grant all on all sequences in schema public to prisma;

-- Grant future privileges
alter default privileges in schema public grant all on tables to prisma;
alter default privileges in schema public grant all on routines to prisma;
alter default privileges in schema public grant all on sequences to prisma;

-- =============================================
-- NOTES:
-- =============================================
-- After running this:
-- 1. Update your .env file with the new connection strings:
--    DATABASE_URL="postgresql://prisma.ecfotvjaknrgtvbinieo:operandi2026!@aws-0-us-west-2.pooler.supabase.com:6543/postgres?pgbouncer=true"
--    DIRECT_URL="postgresql://prisma.ecfotvjaknrgtvbinieo:operandi2026!@aws-0-us-west-2.pooler.supabase.com:5432/postgres"
--
-- 2. Run: npx prisma migrate dev --name init
--
-- =============================================
