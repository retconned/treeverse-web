import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { VideoHTMLAttributes } from "react";

// gameplay component
import LazerIslandDesign from "../public/Laze island.webp";

const GameplayImageComp = ({
  title,
  description,
  flipped,
}: {
  title: string;
  description: string;
  flipped?: boolean;
}) => {
  return (
    <div
      className={`flex h-fit w-full ${
        flipped ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"
      } items-center justify-around  py-14 px-28 text-treeGray`}
    >
      <div className="w-[20rem] overflow-hidden rounded-lg border-4 border-white bg-blue-300 md:w-[30rem] ">
        <Image
          draggable={false}
          unoptimized={true}
          src={LazerIslandDesign}
          alt="Floating island environment design"
          layout="responsive"
          objectFit="fill"
        />
      </div>
      <div className="flex h-full w-[20rem] flex-col justify-center space-y-4 px-4 text-center md:w-[30rem] md:justify-center  md:text-left lg:w-[50rem] ">
        <p className="text-4xl font-semibold md:text-5xl">{title}</p>
        <p className="font-barlow text-lg md:text-xl">{description}</p>
      </div>
    </div>
  );
};

const GameplaySection: NextPage = () => {
  return (
    <main className="h-fill flex w-full flex-col bg-treeDarkGreen">
      <p className="pt-12 pb-0 text-center font-poppins text-5xl font-semibold text-treeGray md:pt-16 md:pb-10 md:text-7xl">
        Gameplay
      </p>
      <GameplayImageComp
        title="Quests and Exploration"
        description="Quests will be offered to you by NPCs that each have their own stories, or designed encounters when you get to certain places or meet specific conditions, which will slowly help you uncover the world of Treeverse.If you're more of a courageous adventurer, you can also traverse the mysterious lands on your own and discover side quests at your own pace."
      />
      <GameplayImageComp
        flipped={true}
        title="Building and Forging"
        description="Create your dream house on your personal plot of land and open it up to all adventurers, or keep it private and invite your friends or guild members to come visit and hang out. Or rather, gather rare resources, forge unique weapons, and trade them with other adventurers. Will you be a landlord or a master of forgery? Both are extremely desirable in Arboros.        "
      />
      <GameplayImageComp
        flipped={false}
        title="Cooperate and Fight"
        description="If the thrill and excitement of combat is what you’re after, then you’ll find many places where you can battle mighty monsters on your own, or group up with your teammates against the more powerful foes."
      />
    </main>
  );
};

export default GameplaySection;
