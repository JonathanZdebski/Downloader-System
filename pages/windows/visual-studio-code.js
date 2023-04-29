import React from "react";
import styles from "../../styles/Content.module.css";
import visualstudiologo from "../../public/images/visualstudiologo.png";
import DsData from "../api/ds-data";
import Link from "next/link";
import Image from "next/image";

import vscode1 from "../../public/images/visualstudio1.png";
import vscode2 from "../../public/images/visualstudio2.png";
import vscode3 from "../../public/images/visualstudio3.png";
import vscode4 from "../../public/images/visualstudio4.png";

export async function getStaticProps() {
  const data = await DsData();

  return {
    props: {
      data,
    },
  };
}

export default function teste({ data }) {
  const item = data[4];

  return (
    <div className={styles.containercontent}>
      <div className={styles.card}>
        <h1 className={styles.titulo}>{item.titulo}</h1>
        <Image
          className={styles.image}
          width={600}
          src={visualstudiologo}
          alt="visualstudiologo"
        />
        <div className={styles.info}>
          <p>Updated 2021-01-25 – VS Code (65.5 MB)</p>
        </div>
        <div className={styles.buttons}>
          <Link
            href="https://code.visualstudio.com/docs/?dv=win64user"
            target="blank_"
          >
            <button>DOWNLOAD FOR WINDOWS</button>
          </Link>
          <Link
            href="https://code.visualstudio.com/docs/?dv=osx"
            target="blank_"
          >
            <button>DOWNLOAD FOR MAC</button>
          </Link>
          <Link
            href="https://code.visualstudio.com/docs/?dv=linux64_deb"
            target="blank_"
          >
            <button>DOWNLOAD LINUX</button>
          </Link>
        </div>
        <h4>DESCRIPTION</h4>
        <p className={styles.desc}>{item.text}</p>
        <h4>INSTALLATION PROCESS</h4>
        <div className={styles.frame}>
          <iframe
            width="660"
            height="415"
            src="https://www.youtube.com/embed/JPZsB_6yHVo"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>

        <h4>SOFTWARE IMAGES</h4>
        <div className={styles.grid}>
          <div>
            <Image src={vscode1} alt="vscode1" width={350} height={200} />
          </div>
          <div>
            <Image src={vscode2} alt="vscode2" width={350} height={200} />
          </div>
          <div>
            <Image src={vscode3} alt="vscode3" width={350} height={200} />
          </div>
          <div>
            <Image src={vscode4} alt="vscode4" width={350} height={200} />
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
