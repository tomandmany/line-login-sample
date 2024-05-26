'use client'
import { signIn } from "next-auth/react"

export default function LoginButton() {
    return (
        <button
            onClick={() => signIn("line")}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
            {/* <button onClick={() => signIn("line", { redirectTo: "/votes" })}> */}
            LINEでログイン
        </button>
    )
}