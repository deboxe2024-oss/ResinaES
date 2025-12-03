"use client";
import { CheckCircle } from "lucide-react";
import React from "react";
import Image from "next/image";

const benefits = [
    { title: "Aprende rápido, incluso comenzando desde cero", description: "Clases simples, prácticas y 100% en video." },
    { title: "Evita errores de principiante", description: "Aprende exactamente qué hacer (y qué no hacer) para no desperdiciar material." },
    { title: "Piezas realmente hermosas y profesionales", description: "Técnicas que dejan tus creaciones con brillo, color y acabado impecable." },
    { title: "Ahorra tiempo y dinero", description: "Aprende a usar los materiales correctos, mezclar de la manera correcta y gastar menos." },
    { title: "Crea varios tipos de piezas", description: "Joyas, portavasos, lámparas, geodas, llaveros y mucho más." },
    { title: "Resultados rápidos", description: "Puedes crear tus primeras piezas en la primera semana." },
    { title: "Conviértelo en un ingreso extra", description: "Estrategias para promocionar, fotografiar y vender tus piezas con ganancias." },
    { title: "Curso para hacer a tu propio ritmo", description: "Mira cuando quieras, desde casa, sin presiones ni plazos." },
    { title: "Acceso inmediato y vitalicio", description: "Ingresa ahora y comienza a aprender hoy mismo." },
];

const benefitImages = [
    "https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.5872215207087303.jpg",
    "https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.1951684280195365.png",
    "https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.5111575120561582.jpg",
    "https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.862953732043286.jpg",
    "https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.6269668836051501.jpg",
    "https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.90968985320192.jpg",
];


export const Benefits = () => {
    return (
        <section id="benefits" className="py-16 sm:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        🌟 Beneficios del Curso
                    </h2>
                </div>
                 <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
                    {benefitImages.map((src, index) => (
                        <Image 
                            key={index}
                            src={src}
                            alt={`Ejemplo de pieza de resina ${index + 1}`}
                            width={400}
                            height={400}
                            className="rounded-lg shadow-lg object-cover aspect-square"
                        />
                    ))}
                </div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
                            <h3 className="font-bold text-xl text-gray-800">{benefit.title}</h3>
                            <p className="mt-2 text-gray-600">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
