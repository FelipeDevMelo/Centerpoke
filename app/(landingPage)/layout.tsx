import React from 'react'

interface Props {
    children: React.ReactNode;
  }
  
  export default function NavbarLayout({ children }: Props) {
    return (
      <main>
        <div>{children}</div>
      </main>
    );
  }