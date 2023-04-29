import React from "react";
import styles from "../../styles/Content.module.css";
import bravelogo from "../../public/images/bravelogo.png";
import DsData from "../api/ds-data";
import Link from "next/link";
import Image from "next/image";

import brave1 from "../../public/images/brave1.png";
import brave2 from "../../public/images/brave2.png";
import brave3 from "../../public/images/brave3.png";
import brave4 from "../../public/images/brave4.png";

export async function getStaticProps() {
  const data = await DsData();

  return {
    props: {
      data,
    },
  };
}

export default function teste({ data }) {
  const item = data[3];

  return (
    <div className={styles.containercontent}>
      <div className={styles.card}>
        <h1 className={styles.titulo}>{item.titulo}</h1>
        <Image
          className={styles.image}
          width={380}
          src={bravelogo}
          alt="bravelogo"
        />
        <div className={styles.info}>
          <p>Updated 2023-04-29 – Brave Browser (71.0 MB)</p>
        </div>
        <div className={styles.buttons}>
          <Link href="https://brave.com/pt-br/download/" target="blank_">
            <button className={`${styles.button} ${styles.orange}`}>
              DOWNLOAD FOR WINDOWS x64
            </button>
          </Link>
          <Link
            href="https://laptop-updates.brave.com/latest/winia32"
            target="blank_"
          >
            <button className={`${styles.button} ${styles.orange}`}>
              DOWNLOAD FOR WINDOWS x86
            </button>
          </Link>
          <Link
            href="https://laptop-updates.brave.com/latest/osx"
            target="blank_"
          >
            <button className={`${styles.button} ${styles.black}`}>
              DOWNLOAD MacOS
            </button>
          </Link>
        </div>
        <h4>DESCRIPTION</h4>
        <p className={styles.desc}>{item.text}</p>
        <h4>INSTALLATION PROCESS</h4>
        <div className={styles.frame}>
          <iframe
            width="660"
            height="415"
            src="https://www.youtube.com/embed/U9pphC4gDXc"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>

        <h4>SOFTWARE IMAGES</h4>
        <div className={styles.grid}>
          <div>
            <Image src={brave1} alt="brave1" width={350} height={200} />
          </div>
          <div>
            <Image src={brave2} alt="brave2" width={350} height={200} />
          </div>
          <div>
            <Image src={brave3} alt="brave3" width={350} height={200} />
          </div>
          <div>
            <Image src={brave4} alt="brave4" width={350} height={200} />
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
