import React from 'react';

interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return <div className="max-w-[1440px] h-screen my-0 mx-auto">{children}</div>;
}
