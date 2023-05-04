import React from "react";
import styles from "../styles/Footer.module.css";
import { FaFacebook, FaYoutube } from "react-icons/Fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footercontainer}>
      <div className={styles.footer}>
        <div className={styles.left}>
          <h3>Quem somos</h3>
          <p>
            O projeto foi criado inicialmente para facilitar o download dos
            softwares mais utilizados na internet, contendo tutoriais de
            instalação, download e descrição do software sem propagandas, com o
            objetivo de facilitar a vida do usuário.
          </p>
          <Link
            href="https://portfolio-jonathanzdebski.vercel.app/projeto-downloader-system-nextjs"
            target="_blank"
          >
            <p className={styles.info}>+Informações</p>
          </Link>
        </div>
        <div className={styles.right}>
          <h3>Redes sociais</h3>
          <Link
            href="https://www.facebook.com/DownloaderSystem/"
            target="_blank"
          >
            <li>
              <FaFacebook />
            </li>
          </Link>
          <Link
            href="https://www.youtube.com/@downloadersystem2523"
            target="_blank"
          >
            <li>
              <FaYoutube />
            </li>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
