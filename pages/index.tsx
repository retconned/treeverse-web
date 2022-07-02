import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Nav";
import HeroSection from "../components/HeroSection";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Treeverse | MMORPG</title>
        <meta
          name="description"
          content="Treeverse is a top-down open-world classless MMORPG built for mobile with social features and an emphasis on cooperative gameplay."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <HeroSection />
      </main>
    </div>
  );
};

export default Home;
