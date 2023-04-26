import React from "react";

import DsData from "./api/ds-data";

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
      <div>
        <h1>{item.titulo}</h1>
        <p>{item.text}</p>
      </div>
    </div>
  );
}
