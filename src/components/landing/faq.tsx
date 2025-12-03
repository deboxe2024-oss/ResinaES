"use client";

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '@/components/ui/button';

const faqItems = [
  {
    question: "¿Cuándo recibo el curso y los bonos?",
    answer: "El acceso es inmediato después de la confirmación del pago. Recibirás un correo electrónico con todas las instrucciones para acceder a la plataforma del curso y todos los bonos."
  },
  {
    question: "¿Dónde puedo comprar resina y materiales en mi ciudad?",
    answer: "En el bono 'Lista de Proveedores', encontrarás una lista completa con los mejores y más económicos proveedores, muchos de los cuales venden en línea y entregan en tu casa."
  },
  {
    question: "¿Cómo puedo ver el curso digital?",
    answer: "Puedes ver las clases en cualquier dispositivo con acceso a internet: celular, tableta, computadora o smart TV. El acceso es vitalicio, por lo que puedes ver y rever las clases cuantas veces quieras."
  },
  {
    question: "¿Hay soporte para dudas?",
    answer: "¡Sí! Tendrás soporte directamente con la profesora para resolver todas tus dudas durante el curso, garantizando que no te quedes atascado en ninguna etapa."
  },
  {
    question: "¿Cuál es el precio?",
    answer: "El curso completo con todos los bonos tiene una oferta especial de lanzamiento por solo $12.90. Este es un pago único, sin mensualidades."
  }
];

export const Faq = () => {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
            ❓ Preguntas Frecuentes
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full mt-10">
          {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index+1}`} key={index}>
              <AccordionTrigger className="text-lg font-semibold text-left">{item.question}</AccordionTrigger>
              <AccordionContent className="text-base text-gray-700">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild className="h-14 px-8 text-lg font-bold text-white bg-green-500 hover:bg-green-600 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 animate-subtle-pulse">
                <a href="https://pay.hotmart.com/F103245627C?checkoutMode=10&bid=1764744993827" className="hotmart-fb">
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
      </div>
    </section>
  );
};
