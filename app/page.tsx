'use client'
import Image from 'next/image'
import { Heart, Send, MapPin, Calendar, Clock } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="min-h-screen bg-[#E9F0F3]"> {/* Fondo pagina */}
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gradient-to-b from-[#ADC0BFFF] to-[#E9F0F3] text-[#36413FFF]"> {/* color nav */}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-12 space-x-8">
            <p className="font-serif"> Francisca y Diego</p>
          </div>
        </div>
      </nav>

      {/* Image Section */}
      <div className="relative h-[500px]">
        <Image
          src="/header.jpg?height=500&width=1920"
          alt="Wedding bouquet"
          width={1920}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Couple Section */}
      <section className="py-10 px-1 ">
        <div className="max-w-4xl mx-auto bg-[#FFFFFF]/50 rounded-lg p-8 -mt-32 relative">
          <div className="flex justify-between items-center">
            {/* Francisca */}
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto">
                <Image
                  src="/fr.png?height=128&width=128"
                  alt="Groom"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              {/*
              <h3 className="mt-4 font-serif">Francisca Rodriguez</h3>

              <p className="text-sm text-[#4C77A9]">Cristian Rodriguez Sanchez</p>
              <p className="text-sm text-[#4C77A9]">Patricia Fonseca Rojas</p>
              */}
            </div>

            <div className="text-center">
              <Heart className="w-12 h-12 text-[#1B3059] mx-auto" />
              <div className="text-center text-3xl font-serif mb-12">01-03-2025</div>
            </div>

            {/* Diego */}
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto">
                <Image
                  src="/ds.png?height=128&width=128"
                  alt="Bride"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              {/*
              <h3 className="mt-4 font-serif">Diego Salinas</h3>
              <p className="text-sm text-[#4C77A9]">Rodrigo Salinas Oyarce</p>
              <p className="text-sm text-[#4C77A9]">Macarena Salas Steinlen</p>
              */}
            </div>
          </div>
        </div>
      </section>

      {/* Date Events Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-serif mb-12">Eventos</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-[#FFFFFF]/50 rounded-3xl"> {/* Fondo card */}
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-[#2A4A7F] mb-4">Ceremonia</h3> {/* Azul Oscuro */}
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>01 Marzo 2025</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>07:00 am - 09:00 am</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>Santuario de Shoenstatt, Peñuelas</span>
                  </div>
                  <div className="h-[320px] bg-gray-100 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.7257597200246!2d-71.2936021!3d-29.9585659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9691c963bf76fad5%3A0x5e93224e9b24905e!2sSantuario%20de%20Schoenstatt%20Tabor%20de%20Pe%C3%B1uelas!5e0!3m2!1ses!2scl!4v1730947470815!5m2!1ses!2scl"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#FFFFFF]/50 rounded-3xl"> {/* Fondo card */}
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-[#2A4A7F] mb-4">Fiesta de matrimonio</h3> {/* Azul Oscuro */}
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>01 Marzo 2025</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>07:00 pm - 10:00 pm</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>Hacienda Venus, Pan de Azucar</span>
                  </div>
                  <div className="h-[320px] bg-gray-100 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.09874630963!2d-71.25356579999999!3d-30.0340248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9691cdb226e35539%3A0x3d6a3271a56bc1ba!2sHacienda%20Venus!5e0!3m2!1ses!2scl!4v1730947540013!5m2!1ses!2scl"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-[#E9F0F3] to-[#ADC0BF] text-[#FFFFFF]"> {/* Fondo footer */}
        <div className="py-2">
          <a href="https://devbastian.reflex.run/">por bastian💻</a>
        </div>
      </footer>
    </div>
  )
}