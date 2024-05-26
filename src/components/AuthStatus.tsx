// app/components/AuthStatus.tsx
'use client';

import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const AuthStatus = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/login');
        }
    }, [status, router]);

    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    if (status === 'authenticated') {
        return (
            <div className="flex items-center space-x-4">
                <p>{session.user?.name} としてログイン中</p>
                <button
                    onClick={() => signOut({ callbackUrl: '/login' })}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                    ログアウト
                </button>
            </div>
        );
    }

    return <p>ログインしていません</p>;
};

export default AuthStatus;
