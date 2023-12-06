"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks=[
    {name:"Register",href:"/register"},
    {name:"Login",href:"/login"},
    {name:"Forget Password",href:"/forgot-password"},
]
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const pathname = usePathname();
    
  return (
    <div>
      <div className="flex gap-9 ">
        {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href)
          return (
            <Link
              href={link.href}
              key={link.name}
              className={
                isActive ? "font-bold text-blue-500 mr-4" : ""
              }>
              {link.name}
            </Link>
          );
        })}
      </div>
      {children}
    </div>
  );
}
