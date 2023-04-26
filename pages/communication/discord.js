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
        <p>{item.text}</p>
      </div>
    </div>
  );
}
