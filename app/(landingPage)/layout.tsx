import React from 'react'
import { NavigationNavbar } from './_components/navigationNavbar';

interface Props {
    children: React.ReactNode;
  }
  
  export default function NavbarLayout({ children }: Props) {
    return (
      <main>
        <NavigationNavbar />
        <div>{children}</div>
      </main>
    );
  }