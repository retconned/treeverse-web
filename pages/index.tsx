import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Nav";
import HeroSection from "../components/HeroSection";
import FollowupSection from "../components/FollowupSection";
import GameplaySection from "../components/GameplaySection";
import CollectionsSection from "../components/CollectionsSection";
import DevUpdatesSection from "../components/DevUpdatesSection";
import TeamSection from "../components/TeamSection";

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
        <FollowupSection />
        <GameplaySection />
        <CollectionsSection />
        <DevUpdatesSection />
        <TeamSection />
      </main>
    </div>
  );
};

export default Home;
