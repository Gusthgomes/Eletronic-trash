import { EWasteQuiz } from '@/components/EWasteQuiz'

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Quiz sobre Lixo Eletrônico
        </h1>
        <EWasteQuiz />
      </div>
    </div>
  )
}

