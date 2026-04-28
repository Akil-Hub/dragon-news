"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MenuLinks = ({ children, href,className }) => {
  const pathname = usePathname();
  const isActive = href === pathname;
  return (
    <Link
      className={`${isActive ? "border-b-2 border-pink-500" : ""} ${className}` }
      href={href}
    >
      {children}
    </Link>
  );
};

export default MenuLinks;
