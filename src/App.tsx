import { Heart, Phone, MapPin, Clock, Stethoscope, Syringe, Scissors, CheckCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-teal-600" fill="currentColor" />
              <span className="text-2xl font-bold text-gray-900">VetCare</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-teal-600 transition-colors">Inicio</a>
              <a href="#servicios" className="text-gray-700 hover:text-teal-600 transition-colors">Servicios</a>
              <a href="#nosotros" className="text-gray-700 hover:text-teal-600 transition-colors">Nosotros</a>
              <a href="#contacto" className="text-gray-700 hover:text-teal-600 transition-colors">Contacto</a>
            </nav>
            <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors shadow-md hover:shadow-lg">
              Agendar Cita
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative bg-gradient-to-br from-teal-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Cuidado Profesional para tus Mejores Amigos
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Brindamos atención veterinaria de calidad con más de 15 años de experiencia. Tu mascota merece lo mejor.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition-all shadow-md hover:shadow-xl transform hover:-translate-y-0.5">
                  Reservar Consulta
                </button>
                <button className="bg-white text-teal-600 px-8 py-3 rounded-full border-2 border-teal-600 hover:bg-teal-50 transition-all">
                  Ver Servicios
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-teal-600 rounded-3xl h-96 flex items-center justify-center shadow-2xl">
                <Heart className="w-32 h-32 text-white opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">15+</div>
              <div className="text-gray-600">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">5000+</div>
              <div className="text-gray-600">Mascotas Atendidas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">24/7</div>
              <div className="text-gray-600">Emergencias</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfacción</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600">Atención integral para el bienestar de tu mascota</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Stethoscope className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Consultas Generales</h3>
              <p className="text-gray-600 mb-6">Chequeos de rutina, diagnósticos y planes de salud personalizados para tu mascota.</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Examen físico completo</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Análisis de laboratorio</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Plan preventivo</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Syringe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Vacunación</h3>
              <p className="text-gray-600 mb-6">Protege a tu mascota con nuestro completo programa de vacunación y desparasitación.</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Vacunas esenciales</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Desparasitación interna</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Control de parásitos</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Scissors className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cirugías</h3>
              <p className="text-gray-600 mb-6">Procedimientos quirúrgicos con equipo moderno y profesionales especializados.</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-rose-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Esterilización</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-rose-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Cirugías menores</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-rose-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Procedimientos complejos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">¿Por Qué Elegirnos?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Somos una clínica veterinaria con un equipo de profesionales apasionados por el cuidado animal. Contamos con instalaciones modernas y tecnología de punta.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-teal-100 p-2 rounded-lg mr-4">
                    <CheckCircle className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Equipo Especializado</h4>
                    <p className="text-gray-600">Veterinarios certificados con años de experiencia</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-teal-100 p-2 rounded-lg mr-4">
                    <CheckCircle className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Tecnología Avanzada</h4>
                    <p className="text-gray-600">Equipos modernos para diagnóstico preciso</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-teal-100 p-2 rounded-lg mr-4">
                    <CheckCircle className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Atención 24/7</h4>
                    <p className="text-gray-600">Disponibles para emergencias en cualquier momento</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-3xl h-96 flex items-center justify-center shadow-xl">
              <Heart className="w-40 h-40 text-teal-600 opacity-30" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contáctanos</h2>
            <p className="text-xl text-gray-600">Estamos aquí para ayudarte</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Teléfono</h3>
              <p className="text-gray-600">+34 123 456 789</p>
              <p className="text-gray-600">Lun - Dom: 24 horas</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dirección</h3>
              <p className="text-gray-600">Calle Principal 123</p>
              <p className="text-gray-600">Madrid, España</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Horario</h3>
              <p className="text-gray-600">Lunes - Viernes: 9:00 - 20:00</p>
              <p className="text-gray-600">Sábados - Domingos: 10:00 - 18:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-6 h-6 text-teal-400" fill="currentColor" />
                <span className="text-xl font-bold">VetCare</span>
              </div>
              <p className="text-gray-400">Cuidando a tus mascotas con amor y profesionalismo desde 2008.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-teal-400 transition-colors cursor-pointer">Consultas</li>
                <li className="hover:text-teal-400 transition-colors cursor-pointer">Vacunación</li>
                <li className="hover:text-teal-400 transition-colors cursor-pointer">Cirugías</li>
                <li className="hover:text-teal-400 transition-colors cursor-pointer">Emergencias</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Información</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-teal-400 transition-colors cursor-pointer">Sobre Nosotros</li>
                <li className="hover:text-teal-400 transition-colors cursor-pointer">Equipo</li>
                <li className="hover:text-teal-400 transition-colors cursor-pointer">Blog</li>
                <li className="hover:text-teal-400 transition-colors cursor-pointer">Contacto</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-teal-400 transition-colors cursor-pointer">Privacidad</li>
                <li className="hover:text-teal-400 transition-colors cursor-pointer">Términos</li>
                <li className="hover:text-teal-400 transition-colors cursor-pointer">Cookies</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>2024 VetCare. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
