import { auth } from '@/auth';

export default async function page() {
    const session = await auth();    
    const { user } = session!;

    return (
        <main className="flex flex-col items-center justify-center min-h-screen py-2">
            {user?.name}
        </main>
    )
}
