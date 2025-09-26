"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinkProps } from "./interface";

export function NavLink({ href, children, activeCss, notActiveCss }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);
  
  return (
    <Link
      href={href}
      className={`${isActive ? `${activeCss}` : `${notActiveCss}`}`}
    >
      {children}
    </Link>
  );
}
