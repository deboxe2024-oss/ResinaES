"use client";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section id="hero" className="relative w-full bg-white flex items-center justify-center text-center text-gray-800 py-16 sm:py-24">
      <div className="relative container z-10 flex flex-col items-center gap-6 px-4">
        
        <div className="max-w-4xl p-4 bg-blue-100 border-l-4 border-blue-500 text-blue-700 rounded-md mb-8">
            <p className="font-bold">Aviso Importante:</p>
            <p className="text-sm">Este curso está disponible en varios países, por eso utilizamos un sistema de doblaje automático para adaptar el contenido a diferentes idiomas. En algunos momentos poco frecuentes, la sincronización labial puede no ser perfecta, pero el contenido sigue siendo claro y comprensible. Las clases están enfocadas en el paso a paso visual, por lo que podrás seguir todo sin dificultad. Gracias por ser parte de esta comunidad internacional.</p>
        </div>

        <div className="max-w-4xl">
          <p className="font-bold text-primary mb-2 uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>OFERTA DE LANZAMIENTO</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Aprende Resina Epoxi desde Cero y Crea Piezas Hermosas Para Vender
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-600" style={{ fontFamily: "'Poppins', sans-serif" }}>
            — Incluso Sin Ninguna Experiencia o Mucho Dinero Para Invertir
          </p>
        </div>
        
        <Card className="max-w-3xl w-full overflow-hidden shadow-2xl border-2 border-primary/20 bg-black">
          <CardContent className="p-0 relative aspect-video">
            <video 
              src="https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.5834961046599191.mp4" 
              controls 
              className="w-full h-full object-cover"
              poster="https://kdloteojnkcjblhoirea.supabase.co/storage/v1/object/public/public-files/0.9400414610218671.png"
              >
                Tu navegador no soporta el elemento de video.
            </video>
          </CardContent>
        </Card>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center text-gray-600 font-medium">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500"/>
            <span>Técnicas desde Cero hasta Avanzado</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500"/>
            <span>Clases 100% Prácticas</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500"/>
            <span>Acceso Vitalicio</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild className="h-14 px-8 text-lg font-bold text-white bg-green-500 hover:bg-green-600 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 animate-subtle-pulse">
            <a href="https://pay.hotmart.com/F103245627C?checkoutMode=10" target="_blank" rel="noopener noreferrer">
                QUIERO ACCEDER AHORA
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-14 px-8 text-lg font-bold rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <a href="#student-results">
              Resultados de nuestras Alumnas
            </a>
          </Button>
        </div>


        <p className="text-gray-600">✨ + de 3,000 alumnas satisfechas</p>
      </div>
    </section>
  );
};
