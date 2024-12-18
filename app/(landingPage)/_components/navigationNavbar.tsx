'use client'
import { usePathname } from "next/navigation";
import React from 'react'
import Link from "next/link";

export function NavigationNavbar  ()  {
    const currentPath = usePathname();
    const buttons: NavigationNavbar[] = [
        {
            path: "/plans",
            label: "Insurance Plans"
        },

        {
            path: "/pokeCenters",
            label: "Poke Centers"
        },

        {
            path: "/company",
            label: "Company"
        },

        {
            path: "/help",
            label: "Help"
        }
    ]
    return (
        <div>
            {buttons.map((button, key) => {

                return (
                    <Link
                        key={key}
                        href={button.path}
                    >
                       <h1>{button.label}</h1> 
                    </Link>
                )
            })}
        </div>
    )
}
