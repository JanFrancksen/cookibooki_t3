import type { NextPage } from "next";
import Head from "next/head";
import Loader from "../components/common/Loader";
import Carousel from "../components/home/Carousel";
import Hero from "../components/home/Hero";
import Inspiration from "../components/home/Inspiration";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CookiBooki</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Carousel />
        <Inspiration />
      </main>
    </>
  );
};

export default Home;
