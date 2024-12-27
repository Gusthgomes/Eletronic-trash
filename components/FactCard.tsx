"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, Share2, Smartphone, Laptop, Recycle, Battery } from 'lucide-react';

import { LucideIcon } from "lucide-react";

interface FactCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
  }

  const FactCard: React.FC<FactCardProps>= ({ icon: Icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className="transition-transform duration-300 hover:scale-105 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-full ${isHovered ? 'bg-blue-100' : 'bg-gray-100'}`}>
            <Icon className={`h-8 w-8 ${isHovered ? 'text-blue-600' : 'text-gray-600'}`} />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const facts = [
  {
    icon: Laptop,
    title: "Volume Anual de Resíduos Eletrônicos",
    description: "Globalmente, geramos cerca de 50 milhões de toneladas de resíduos eletrônicos por ano – o equivalente a descartar 1000 laptops a cada segundo!"
  },
  {
    icon: Smartphone,
    title: "Valor oculto",
    description: "Um milhão de celulares reciclados podem recuperar 15.875 kg de cobre, 350 kg de prata e 34 kg de ouro."
  },
  {
    icon: Recycle,
    title: "Taxa de reciclagem",
    description: "Apenas 17,4% dos resíduos eletrônicos globais são formalmente reciclados, significando que materiais valiosos no valor de mais de US$ 57 bilhões são perdidos."
  },
  {
    icon: AlertCircle,
    title: "Impacto ambiental",
    description: "Os resíduos eletrônicos contêm materiais tóxicos como chumbo e mercúrio, que podem contaminar o solo e a água se não forem descartados adequadamente."
  },
  {
    icon: Share2,
    title: "Problemas em crescimento",
    description: "Os resíduos eletrônicos são o fluxo de resíduos domésticos que mais cresce no mundo, aumentando 21% em apenas 5 anos."
  },
  {
    icon: Battery,
    title: "Impacto de baterias",
    description: "A reciclagem de um milhão de baterias de laptop pode economizar energia suficiente para abastecer 1.535 residências durante um ano e evitar que milhares de quilos de metais tóxicos entrem em aterros sanitários."
  }
];

const EwasteFacts = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Fatos Surpreendentes sobre Resíduos Eletrônicos</h1>
        <p className="text-lg text-gray-600">Descubra o impacto oculto dos resíduos eletrônicos</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {facts.map((fact, index) => (
          <FactCard 
            key={index}
            icon={fact.icon}
            title={fact.title}
            description={fact.description}
          />
        ))}
      </div>

      <Card className="mt-12 bg-blue-50">
        <CardHeader>
          <CardTitle className="text-center text-blue-800">Tome uma atitude!</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-blue-700 mb-4">
          Você pode fazer a diferença ao descartar corretamente seus dispositivos eletrônicos e conscientizar sobre os resíduos eletrônicos.
          </p>
          <div className="flex justify-center space-x-4">
            {[Smartphone, Laptop, Recycle].map((Icon, index) => (
              <div key={index} className="animate-bounce">
                <Icon className="h-8 w-8 text-blue-600" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EwasteFacts;