import React from "react";
import styles from "../../styles/Content.module.css";
import netbeanslogo from "../../public/images/netbeanslogo.png";
import DsData from "../api/ds-data";
import Link from "next/link";
import Image from "next/image";

import netbeans1 from "../../public/images/netbeans1.png";
import netbeans2 from "../../public/images/netbeans2.png";
import netbeans3 from "../../public/images/netbeans3.png";
import netbeans4 from "../../public/images/netbeans4.png";

export async function getStaticProps() {
  const data = await DsData();

  return {
    props: {
      data,
    },
  };
}

export default function teste({ data }) {
  const item = data[5];

  return (
    <div className={styles.containercontent}>
      <div className={styles.card}>
        <h1 className={styles.titulo}>{item.titulo}</h1>
        <Image
          className={styles.image}
          width={600}
          src={netbeanslogo}
          alt="visualstudiologo"
        />
        <div className={styles.info}>
          <p>
            Updated 2021-03-14 – NetBeans IDE 8.2 (221 MB) – Java JDK (215.35
            MB)
          </p>
        </div>
        <div className={styles.buttons}>
          <Link
            href="https://mega.nz/file/9aJhTYxa#vgitzVc5oiBZrUZTifDfE701KGUVkYNHQdnBLeG3BDg"
            target="blank_"
          >
            <button>DOWNLOAD v8.2</button>
          </Link>
          <Link
            href="https://www.oracle.com/br/java/technologies/javase/javase8u211-later-archive-downloads.html"
            target="blank_"
          >
            <button>JDK 8u221 x86, x64</button>
          </Link>
          <Link
            href="https://downloadersystem.wordpress.com/windows/programming/apache-netbeans-12-0-download/"
            target="blank_"
          >
            <button>UPDATE TO NETBEANS 12.0</button>
          </Link>
        </div>
        <h4>DESCRIPTION</h4>
        <p className={styles.desc}>{item.text}</p>
        <h4>INSTALLATION PROCESS</h4>
        <div className={styles.frame}>
          <iframe
            width="660"
            height="415"
            src="https://www.youtube.com/embed/9m1qqI-mC1A"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>

        <h4>SOFTWARE IMAGES</h4>
        <div className={styles.grid}>
          <div>
            <Image src={netbeans1} alt="netbeans1" width={350} height={200} />
          </div>
          <div>
            <Image src={netbeans2} alt="netbeans2" width={350} height={200} />
          </div>
          <div>
            <Image src={netbeans3} alt="netbeans3" width={350} height={200} />
          </div>
          <div>
            <Image src={netbeans4} alt="netbeans4" width={350} height={200} />
          </div>
        </div>

        <h4>HISTORY</h4>
        <div className={styles.history}>
          <p>{item.history}</p>
        </div>
      </div>
    </div>
  );
}
