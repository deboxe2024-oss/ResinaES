import { UserCheck } from 'lucide-react';
import React from 'react';

const audienceItems = [
  "Para hombres y mujeres, incluso sin ninguna experiencia, que quieren aprender a crear hermosas piezas en resina epoxi para decorar su casa o regalar a alguien especial.",
  "Para quienes desean comenzar un negocio rentable, trabajando desde casa y ganando un ingreso extra con artesanía moderna y muy solicitada.",
  "Para artesanos principiantes o avanzados, que desean actualizar su trabajo, aprender nuevas técnicas o agregar productos de alto valor a su catálogo.",
  "Para quienes siempre admiraron las piezas de resina y pensaron que era difícil, pero ahora quieren aprender de forma simple, práctica y rápida."
];

export const TargetAudience = () => {
  return (
    <section id="target-audience" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="target-audience-heading" className="text-3xl sm:text-4xl font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
            🎯 ¿Para quién es este curso?
          </h2>
        </div>

        <div className="mt-12 max-w-4xl mx-auto space-y-6">
          {audienceItems.map((item, index) => (
            <div key={index} className="flex items-start p-6 bg-gray-50 rounded-lg shadow-sm">
              <UserCheck className="w-8 h-8 text-primary mr-4 mt-1 flex-shrink-0" />
              <p className="text-lg text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
