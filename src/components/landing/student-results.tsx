import { Card, CardContent } from '@/components/ui/card';

const students = [
  {
    name: 'Mariana Silva',
    time: 'menos de 10 días',
    description: 'Esta alumna hizo una increíble funda de celular en resina, demostrando la rapidez con la que se pueden crear piezas hermosas.',
    videoSrc: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.6560235820404565.mp4',
  },
  {
    name: 'Juliana Costa',
    time: 'menos de 10 días',
    description: 'Esta alumna hizo un reloj de pared para su casa, un proyecto práctico y muy valorado.',
    videoSrc: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.2960567343072176.mp4',
  },
  {
    name: 'Beatriz Almeida',
    time: 'menos de 10 días',
    description: 'Esta alumna también hace relojes, pero para venta por encargo, mostrando el potencial de negocio.',
    videoSrc: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.2777280647460657.mp4',
  },
  {
    name: 'Camila Santos',
    time: '1 mes de curso',
    description: 'Nuestra alumna más antigua, con 1 mes de curso, ya está facturando mucho. ¡Mira la cantidad de relojes que está haciendo con alto rendimiento!',
    videoSrc: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.9340392398387358.mp4',
  },
   {
    name: 'Fernanda Oliveira',
    time: 'menos de 10 días',
    description: 'Esta alumna también está haciendo relojes, ya que es simple y rentable. ¡Puedes hacer lo que quieras!',
    videoSrc: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.459569215635111.mp4',
  },
   {
    name: 'Gabriela Pereira',
    time: 'menos de 10 días',
    description: 'Desde fundas hasta un hermoso objeto de decoración como el que hizo esta alumna.',
    videoSrc: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.5649383616062752.mp4',
  },
  {
    name: 'Larissa Martins',
    time: '35 días',
    description: 'En el nivel intermedio, esta alumna está haciendo mesas de decoración. Le tomó solo 35 días dominar el arte y conseguir su clientela.',
    videoSrc: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.04027210476537424.mp4',
  },
   {
    name: 'Sofia Ribeiro',
    time: 'Conclusión del curso',
    description: '¡Resultado de alto nivel! Hizo esta mesa por encargo para su ex-jefe y renunció después de la mitad del curso. Hoy, tiene más de 20 ventas mensuales, el triple de su antiguo salario.',
    videoSrc: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.16781002622817653.mp4',
  },
];

export const StudentResults = () => {
  return (
    <section id="student-results" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
            ⭐ Resultados de Nuestras Alumnas
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Mira lo que nuestras alumnas han creado con el conocimiento del curso. ¡Resultados increíbles en poco tiempo!
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {students.map((student, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="w-full">
                  <video src={student.videoSrc} controls className="w-full h-auto" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{student.name}</h3>
                  <p className="text-sm text-primary font-semibold mt-1">Resultado en {student.time}</p>
                  <p className="mt-4 text-gray-600">{student.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
