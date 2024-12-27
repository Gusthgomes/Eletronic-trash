import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const About = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 mx-auto px-4 py-8 h-screen">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Sobre essa aplicação</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <Avatar className="w-32 h-32">
              <AvatarImage src="/Me.png" alt="Me" />
              <AvatarFallback>AL</AvatarFallback>
            </Avatar>
            <h2 className="text-xl font-semibold">Gustavo Gomes</h2>
            <a href="https://github.com/Gusthgomes" className="text-blue-600 hover:underline">
                gusthgomesdarosa@gmail.com
            </a>
          </div>
          <div className="text-center">
            <p className="text-gray-600">
                Olá, me chamo Gustavo Gomes, sou o desenvolvedor dessa aplicação. O aplicativo E-Waste é dedicado a promover a consientização e descarte responsável de resíduos eletrônicos. 
              Fornecemos diversos meios para sanar dúvidas sobre o descarte correto de eletrônicos, 
              educar os usuários sobre a importância da reciclagem adequada de eletrônicos e 
              rastreando seu impacto ambiental positivo. Junte-se a nós em nossa missão de reduzir 
              lixo eletrônico e proteger nosso planeta para as gerações futuras..
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default About;

