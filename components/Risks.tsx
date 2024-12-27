"use client";

import React, { useState, SVGProps } from 'react';
import { Info, Factory, Droplet, Skull, Zap, AlertTriangle } from 'lucide-react';

type RiskZone = {
  id: string;
  name: string;
  position: { x: number; y: number };
  icon: React.ReactElement<SVGProps<SVGSVGElement>>;
  description: string;
  risks: string[];
  color: string;
  textColor: string; 
};

const EWasteRiskMap: React.FC = () => {
  const [activeZone, setActiveZone] = useState<string | null>(null);

  const riskZones: RiskZone[] = [
    {
      id: 'processingPlant',
      name: 'Planta de processamento de lixo eletrônic',
      position: { x: 200, y: 250 },
      icon: <Factory className="w-12 h-12 text-gray-700" />,
      description:
        'Instalação industrial onde o lixo eletrônico é classificado, desmontado e processado. Alto risco de exposição a produtos químicos e manuseio inadequado de resíduos.',
      risks: [
        'Exposição química direta',
        'Contaminação por metais pesados',
        'Perigo para a saúde dos trabalhadores',
      ],
      color: 'fill-gray-600',
      textColor: 'text-gray-800',
    },
    {
      id: 'waterSource',
      name: 'Bacia de Água Contaminada',
      position: { x: 500, y: 400 },
      icon: <Droplet className="w-12 h-12 text-blue-600" />,
      description:
        'Ecossistema aquático comprometido pelo descarte de lixo eletrônico, que libera substâncias químicas tóxicas, colocando em risco a vida marinha e a qualidade do abastecimento de água potável.',
      risks: [
        'Poluição das águas subterrâneas',
        'Destruição de ecossistemas aquáticos',
        'Contaminação da água potável',
      ],
      color: 'fill-blue-600',
      textColor: 'text-blue-900',
    },
    {
      id: 'wasteDump',
      name: 'Despejo de resíduos tóxicos',
      position: { x: 150, y: 500 },
      icon: <Skull className="w-12 h-12 text-red-600" />,
      description:
        'Local de descarte não regulamentado que acumula lixo eletrônico, causando graves riscos ambientais e à saúde.',
      risks: [
        'Contaminação do solo',
        'Danos ecológicos a longo prazo',
        'Riscos de saúde pública',
      ],
      color: 'fill-red-600',
      textColor: 'text-red-900',
    },
    {
      id: 'smokePlume',
      name: 'Poluição da atmosfera',
      position: { x: 600, y: 150 },
      icon: <Zap className="w-12 h-12 text-yellow-600" />,
      description:
        'Espaço aéreo afetado por emissões tóxicas provenientes da queima e processamento de resíduos eletrónicos, causando grave degradação da qualidade do ar.',
      risks: [
        'Emissão de gases tóxicos',
        'Ricos para a saúde respiratória',
        'Aquecimento global',
      ],
      color: 'fill-yellow-600',
      textColor: 'text-yellow-900',
    },
    {
      id: 'warningZone',
      name: 'Alerta ambiental de alto risco',
      position: { x: 400, y: 300 },
      icon: <AlertTriangle className="w-12 h-12 text-orange-600" />,
      description:
        'Zona central destacando os riscos críticos interligados da gestão inadequada do lixo eletrônico.',
      risks: [
        'Impactos ambientais em cascata',
        'Ameaça ecológica global',
        'Necessidade urgente de soluções sustentáveis',
      ],
      color: 'fill-orange-600',
      textColor: 'text-orange-900',
    },
  ];

  return (
    <div className="p-4 bg-gradient-to-br from-green-50 to-blue-50 min-h-screen">
      <div className="flex flex-col-reverse lg:flex-row gap-6">
        <div className="w-full lg:w-2/3 bg-white rounded-2xl shadow-2xl overflow-hidden">
          <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <rect width="800" height="600" fill="#f0f8ff" />
            
            <g stroke="#94a3b8" strokeDasharray="5,5" strokeWidth="2" fill="none">
              {riskZones.map((zone, index) => 
                riskZones.slice(index + 1).map((otherZone) => (
                  <line 
                    key={`${zone.id}-${otherZone.id}`}
                    x1={zone.position.x} 
                    y1={zone.position.y} 
                    x2={otherZone.position.x} 
                    y2={otherZone.position.y} 
                    opacity="0.3"
                  />
                ))
              )}
            </g>

            {riskZones.map((zone) => (
              <g 
                key={zone.id}
                transform={`translate(${zone.position.x}, ${zone.position.y})`}
                onClick={() => setActiveZone(activeZone === zone.id ? null : zone.id)}
                className="cursor-pointer"
              >
                <circle 
                  r="30" 
                  className={`transition-opacity duration-300 ${zone.color} ${activeZone === zone.id ? 'opacity-100' : 'opacity-70 hover:opacity-90'}`}
                />
                <foreignObject x="-16" y="-16" width="32" height="32">
                  <div className="w-full h-full flex items-center justify-center pointer-events-none">
                    {zone.icon}
                  </div>
                </foreignObject>
              </g>
            ))}
          </svg>
        </div>

        <div className="w-full lg:w-1/3 bg-white rounded-2xl shadow-2xl p-6">
        {activeZone ? (
            (() => {
              const zone = riskZones.find((z) => z.id === activeZone);
              return zone ? (
                <div className="space-y-4">
                  <div className="flex items-center">
                    {React.cloneElement(zone.icon, {
                      className: `w-12 h-12 ${zone.textColor}`,
                    })}
                    <h3
                      className={`ml-4 text-xl font-bold ${zone.textColor}`}
                    >
                      {zone.name}
                    </h3>
                  </div>
                  <p className="text-gray-700">{zone.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-600 mb-2">
                      Principais riscos:
                    </h4>
                    <ul className="space-y-1 pl-5 text-gray-600">
                      {zone.risks.map((risk, index) => (
                        <li key={index} className="flex items-center">
                          <span className="mr-2 text-red-500">•</span>
                          {risk}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : null;
            })()
          ) : (
            <div className="text-center text-gray-500">
              <Info className="mx-auto w-16 h-16" />
              <p>Clique em alguma zona para entender os seus risco para o planeta</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EWasteRiskMap;