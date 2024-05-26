import { auth } from '@/auth';
import LogoutButton from '@/components/LogoutButton';

export default async function page() {
    const session = await auth();

    const { user } = session!;

    return (
        <main className="flex flex-col items-center justify-center min-h-screen py-2 gap-10">
            {user?.name}
            <LogoutButton />
        </main>
    )
}
