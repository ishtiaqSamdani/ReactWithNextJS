import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <h1>Next Js uses file based routing like php which is super quick</h1>
      <div className={styles.container}>
        <Link href="/ironman" className={styles.link}>
          iron man
        </Link>
        <Link href="/mark1" className={styles.link}>
          Mark1
        </Link>
        <Link href="/mark2" className={styles.link}>
          Mark2
        </Link>
        <Link href="/blogs/Iron man" className={styles.link}>
          into
        </Link>
      </div>
    </>
  );
}
