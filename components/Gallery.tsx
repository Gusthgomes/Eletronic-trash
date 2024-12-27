'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface GalleryItem {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  { 
    id: 1, 
    title: "Computadores antigos", 
    imageUrl: "https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/08/beigeretrocomputer1.jpg",
    description: "Computadores antigos contribuem significativamente para o lixo eletrônico. Eles contêm materiais valiosos como ouro e cobre, mas também substâncias nocivas como chumbo e mercúrio. A reciclagem adequada é crucial para recuperar materiais valiosos e prevenir a contaminação ambiental."
  },
  { 
    id: 2, 
    title: "Discarte de smartphones", 
    imageUrl: "https://img.freepik.com/free-photo/destruction-smartphone-scene_23-2151500062.jpg",
    description: "Os smartphones são um dos itens eletrônicos mais descartados. Eles contêm metais preciosos e elementos de terras raras. A reciclagem de smartphones pode recuperar esses materiais valiosos e reduzir a necessidade de mineração. É importante remover os dados pessoais antes de reciclar."
  },
  { 
    id: 3, 
    title: "Pilha de lixo eletrônico", 
    imageUrl: "https://www.ept.ca/wp-content/uploads/2020/11/Screen-Shot-2020-11-10-at-7.29.39-AM.png",
    description: "As pilhas de lixo eletrônico são uma preocupação crescente em todo o mundo. Representam riscos ambientais e de saúde se não forem devidamente geridos. Estas pilhas contêm frequentemente uma mistura de vários dispositivos eletrónicos, cada um com diferentes requisitos de reciclagem."
  },
  { 
    id: 4, 
    title: "Centro de reciclagem de lixo eletrônico", 
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7J8L4y5tu9pUrrsN8DVtrhO6SPjc0lUWbcQ&s",
    description: "Os centros de reciclagem de lixo eletrônico desempenham um papel crucial na gestão do lixo eletrônico. Eles utilizam equipamentos especializados para desmontar dispositivos, classificar materiais e prepará-los para reutilização ou descarte adequado. Esses centros ajudam a recuperar materiais valiosos e a reduzir o impacto ambiental."
  },
  { 
    id: 5, 
    title: "Placas eletrônicas", 
    imageUrl: "https://novaenginc.com/wp-content/uploads/2022/05/Printed-Circuit-Boards-and-How-They-Function-1080x675.png",
    description: "As placas de circuito são encontradas em quase todos os dispositivos eletrônicos. Eles contêm vários metais preciosos como ouro, prata e paládio. A reciclagem de placas de circuito pode recuperar esses materiais valiosos. No entanto, eles também contêm materiais perigosos que requerem manuseio cuidadoso."
  },
  { 
    id: 6, 
    title: "Seleta de lixo eletrônico", 
    imageUrl: "https://img.freepik.com/premium-photo/workers-ewaste-recycling-plant-sorting-dismantling-used-electronics-concept-recycling-ewaste-workers-electronics-sorting_864588-56105.jpg",
    description: "A seleta de lixo é uma etapa crítica na gestão do lixo eletrônico. Diferentes tipos de lixo eletrônico requerem diferentes processos de reciclagem. A classificação adequada garante que os materiais sejam reciclados de forma eficiente e que os componentes perigosos sejam manuseados com segurança."
  },
]

export default function EWasteGallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  return (
    <div className="mx-auto px-4 py-6 px-5 bg-gradient-to-br from-green-50 to-blue-50 h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">Galeria do lixo</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
            onClick={() => setSelectedItem(item)}
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={selectedItem !== null} onOpenChange={() => setSelectedItem(null)}>
        {selectedItem && (
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{selectedItem.title}</DialogTitle>
            </DialogHeader>
            <Image
              src={selectedItem.imageUrl}
              alt={selectedItem.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <DialogDescription>
              {selectedItem.description}
            </DialogDescription>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}

