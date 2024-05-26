import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function page() {
    const session = await auth();
    if (!session?.user) {
        redirect("/login");
    }
    const { user } = session!;

    return (
        <main className="flex flex-col items-center justify-center min-h-screen py-2">
            {user?.name}
        </main>
    )
}
