import React from "react";
import styles from "../styles/Hero.module.css";
import Image from "next/image";
import HeroData from "../Components/HeroData";
import Link from "next/link";

const Hero = () => {
  return (
    <div className={styles.projectcontainer}>
      {HeroData.map((item) => (
        <div className={styles.projectcard} key={item.id}>
          <Link href={item.view}>
            <h2 className="h2">{item.title}</h2>
            <Image src={item.imgsrc} alt={item.title} />
          </Link>
          <p>{item.text}</p>
          <div className={styles.buttoncontainer}>
            <Link href={item.view} className={styles.button}>
              READ MORE
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
