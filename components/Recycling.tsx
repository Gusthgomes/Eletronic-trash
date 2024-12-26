"use client";

import React, { useState } from 'react';
import { 
  Recycle, 
  Check, 
  X, 
  ChevronDown, 
  ChevronUp, 
  Smartphone, 
  Laptop, 
  Printer, 
  Battery, 
  HardDrive 
} from 'lucide-react';
import { Card } from '@/components/ui/card';

export const Recycling = () => {
  const [openSection, setOpenSection] = useState<string | null>('preparation');

  const recyclableItems = [
    { 
      name: 'Smartphones',
      icon: <Smartphone />,
      description: 'Contém metais valiosos e baterias tóxicas'
    },
    { 
      name: 'Computadores',
      icon: <Laptop />,
      description: 'Rico em metais preciosos e plásticos recicláveis'
    },
    { 
      name: 'Impressoras',
      icon: <Printer />,
      description: 'Contém cartuchos e metais recicláveis'
    },
    { 
      name: 'Baterias',
      icon: <Battery />,
      description: 'Deve ser especialmente processado devido ao conteúdo tóxico'
    },
    { 
      name: 'Dispositivos de armazenamento',
      icon: <HardDrive />,
      description: 'Contém valiosos metais que podem ser recuperados'
    }
  ];

  const sections = {
    preparation: {
      title: 'Etapas de preparação',
      content: [
        'Faça backup de todos os dados pessoais',
        'Ative redefinição de fábrica para remover informações pessoais',
        'remova as baterias para reciclagem separada',
        'Mantenha todos os componentes originais juntos',
        'Colete toda a docuemntação necessária'
      ]
    },
    dos: {
      title: 'Boas práticas',
      content: [
        'Use recicladores de lixo eletrônico certificados',
        'Separe diferentes tipos de eletrônicos',
        'Mantenha os dispositivos intactos até a reciclagem',
        'Considere doar dispositivos funcionais',
        'Pesquise programas locais de reciclagem'
      ]
    },
    donts: {
      title: 'O que evitar ?',
      content: [
        'Nunca jogue lixo eletrônico no lixo comum',
        'Evite quebrar ou desmontar dispositivos',
        "Não armazene lixo eletrônico indefinidamente",
        'Nunca descarte em aterros',
        "Não ignore a segurança dos dados"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Recycle className="w-16 h-16 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Melhores práticas de reciclagem de lixo eletrônico
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A reciclagem adequada de resíduos eletrônicos ajuda a proteger nosso meio ambiente e a recuperar materiais valiosos.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Eletrônicos Recicláveis ​​Comuns
            </h2>
            <div className="space-y-4">
              {recyclableItems.map((item) => (
                <div key={item.name} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                  <div className="text-green-600">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="space-y-4">
            {Object.entries(sections).map(([key, section]) => (
              <Card key={key} className="overflow-hidden">
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                  onClick={() => setOpenSection(openSection === key ? null : key)}
                >
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                  {openSection === key ? 
                    <ChevronUp className="text-gray-600" /> : 
                    <ChevronDown className="text-gray-600" />
                  }
                </button>
                {openSection === key && (
                  <div className="px-6 pb-4">
                    <ul className="space-y-2">
                      {section.content.map((item, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          {key === 'donts' ? 
                            <X className="text-red-500 w-5 h-5" /> : 
                            <Check className="text-green-500 w-5 h-5" />
                          }
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Por que a reciclagem adequada de lixo eletrônico é importante ?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold mb-2">Proteção ambiental</h3>
              <p className="text-sm text-gray-600">Evita que materiais tóxicos contaminem o solo e as fontes de água</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold mb-2">Recuperação de recuros</h3>
              <p className="text-sm text-gray-600">Recupera metais e materiais valiosos para reutilização em novos produtos</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold mb-2">Segurança de dados</h3>
              <p className="text-sm text-gray-600">Garante que as informações pessoais sejam devidamente destruídas e protegidas</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}