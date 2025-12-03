import React from 'react';
import { Logo } from './logo';
import { cn } from '@/lib/utils';

export const Header = () => {
  return (
    <header className={cn('sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60')}>
      <div className="container flex h-16 items-center">
        <Logo />
      </div>
    </header>
  );
};
