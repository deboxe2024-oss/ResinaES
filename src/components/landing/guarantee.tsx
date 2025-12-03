"use client";
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const Guarantee = () => {
  return (
    <section id="guarantee" className="py-16 sm:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 text-center lg:text-left">
          <div className="flex-shrink-0">
            <Image
              src="https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.07022505416642577.png"
              alt="Sello de Garantía de 7 días"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="max-w-2xl">
            <h2 id="guarantee-heading" className="text-3xl sm:text-4xl font-bold">
              Garantía de 7 días — ¡riesgo cero!
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Si no te gusta el curso, por cualquier motivo, solo tienes que enviarnos un correo electrónico dentro de 7 días y te devolveremos el 100% de tu dinero. Sin preguntas, sin burocracia. El riesgo es todo nuestro.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Button asChild className="h-14 px-8 text-lg font-bold text-white bg-green-500 hover:bg-green-600 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 animate-subtle-pulse">
                    <a href="https://pay.hotmart.com/F103245627C?checkoutMode=10" target="_blank" rel="noopener noreferrer">
                        QUIERO ACCEDER AHORA
                    </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-lg font-bold bg-transparent hover:bg-white/10 text-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                >
                  <a href="#student-results">
                    Resultados de nuestras Alumnas
                  </a>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
