import Link from "next/link";
import styles from "./page.module.css";
import LoginForm from "@/components/auth/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default function Home() {
  return (
    <main className={styles.main}>
      <p>Home</p>
      <LoginForm />
      <Link href="/ingresos">Ir al about</Link>
    </main>
  );
}
