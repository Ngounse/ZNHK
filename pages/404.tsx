import type { NextPage } from "next";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Footer } from "pages/footer";

const Home: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>404</title>
        <meta name="404" content="404" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="">404 Project</a>
        </h1>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
