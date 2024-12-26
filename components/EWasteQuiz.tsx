'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle2 } from 'lucide-react'

const quizQuestions = [
  {
    question: "O que é considerado lixo eletrônico?",
    options: [
      "Apenas computadores antigos",
      "Somente smartphones quebrados",
      "Qualquer dispositivo eletrônico descartado ou obsoleto",
      "Papéis e plásticos usados em escritórios"
    ],
    correctAnswer: 2
  },
  {
    question: "Qual é o principal problema ambiental causado pelo lixo eletrônico?",
    options: [
      "Aumento da temperatura global",
      "Contaminação do solo e água por metais pesados",
      "Destruição da camada de ozônio",
      "Aumento do nível do mar"
    ],
    correctAnswer: 1
  },
  {
    question: "Qual é a melhor maneira de descartar um celular antigo?",
    options: [
      "Jogar no lixo comum",
      "Queimar para evitar que alguém acesse seus dados",
      "Guardar em casa indefinidamente",
      "Levar a um ponto de coleta de lixo eletrônico"
    ],
    correctAnswer: 3
  },
  {
    question: "O que é a 'obsolescência programada'?",
    options: [
      "Um programa de reciclagem de eletrônicos",
      "Uma técnica para prolongar a vida útil dos dispositivos",
      "A prática de projetar produtos com vida útil limitada",
      "Um método de atualização de software"
    ],
    correctAnswer: 2
  },
  {
    question: "Qual destes NÃO é um componente comumente reciclado de lixo eletrônico?",
    options: [
      "Ouro",
      "Plástico",
      "Cobre",
      "Madeira"
    ],
    correctAnswer: 3
  }
]

export function EWasteQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleNextQuestion = () => {
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
  }

  const renderQuestion = () => {
    const question = quizQuestions[currentQuestion]
    return (
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-xl font-semibold mb-4">{question.question}</h2>
          <RadioGroup value={selectedAnswer?.toString()} onValueChange={(value) => handleAnswer(parseInt(value))}>
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
          {selectedAnswer !== null && (
            <div className="mt-4">
              {selectedAnswer === question.correctAnswer ? (
                <div className="flex items-center text-green-600">
                  <CheckCircle2 className="mr-2" />
                  Correto!
                </div>
              ) : (
                <div className="flex items-center text-red-600">
                  <AlertCircle className="mr-2" />
                  Incorreto. A resposta certa é: {question.options[question.correctAnswer]}
                </div>
              )}
            </div>
          )}
          <Button 
            onClick={handleNextQuestion} 
            className="mt-4" 
            disabled={selectedAnswer === null}
          >
            {currentQuestion < quizQuestions.length - 1 ? "Próxima Pergunta" : "Ver Resultado"}
          </Button>
        </CardContent>
      </Card>
    )
  }

  const renderResult = () => {
    return (
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-xl font-semibold mb-4">Resultado do Quiz</h2>
          <p className="text-lg mb-4">
            Você acertou {score} de {quizQuestions.length} perguntas!
          </p>
          <Button onClick={resetQuiz}>Tentar Novamente</Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div>
      {showResult ? renderResult() : renderQuestion()}
    </div>
  )
}

