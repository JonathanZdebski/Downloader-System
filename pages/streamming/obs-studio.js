import React from "react";
import styles from "../../styles/Content.module.css";
import obslogo from "../../public/images/obslogo.png";
import DsData from "../api/ds-data";
import Link from "next/link";
import Image from "next/image";

import obs1 from "../../public/images/obsstudio1.png";
import obs2 from "../../public/images/obsstudio2.png";
import obs3 from "../../public/images/obsstudio3.png";
import obs4 from "../../public/images/obsstudio4.png";

export async function getStaticProps() {
  const data = await DsData();

  return {
    props: {
      data,
    },
  };
}

export default function teste({ data }) {
  const item = data[2];

  return (
    <div className={styles.containercontent}>
      <div className={styles.card}>
        <h1 className={styles.titulo}>{item.titulo}</h1>
        <Image
          className={styles.image}
          width={400}
          src={obslogo}
          alt="zoomcontent"
        />
        <div className={styles.info}>
          <p>Updated 2023-04-29 – Open Broadcaster Software (140 MB)</p>
        </div>
        <div className={styles.buttons}>
          <Link href="https://obsproject.com/download" target="blank_">
            <button className={`${styles.button} ${styles.blue}`}>
              DOWNLOAD Updated
            </button>
          </Link>
          <Link
            href="https://www.videohelp.com/software?d=OBS-Studio-27.0-Full-Installer-x64.exe"
            target="blank_"
          >
            <button>DOWNLOAD FOR WIN 27.0 x64</button>
          </Link>
          <Link
            href="https://www.videohelp.com/software?d=OBS-Studio-27.0-Full-Installer-x86.exe"
            target="blank_"
          >
            <button>DOWNLOAD FOR WIN 27.0 x86</button>
          </Link>
        </div>
        <h4>DESCRIPTION</h4>
        <p className={styles.desc}>{item.text}</p>
        <h4>INSTALLATION PROCESS</h4>
        <div className={styles.frame}>
          <iframe
            width="660"
            height="415"
            src="https://www.youtube.com/embed/yQ-sKUr-f9E"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
        <h4>OBS STREAMING SETTINGS 2023</h4>
        <div className={styles.frame}>
          <iframe
            width="660"
            height="415"
            src="https://www.youtube.com/embed/34rRItJ2ltE"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
        <h4>SOFTWARE IMAGES</h4>
        <div className={styles.grid}>
          <div>
            <Image src={obs1} alt="obs1" width={350} height={200} />
          </div>
          <div>
            <Image src={obs2} alt="obs2" width={350} height={200} />
          </div>
          <div>
            <Image src={obs3} alt="obs3" width={350} height={200} />
          </div>
          <div>
            <Image src={obs4} alt="obs4" width={350} height={200} />
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
