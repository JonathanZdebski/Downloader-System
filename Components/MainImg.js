import React from "react";
import Image from "next/image";
import navbarimg from "../public/images/navbarimg.jpg";
import styles from "../styles/MainImg.module.css";

const MainImg = () => {
  return (
    <div className={styles.imgcontainer}>
      <div className={styles.imgwrapper}>
        <Image className={styles.navbarimg} src={navbarimg} alt="navbarimg" />
        <div className={styles.textOverlay}>
          <h1 className="titulo">Downloader System</h1>
          <p>Download Softwares with Installation and Support Procedures!</p>
        </div>
      </div>
    </div>
  );
};

export default MainImg;
