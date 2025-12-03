"use client";
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Lock } from 'lucide-react';
import Image from 'next/image';

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 42, seconds: 58 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime.seconds > 0) {
                    return { ...prevTime, seconds: prevTime.seconds - 1 };
                }
                if (prevTime.minutes > 0) {
                    return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
                }
                if (prevTime.hours > 0) {
                    return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
                }
                return prevTime; // timer stops at 00:00:00
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    
    const formatTime = (time: number) => time.toString().padStart(2, '0');

    return (
        <div className="text-center mt-8">
            <p className="text-lg font-medium text-gray-700">⏳ Esta Oferta Finaliza En:</p>
            <div className="mt-2 text-4xl font-bold text-primary flex items-center justify-center space-x-2">
                <div className="bg-white p-3 rounded-lg shadow-md">
                    <span>{formatTime(timeLeft.hours)}</span>
                    <p className="text-sm font-normal">Horas</p>
                </div>
                <span>:</span>
                <div className="bg-white p-3 rounded-lg shadow-md">
                    <span>{formatTime(timeLeft.minutes)}</span>
                    <p className="text-sm font-normal">Minutos</p>
                </div>
                <span>:</span>
                <div className="bg-white p-3 rounded-lg shadow-md">
                    <span>{formatTime(timeLeft.seconds)}</span>
                    <p className="text-sm font-normal">Segundos</p>
                </div>
            </div>
        </div>
    );
};


export const Pricing = () => {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary">⭐ ¿Cómo acceder a la promoción?</h2>
            <p className="mt-4 text-lg text-gray-600">
            Una vez realizado el pago, recibirás acceso inmediato al curso completo + todos los bonos adicionales directamente en tu correo electrónico. Podrás verlo en el celular, tablet o computadora, desde donde quieras.
            </p>
        </div>

        <div 
            className="mt-10 max-w-md mx-auto bg-white rounded-2xl shadow-2xl border-2 border-primary overflow-hidden relative"
        >
            <Image
                src="https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.8006452504769752.png"
                alt="fundo da oferta"
                layout="fill"
                objectFit="cover"
                className="opacity-10"
            />
            <div className="p-8 relative">
                <p className="font-bold text-gray-500">📦 ¿QUÉ VAS A RECIBIR?</p>
                <p className="mt-4 text-gray-500 line-through text-2xl">Todo este contenido sumaría: $83.00</p>
                <p className="mt-2 text-sm font-bold uppercase text-primary">🎉 VALOR ESPECIAL, SOLAMENTE HOY:</p>
                <div className="my-2 flex items-center justify-center">
                  <p className="text-6xl md:text-7xl font-black text-primary">
                     $12.90
                  </p>
                </div>
                <p className="text-gray-600 mt-4">
                    ¡Aprovecha esta oportunidad! Al final de la oferta, el valor volverá a $83.00. Asegura ahora el acceso completo con todas las clases, bonos y certificado por un precio único.
                </p>

                <div className="mt-6">
                  <Button asChild className="h-14 w-full px-8 text-lg font-bold text-white bg-green-500 hover:bg-green-600 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 animate-subtle-pulse">
                      <a href="https://pay.hotmart.com/F103245627C?checkoutMode=10" target="_blank" rel="noopener noreferrer">
                        QUIERO GARANTIZAR MI VAGA
                      </a>
                  </Button>
                </div>
                <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
                    <Lock className="w-4 h-4 mr-2 text-green-600"/>
                    <span>COMPRA 100% SEGURA</span>
                </div>
                 <div className="mt-2 flex items-center justify-center text-sm text-gray-500">
                    <span>🌎 DISPONIBLE PARA TODO EL MUNDO</span>
                </div>
            </div>
             <div className="bg-gray-100/80 p-6 relative">
                <CountdownTimer />
            </div>
        </div>
      </div>
    </section>
  );
};
