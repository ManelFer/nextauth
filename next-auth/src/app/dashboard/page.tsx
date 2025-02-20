import { Button } from "@/components/ui/button"

export default function Dashboard() {
    return (
        <>
            <header className="container mx-auto flex justify-end p-4">
                <Button>Click Me</Button>
            </header>
            <main className="container mx-auto">
                <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
                <p>
                    Bem vindo {"{"}user.name{"}"}
                </p>
            </main>
        </>
    )
}