import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";

const Footer: NextPage = React.memo(() => {
  return (
    <footer className={styles.footer}>
      <a href="" target="_blank" rel="noopener noreferrer">
        Powered by{" "}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  );
});

export default Footer;
