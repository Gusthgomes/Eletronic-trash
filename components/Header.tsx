import { Card, CardContent } from "@/components/ui/card"
import { Trash, TriangleAlert, ThumbsUp, Dices} from "lucide-react"
import Link from "next/link";

const Header = () => {
    return (
        <Card>
            <CardContent className="p-5 justify-between flex flex-row  items-center">
            <div className="flex items-center gap-3">
                <Link href="/">
                    <Trash size={24} className="text-green-500" />
                </Link>

                <h1 className="font-bold text-xl font-mono text-green-700">
                    E-lixo
                </h1>
            </div>

            <div className="flex items-center justify-between gap-2 space-x-4">
                <Link href="/risks" className="flex items-center gap-1 text-green-600">
                    Riscos
                    <TriangleAlert size={24} className="text-green-500" />
                </Link>

                <Link href="/recycling" className="flex items-center gap-1 text-green-600">
                    Boas práticas
                    <ThumbsUp size={24} className="text-green-500" />
                </Link>

                <Link href="/quiz" className="flex items-center gap-1 text-green-600">
                    Quiz
                    <Dices size={24} className="text-green-500" />
                </Link>
            </div>
            </CardContent>
        </Card>
    )
}

export default Header;
