"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

type NavigationNavbar = {
  path: `/${string}`;
  label: string;
};
export function NavigationNavbar() {
  const currentPath = usePathname();
  const buttons: NavigationNavbar[] = [
    {
      path: "/Plans",
      label: "Insurance Plans",
    },

    {
      path: "/PokeCenters",
      label: "Poke Centers",
    },

    {
      path: "/Company",
      label: "Company",
    },

    {
      path: "/Help",
      label: "Help",
    },
  ];
  return (
    <div>
      {buttons.map((button, key) => {
        return (
          <Link key={key} href={button.path}>
            <h1>{button.label}</h1>
          </Link>
        );
      })}
    </div>
  );
}
