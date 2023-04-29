import React from "react";
import styles from "../../styles/Content.module.css";
import zoomcontent from "../../public/images/zoomlogo.png";
import DsData from "../api/ds-data";
import Link from "next/link";
import Image from "next/image";

import zoom1 from "../../public/images/zoom1.png";
import zoom2 from "../../public/images/zoom2.png";
import zoom3 from "../../public/images/zoom3.png";
import zoom4 from "../../public/images/zoom4.png";

export async function getStaticProps() {
  const data = await DsData();

  return {
    props: {
      data,
    },
  };
}

export default function teste({ data }) {
  const item = data[1];

  return (
    <div className={styles.containercontent}>
      <div className={styles.card}>
        <h1 className={styles.titulo}>{item.titulo}</h1>
        <Image
          className={styles.image}
          width={600}
          src={zoomcontent}
          alt="zoomcontent"
        />
        <div className={styles.info}>
          <p>Updated 2021-01-24 – ZOOM Video Updated (14 MB)</p>
        </div>
        <div className={styles.buttons}>
          <Link href="https://zoom.us/download" target="blank_">
            <button>DOWNLOAD FOR Windows</button>
          </Link>
          <Link
            href="https://apps.apple.com/br/app/zoom-one-platform-to-connect/id546505307"
            target="blank_"
          >
            <button>DOWNLOAD FOR IOS</button>
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=us.zoom.videomeetings&hl=en"
            target="blank_"
          >
            <button>DOWNLOAD FOR Android</button>
          </Link>
          <Link
            href="https://support.zoom.us/hc/en-us/articles/203020795-Installing-the-Zoom-application-on-macOS"
            target="blank_"
          >
            <button>DOWNLOAD FOR Mac</button>
          </Link>
        </div>
        <h4>DESCRIPTION</h4>
        <p className={styles.desc}>{item.text}</p>
        <h4>INSTALLATION PROCESS</h4>
        <div className={styles.frame}>
          <iframe
            width="660"
            height="415"
            src="https://www.youtube.com/embed/cLT5vKNQW7Q"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
        <h4>SOFTWARE IMAGES</h4>
        <div className={styles.grid}>
          <div>
            <Image src={zoom1} alt="zoom1" width={350} height={200} />
          </div>
          <div>
            <Image src={zoom2} alt="zoom2" width={350} height={200} />
          </div>
          <div>
            <Image src={zoom3} alt="zoom3" width={350} height={200} />
          </div>
          <div>
            <Image src={zoom4} alt="zoom4" width={350} height={200} />
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
