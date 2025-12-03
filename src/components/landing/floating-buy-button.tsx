'use client';

import { Button } from '@/components/ui/button';

export const FloatingBuyButton = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        asChild
        className="h-12 px-6 text-base font-bold text-white bg-green-500 hover:bg-green-600 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
      >
        <a href="https://pay.hotmart.com/F103245627C?checkoutMode=10" target="_blank" rel="noopener noreferrer">
          Comprar Ahora
        </a>
      </Button>
    </div>
  );
};
