import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Laptop, Printer, Battery, Factory, ShoppingCart, Trash2, Recycle, AlertTriangle } from 'lucide-react'

export default function EWasteInfo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Lixo Eletrônico (E-waste)
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entenda o que é o lixo eletrônico e como seu ciclo de vida impacta o meio ambiente
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">O que é Lixo Eletrônico?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <AlertTriangle className="text-yellow-500" />
                Definição
              </h3>
              <p className="text-gray-600">
                Lixo eletrônico, ou e-waste, consiste em equipamentos eletroeletrônicos descartados 
                ou obsoletos. Isso inclui computadores, smartphones, tablets, impressoras, 
                eletrodomésticos e outros dispositivos eletrônicos.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Exemplos Comuns</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Smartphone className="text-gray-600" />
                  <span>Celulares</span>
                </div>
                <div className="flex items-center gap-2">
                  <Laptop className="text-gray-600" />
                  <span>Computadores</span>
                </div>
                <div className="flex items-center gap-2">
                  <Printer className="text-gray-600" />
                  <span>Impressoras</span>
                </div>
                <div className="flex items-center gap-2">
                  <Battery className="text-gray-600" />
                  <span>Baterias</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Ciclo de Vida do Lixo Eletrônico</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Factory className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Produção</h3>
              <p className="text-gray-600">
                Fabricação de dispositivos eletrônicos usando matérias-primas e componentes.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <ShoppingCart className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Consumo</h3>
              <p className="text-gray-600">
                Período de uso do dispositivo pelo consumidor até se tornar obsoleto ou parar de funcionar.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Trash2 className="text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Descarte</h3>
              <p className="text-gray-600">
                Momento em que o dispositivo é descartado, devendo ser feito em pontos de coleta específicos.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Recycle className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">4. Reciclagem</h3>
              <p className="text-gray-600">
                Processo de desmontagem, separação de componentes e recuperação de materiais para reuso.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Impacto Ambiental</h2>
        <Card>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Problemas</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Contaminação do solo e água por metais pesados</li>
                  <li>Liberação de gases tóxicos quando queimados</li>
                  <li>Desperdício de recursos naturais</li>
                  <li>Acúmulo em aterros sanitários</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Soluções</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Descarte correto em pontos de coleta</li>
                  <li>Aumento da vida útil dos dispositivos</li>
                  <li>Reciclagem e reaproveitamento de componentes</li>
                  <li>Consumo consciente de eletrônicos</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

