import React from 'react';
import Image from 'next/image';

export const Instructor = () => {
  return (
    <section id="instructor" className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/3 flex justify-center">
            <Image
              src="https://kdloteojnkcjblhoirea.supabase.co/storage/v1/object/public/public-files/0.4365205819350668.png"
              alt="Vanessa Carvalho, Instructora"
              width={300}
              height={300}
              className="rounded-full object-cover aspect-square shadow-lg"
            />
          </div>
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary">👩‍🏫 Instructora a Cargo</h2>
            <p className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Vanessa Carvalho
            </p>
            <p className="mt-1 text-lg font-medium text-gray-500">Especialista en Resina Epoxi y Artesanía Moderna</p>
            <div className="mt-6 text-gray-700 space-y-4 text-base">
              <p>
                Vanessa trabaja en la artesanía desde hace más de 10 años, comenzando desde joven junto a familiares que trabajaban con piezas decorativas manuales.
              </p>
              <p>
                En los últimos años, ha ayudado a más de 3,000 alumnos a aprender resina desde cero, creando piezas increíbles, desde colgantes hasta sofisticadas lámparas.
              </p>
              <p>
                Su didáctica simple y práctica permite que cualquier persona, incluso quien nunca ha tocado la resina antes, pueda aprender rápidamente y crear piezas profesionales.
              </p>
               <p>
                En el curso, Vanessa revela todas las técnicas, secretos, errores que debes evitar y trucos de ahorro, guiándote desde el inicio hasta el acabado final de cada pieza.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
