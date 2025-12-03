import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Resina Master',
  description: 'Aprende a hacer Artes con Resina Epoxi y Crea Piezas Increíbles',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <Script
          id="utmify-utms"
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          strategy="afterInteractive"
        />
        <Script
          id="utmify-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                window.pixelId = "692a3401fa4370be9679239f";
                var a = document.createElement("script");
                a.setAttribute("async", "");
                a.setAttribute("defer", "");
                a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
                document.head.appendChild(a);
              })();
            `,
          }}
        />
        <Script 
          id="hotmart-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function importHotmart(){ 
                var imported = document.createElement('script'); 
                imported.src = 'https://static.hotmart.com/checkout/widget.min.js'; 
                document.head.appendChild(imported); 
                var link = document.createElement('link'); 
                link.rel = 'stylesheet'; 
                link.type = 'text/css'; 
                link.href = 'https://static.hotmart.com/css/hotmart-fb.min.css'; 
                document.head.appendChild(link);	
              } 
              importHotmart(); 
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
