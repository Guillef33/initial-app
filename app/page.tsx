import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
        <p>Home</p>
        <Link href="/about">
      Ir al about
    </Link>
     </main>
  );
}
