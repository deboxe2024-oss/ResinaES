"use client";
import React from 'react';
import Image from 'next/image';
import { Bot, Package, Droplets, Palette, Zap, Gem, Sparkles, Gift, Star, DollarSign, Camera, BarChart } from 'lucide-react';

const learnItemsPart1 = [
  {
    icon: <Bot className="w-6 h-6 text-primary" />,
    title: "Empezar desde cero",
    description: "Cómo usar resina epoxi incluso sin experiencia.",
  },
  {
    icon: <Package className="w-6 h-6 text-primary" />,
    title: "Materiales correctos",
    description: "Qué comprar, qué evitar y cómo montar tu mini taller gastando poco.",
  },
  {
    icon: <Droplets className="w-6 h-6 text-primary" />,
    title: "Mezcla perfecta",
    description: "Proporción correcta para evitar piezas blandas, pegajosas o mal curadas.",
  },
];

const learnItemsPart2 = [
  {
    icon: <Palette className="w-6 h-6 text-primary" />,
    title: "Colorear la resina",
    description: "Pigmentos, purpurina y polvos metálicos para crear colores hermosos y profesionales.",
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Cero burbujas",
    description: "Técnicas simples para eliminar burbujas y dejar la pieza lisa y cristalina.",
  },
  {
    icon: <Gem className="w-6 h-6 text-primary" />,
    title: "Moldes sin daños",
    description: "Cómo usar y conservar moldes sin romperlos ni que se peguen.",
  },
];

const moldesImages = [
    "https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.6818535343675418.jpg",
    "https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.2705850893593683.jpg",
    "https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.9088450495087108.png",
    "https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.5747916272894782.jpg",
    "https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.6325262814348592.png",
];

const learnItemsPart3 = [
    {
        icon: <Sparkles className="w-6 h-6 text-primary" />,
        title: "Efectos increíbles",
        description: "Remolino, degradado, capas y profundidad.",
    },
    {
        icon: <Gift className="w-6 h-6 text-primary" />,
        title: "Inclusión de objetos",
        description: "Flores, fotos, purpurina, madera y mini elementos dentro de la resina.",
    },
    {
        icon: <Star className="w-6 h-6 text-primary" />,
        title: "Desmoldar correctamente",
        description: "Cómo sacar las piezas del molde sin romperlas ni rayarlas."
    },
    {
        icon: <Sparkles className="w-6 h-6 text-primary" />,
        title: "Acabado brillante",
        description: "Lijar, pulir y sellar para dar un brillo de cristal."
    },
    {
        icon: <Gem className="w-6 h-6 text-primary" />,
        title: "Piezas completas",
        description: "Joyas, llaveros, portavasos, lámparas, geodas y mucho más."
    },
     {
        icon: <DollarSign className="w-6 h-6 text-primary" />,
        title: "Ahorrar hasta un 80%",
        description: "Consejos para reducir costos y aumentar las ganancias en las ventas."
    },
    {
        icon: <Camera className="w-6 h-6 text-primary" />,
        title: "Fotografiar para vender",
        description: "Toma fotos hermosas usando solo tu celular."
    },
    {
        icon: <BarChart className="w-6 h-6 text-primary" />,
        title: "Estrategias de venta",
        description: "Dónde vender, cómo fijar precios y transformar el hobby en un ingreso extra."
    },
]


export const WhatYouWillLearn = () => {
  return (
    <section id="learn" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Lo Que Vas a Aprender
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {learnItemsPart1.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-6">
                {learnItemsPart2.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">{item.icon}</div>
                      <div>
                          <h3 className="font-bold text-lg">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                ))}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {moldesImages.slice(0, 6).map((src, index) => (
                      <Image
                          key={index}
                          src={src}
                          alt={`Molde de resina ${index + 1}`}
                          width={250}
                          height={250}
                          className="rounded-lg object-cover aspect-square shadow-lg"
                      />
                  ))}
              </div>
            </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {learnItemsPart3.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
