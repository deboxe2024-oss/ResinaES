import React from 'react';
import Image from 'next/image';

const bonuses = [
  { 
    imageUrl: 'https://kdloteojnkcjblhoirea.supabase.co/storage/v1/object/public/public-files/0.9681884163274108.png',
    title: 'BONO 1 — Lista de Proveedores',
    description: 'Descubre dónde comprar resina, moldes y materiales con los mejores precios.',
    value: 15.00,
  },
  { 
    imageUrl: 'https://kdloteojnkcjblhoirea.supabase.co/storage/v1/object/public/public-files/0.5409870164785451.png',
    title: 'BONO 2 — Moldes Caseros de Silicona',
    description: 'Aprende a crear tus propios moldes personalizados gastando casi nada.',
    value: 10.00,
  },
  { 
    imageUrl: 'https://kdloteojnkcjblhoirea.supabase.co/storage/v1/object/public/public-files/0.6991364729469136.png',
    title: 'BONO 3 — Lámparas con Resina',
    description: 'Paso a paso completo para crear lámparas modernas y muy valoradas.',
    value: 10.00,
  },
  { 
    imageUrl: 'https://kdloteojnkcjblhoirea.supabase.co/storage/v1/object/public/public-files/0.4464812910082867.png',
    title: 'BONO 4 — Checklist Completo de Trabajo',
    description: 'Checklist para evitar errores, organizar tu producción y garantizar mejores resultados.',
    value: 7.00,
  },
  { 
    imageUrl: 'https://kdloteojnkcjblhoirea.supabase.co/storage/v1/object/public/public-files/0.27787011845584453.png',
    title: 'BONO 5 — Guía de Estrategias de Ventas',
    description: 'Aprende dónde vender, cómo fijar precios y cómo transformar tus piezas en ingresos extras.',
    value: 18.00,
  },
  { 
    imageUrl: 'https://kdloteojnkcjblhoirea.supabase.co/storage/v1/object/public/public-files/0.7076374826659633.png',
    title: 'BONO 6 — Certificado de Finalización',
    description: 'Recibe un certificado oficial al finalizar el curso, comprobando tu aprendizaje y valorando tu trabajo.',
    value: 10.00,
  },
];

export const Bonuses = () => {
  return (
    <section id="bonuses" className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {bonuses.map((bonus, index) => (
                <div key={index} className="flex flex-col text-center items-center p-4">
                    <Image src={bonus.imageUrl} alt={bonus.title} width={150} height={150} className="rounded-lg shadow-md mb-4" />
                    <p className="font-bold text-gray-800">{bonus.title}</p>
                    <p className="text-sm text-gray-600 mt-2">{bonus.description}</p>
                    <p className="mt-2 text-gray-500 line-through">Valor: ${bonus.value.toFixed(2)}</p>
                    <p className="font-bold text-primary">Solo hoy: GRATIS</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-primary text-white rounded-xl p-8 text-center shadow-lg">
            <p className="font-semibold text-lg">🎉 TOTAL EN BONOS:</p>
            <p className="text-5xl font-bold my-2">$70.00</p>
            <p className="text-lg font-semibold">💥 Tú pagas:</p>
            <p className="text-6xl font-bold text-yellow-300 my-4">$0</p>
            <p className="bg-white text-primary font-bold rounded-full px-4 py-2 inline-block">Solamente hoy</p>
          </div>
        </div>
        <div className="mt-12 text-center">
            <p className="text-xl font-bold text-gray-800" style={{ fontFamily: "'Poppins', sans-serif" }}>🔥 ¡Oferta Disponible Solo Hoy!</p>
            <p className="mt-2 text-2xl md:text-3xl font-bold text-primary" style={{ fontFamily: "'Poppins', sans-serif" }}>
                📘 Curso Resina Epoxi desde Cero + 🎁 Todos los 6 Bonos Exclusivos GRATIS
            </p>
            <div className="mt-8 flex justify-center">
                <Image 
                    src="https://kdloteojnkcjblhoirea.supabase.co/storage/v1/object/public/public-files/0.9400414610218671.png"
                    alt="Oferta especial"
                    width={600}
                    height={300}
                    className="rounded-lg shadow-lg"
                />
            </div>
        </div>
      </div>
    </section>
  );
};
