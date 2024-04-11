import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>NextAuth.js</h1>
      <br/>
      <Link href="/register">Register Page</Link>
      <br/>
      <Link href="/login">Login Page</Link>
    </main>  
  );
}
