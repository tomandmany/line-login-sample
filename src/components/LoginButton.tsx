// app/components/LoginButton.tsx
'use client';

import { signIn } from 'next-auth/react';

const LoginButton = () => {
    return (
        <button
            onClick={() => signIn('line')}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
            LINEでログイン
        </button>
    );
};

export default LoginButton;
