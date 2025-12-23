import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  href?: string;
  className?: string;
}

export function Logo({ size = "md", showText = true, href = "/", className = "" }: LogoProps) {
  const sizes = {
    sm: { img: 32, text: "text-lg" },
    md: { img: 40, text: "text-xl" },
    lg: { img: 48, text: "text-2xl" },
  };

  const content = (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/logotexto.png"
        alt="Operandi"
        width={sizes[size].img * 4}
        height={sizes[size].img}
        className="h-auto object-contain"
        style={{ width: "auto", height: sizes[size].img }}
        priority
      />
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}

// Fallback logo sin imagen
export function LogoIcon({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: "w-7 h-7 text-xs",
    md: "w-8 h-8 text-sm",
    lg: "w-10 h-10 text-base",
  };

  return (
    <div className={`${sizes[size]} bg-gradient-to-br from-violet-600 to-indigo-600 rounded-lg flex items-center justify-center`}>
      <span className="text-white font-bold">O</span>
    </div>
  );
}
