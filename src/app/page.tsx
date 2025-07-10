"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="font-['Playfair Display'], serif font-[\'Playfair Display\'], serif text-gray-800">
      {/* el navbar */}
      <nav className="fixed top-0 w-full bg-white shadow z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">Service and Protocol</h1>

          {/* Menu Desk */}
          <ul className="hidden md:flex space-x-6">
            <a href="#inicio" className="text-[#000000] hover:text-[#B78C60] transition-colors duration-300">Inicio</a>
            <a href="#servicios" className="text-[#000000] hover:text-[#B78C60] transition-colors duration-300">Servicios</a>
            <a href="#nosotros" className="text-[#000000] hover:text-[#B78C60] transition-colors duration-300">Nosotros</a>
            <a href="#contacto" className="text-[#000000] hover:text-[#B78C60] transition-colors duration-300">Contacto</a>
          </ul>

          {/* Botones movil */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Menu Movil */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <ul className="flex flex-col p-4 space-y-2">
              <li><a href="#inicio" className="text-[#000000] hover:text-[#B78C60] transition-colors duration-300">Inicio</a></li>
              <li><a href="#servicios" className="text-[#000000] hover:text-[#B78C60] transition-colors duration-300">Servicios</a></li>
              <li><a href="#nosotros" className="text-[#000000] hover:text-[#B78C60] transition-colors duration-300">Nosotros</a></li>
              <li><a href="#contacto" className="text-[#000000] hover:text-[#B78C60] transition-colors duration-300">Contacto</a></li>
            </ul>
          </div>
        )}
      </nav>

      <section
        id="inicio"
        className="h-[90vh] bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white text-center px-4 md:rounded-xl md:mx-6 shadow-xl"
      >

        <div className="p-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            <span className="bg-black/40 px-2 py-1 rounded">Proyectamos tu imagen al mundo</span>
          </h2>
          <p className="text-lg md:text-xl mb-6 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]">
            <span className="bg-black/30 px-2 py-1 rounded">
              Relaciones públicas, eventos, protocolo y promociones publicitarias
            </span>
          </p>
          <a
            href="#contacto"
            className="bg-[floralwhite] text-gray-800 px-6 py-3 rounded hover:text-[#B78C60] transition-colors duration-300"
          >
            Contáctanos
          </a>
        </div>
      </section>

      {/* servicios */}
      <section id="servicios" className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Relaciones Públicas", desc: "Creamos y gestionamos tu imagen pública con impacto y profesionalismo." },
              { title: "Organización de Eventos", desc: "Diseñamos y ejecutamos eventos memorables a la medida de tus necesidades." },
              { title: "Protocolo", desc: "Coordinamos actos oficiales y corporativos bajo estrictas normas de etiqueta." },
              { title: "Promociones Publicitarias", desc: "Impulsamos tu marca mediante campañas innovadoras y efectivas." },
            ].map((s, i) => (
              <div key={i} className="bg-white p-6 rounded shadow hover:shadow-md transition">
                <h4 className="text-xl font-semibold mb-2">{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* nosotros */}
      <section id="nosotros" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">¿Quiénes Somos?</h3>
          <p className="text-lg text-gray-700">
            En <strong>Service and Protocol</strong> nos dedicamos a gestionar con excelencia la imagen pública,
            los eventos institucionales y las acciones promocionales de nuestros clientes.
            Nuestro equipo combina elegancia, profesionalismo y creatividad para garantizar resultados de alto nivel.
          </p>
        </div>
      </section>

     {/* contacto */}
      <section id="contacto" className="py-20 bg-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Contáctanos</h3>
          <p className="mb-6 flex justify-center items-center gap-2 text-lg">
            <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-6 h-6" />
            <a
              href="https://wa.me/35600888158"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:underline"
            >
              +35 600 888 158
            </a>
          </p>
        </div>
      </section>

    {/* y el footer */}
    <footer className="bg-black text-white py-10 px-6 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-8">
        <div>
          <h4 className="font-semibold text-base mb-2">Service and Protocol</h4>
          <p>Proyectamos tu imagen al mundo con elegancia y profesionalismo.</p>
        </div>
        <div>
          <h4 className="font-semibold text-base mb-2">Contacto</h4>
          <p>
            WhatsApp:{" "}
            <a
              href="https://wa.me/35600888158"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:underline"
            >
              +35 600 888 158
            </a>
          </p>
          <p>Email: contacto@serviceandprotocol.com</p>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-6">
        &copy; {new Date().getFullYear()} Service and Protocol. Todos los derechos reservados.
      </div>
    </footer>
    </main>
  );
}
