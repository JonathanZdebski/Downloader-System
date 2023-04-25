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
  return (
    <div>
      <h1>{data.titulo}</h1>
      <p>{data.text}</p>
    </div>
  );
}
