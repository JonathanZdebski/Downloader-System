import React from "react";
import styles from "../../styles/Content.module.css";
import discordcontent from "../../public/images/discordcontent.png";
import DsData from "../api/ds-data";
import Link from "next/link";
import Head from "next/head";
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
      <Head>
        <title key="title">Discord Updated Download - Downloader System</title>
      </Head>
      <div className={styles.card}>
        <h1 className={styles.titulo}>{item.titulo}</h1>
        <Image
          className={styles.image}
          src={discordcontent}
          alt="discordcontent"
        />
        <div className={styles.info}>
          <p>Updated 2023-04-29 – Discord (65.6 MB)</p>
        </div>
        <div className={styles.buttons}>
          <Link href="https://discord.com/download" target="blank_">
            <button>DOWNLOAD FOR Windows</button>
          </Link>
          <Link
            href="https://apps.apple.com/us/app/discord-chat-for-games/id985746746?attemptId=32239542-2496-4a67-856a-0a1d01c5c218&fingerprint=1101637386187853854.BzUxE_DwDMvUSNM3IfkPLJHTHyk"
            target="blank_"
          >
            <button className={`${styles.button} ${styles.black}`}>
              DOWNLOAD FOR IOS
            </button>
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=com.discord&fingerprint=1101637386187853854.BzUxE_DwDMvUSNM3IfkPLJHTHyk&attemptId=d8154138-cd8c-4b79-b5d7-0d1e22ffa289"
            target="blank_"
          >
            <button className={`${styles.button} ${styles.green}`}>
              DOWNLOAD FOR Android
            </button>
          </Link>
          <Link
            href="https://discord.com/api/download?platform=osx"
            target="blank_"
          >
            <button className={`${styles.button} ${styles.black}`}>
              DOWNLOAD FOR Mac
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
