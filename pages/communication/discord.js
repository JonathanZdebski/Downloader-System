import React from "react";
import styles from "../../styles/Content.module.css";
import discordcontent from "../../public/images/discordcontent.png";
import DsData from "../api/ds-data";
import Image from "next/image";

import discord1 from "../../public/images/discord1.png";
import discord2 from "../../public/images/discord2.png";
import discord3 from "../../public/images/discord3.png";
import discord4 from "../../public/images/discord4.png";

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
        <div className={styles.info}>
          <p>Updated 2021-01-24 – Discord (65.6 MB)</p>
        </div>
        <div className={styles.buttons}>
          <button>DOWNLOAD FOR Windows</button>
          <button>DOWNLOAD FOR Ios</button>
          <button>DOWNLOAD FOR Android</button>
          <button>DOWNLOAD FOR Mac</button>
        </div>
        <h4>DESCRIPTION</h4>
        <p className={styles.desc}>{item.text}</p>
        <h4>INSTALLATION PROCESS</h4>
        <div className={styles.frame}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/g2rNF-IK0FQ"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </div>
        <h4>SOFTWARE IMAGES</h4>
        <div className={styles.grid}>
          <div>
            <Image src={discord1} alt="discord1" width={350} height={200} />
          </div>
          <div>
            <Image src={discord2} alt="discord2" width={350} height={200} />
          </div>
          <div>
            <Image src={discord3} alt="discord3" width={350} height={200} />
          </div>
          <div>
            <Image src={discord4} alt="discord4" width={350} height={200} />
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
