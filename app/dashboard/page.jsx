"use client"
import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"


export default function DashboardPage() {
    const {data: session, status} = useSession()
    const router = useRouter()
    
    const handleSignOut = () => {
        signOut()
        router.push("/")
    }

    if (status === "loading") {
        return <p>Loading...</p>
    } else if (!session) {
        return <p>Access Denied</p>
    } else {
        return (
            <div>
            <h1>Dashboard</h1>
            <p>{session.user.name}</p>
            <p>{session.user.email}</p>
            <button onClick={() => handleSignOut()}>Sign Out</button>
        </div>
        )
    }
}
