import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MainImg from "./MainImg";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Downloader System</title>
      </Head>
      <MainImg />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
