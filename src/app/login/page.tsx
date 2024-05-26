// app/login/page.tsx
import LoginButton from '@/components/LoginButton';
import { auth } from '@/auth';
import { redirect } from "next/navigation";

const LoginPage = async () => {
    const session = await auth();
    if (session?.user) {
        redirect("/votes");
    }

    console.log('ログインページにアクセスしました！');
    return (
        <main className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl mb-4">ログイン</h1>
            <LoginButton />
        </main>
    );
};

export default LoginPage;
