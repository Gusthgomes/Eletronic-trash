import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function RecyclingLandingPage() {
  return (
    <div className="min-h-screen bg-white">

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-12 md:py-20">
          
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-green-500">RECICLANDO</span>
              <br />
              <span className="text-green-500">LIXO ELETRÔNICO</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-lg">
              Descubra como o e-lixo afeta o meio ambiente e como você pode ajudar a reciclar seus eletrônicos
            </p>
            <Button 
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8"
              asChild
            >
              <Link href="/recycling">
              leia mais
              </Link>
            </Button>
          </div>

          
          <div className="relative h-[400px] md:h-[500px] w-full">
            <Image
              src="https://i0.wp.com/blog.cicloorganico.com.br/wp-content/uploads/2020/08/captura-de-tela-2020-08-20-as-07-49-08.jpg?fit=700%2C640&ssl=1"
              alt="Recycling Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </main>

      <div className="fixed top-20 right-20 animate-float">
        <div className="w-8 h-8 rounded-full bg-green-200" />
      </div>
      <div className="fixed top-40 right-40 animate-float delay-200">
        <div className="w-6 h-6 rounded-full bg-green-300" />
      </div>
    </div>
  )
}

