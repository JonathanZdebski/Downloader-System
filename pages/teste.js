import React from "react";

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/ds-data");
  const data = await res.json();

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
