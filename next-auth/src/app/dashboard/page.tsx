
import { Button } from "@/components/ui/button"
import { getServerAuthSession } from "@/backend/authentication/auth"

export default async function Dashboard() {
    const session = await getServerAuthSession();
    const user = session?.user;
    return (
        <>
            <header className="container mx-auto flex justify-end p-4">
                <Button>Click Me</Button>
            </header>
            <main className="container mx-auto">
                <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
                {user && (
                    <p>
                        Bem vindo {"{"}
                        {user.name}
                        {"}"}
                    </p>
                )}
            </main>
        </>
    )
}