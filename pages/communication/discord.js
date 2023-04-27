import React from "react";
import styles from "../../styles/Content.module.css";
import discordcontent from "../../public/images/discordcontent.png";
import DsData from "../api/ds-data";
import Image from "next/image";

export async function getStaticProps() {
  const data = await DsData();

  return {
    props: {
      data,
    },
  };
}

export default function teste({ data }) {
  const item = data[0];

  return (
    <div className={styles.containercontent}>
      <div className={styles.card}>
        <h1 className={styles.titulo}>{item.titulo}</h1>
        <Image
          className={styles.image}
          src={discordcontent}
          alt="discordcontent"
        />
        <p className={styles.info}>Updated 2021-01-24 – Discord (65.6 MB)</p>
        <div className={styles.buttons}>
          <button>DOWNLOAD FOR WINDOWS</button>
          <button>DOWNLOAD FOR IOS</button>
          <button>DOWNLOAD FOR Android</button>
          <button>DOWNLOAD FOR MAC</button>
        </div>
        <h4>DESCRIPTION</h4>
        <p>{item.text}</p>
        <h4>INSTALLATION PROCESS</h4>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/g2rNF-IK0FQ"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </div>
        <div></div>
      </div>
    </div>
  );
}
