import { Card, CardContent } from "@/components/ui/card"
import { Trash} from "lucide-react"
import Link from "next/link";

const Header = () => {
    return (
        <Card>
            <CardContent className="p-5 justify-between flex flex-row  items-center">
            <div className="flex items-center gap-3">
                <Link href="/">
                    <Trash size={24} className="fill-green-500" />
                </Link>

                <h1 className="font-bold text-xl font-mono text-green-700">
                    Lixo Eletrônico
                </h1>
            </div>
            </CardContent>
        </Card>
    )
}

export default Header;
