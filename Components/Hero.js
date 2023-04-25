import React from "react";
import styles from "../styles/Hero.module.css";
import Image from "next/image";
import HeroData from "../Components/HeroData";

const Hero = () => {
  return (
    <div className={styles.projectcontainer}>
      {HeroData.map((item) => (
        <div className={styles.projectcard} key={item.id}>
          <h2 className="h2">{item.title}</h2>
          <Image src={item.imgsrc} alt={item.title} />
          <p>{item.text}</p>
          <button>{item.view}</button>
        </div>
      ))}
    </div>
  );
};

export default Hero;
