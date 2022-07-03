import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

// nav button component

import CharDesign from "../public/Character-design.webp";
import IslandDesign from "../public/Environment_floating-island-expansion.webp";
import LazerIslandDesign from "../public/Laze island.webp";

const FollowupSection: NextPage = () => {
  return (
    <main className="flex h-fit w-full flex-col bg-treeGray py-14 md:flex-row">
      <div className="space-y-6 p-10 font-poppins md:w-[50vw] md:space-y-10 md:p-32">
        <p className="text-3xl font-semibold text-treeGreen md:w-2/3 md:text-7xl">
          What is Treeverse?
        </p>
        <p className="font-semibold text-black ">
          Treeverse is a top-down open-world classless MMORPG built for mobile
          with social features and an emphasis on cooperative gameplay.
        </p>
        <p className="font-medium md:text-xl ">
          In the Arboros continent, you own the assets you spend time grinding
          for. Start your journey in the city of Elderwall that is protected by
          the World Tree and immerse yourself in this world of mythical
          creatures surrounded by Jovians and Sidhe. Forge unique weapons with
          primal energy and slay bosses to test your skills.
        </p>
      </div>
      <div className="relative flex h-[100vh] w-screen flex-col items-center justify-center bg-treeGray  px-0 py-0 md:h-screen md:w-[50vw] md:flex-row md:px-8 md:py-0">
        <div className="absolute right-5 bg-blue-500 md:right-auto md:top-0">
          <div className="absolute top-[-290px] right-[170px] h-[calc(353px/1.5)] w-[calc(202px/1.5)] overflow-hidden rounded-2xl border-4 border-blue-400 md:top-[60px] md:right-[100px] md:h-[353px] md:w-[202px]">
            <Image
              src={CharDesign}
              layout="fill"
              objectFit="cover"
              draggable={false}
              alt="Character design"
            />
          </div>
          <div className="absolute top-[-25px] right-[-5px] h-[calc(501px/1.5)] w-[calc(348px/1.5)] overflow-hidden rounded-2xl border-4 border-blue-400 md:top-[150px] md:right-[-350px]  md:h-[501px] md:w-[348px]">
            <Image
              src={IslandDesign}
              layout="fill"
              objectFit="cover"
              draggable={false}
              alt="Floating island design"
            />
          </div>
          <div className="absolute top-[280px] right-[20px] h-[calc(280px/1.5)] w-[calc(480px/1.5)] overflow-hidden rounded-2xl border-4 border-blue-400 md:top-[580px] md:right-[-40px] md:h-[280px] md:w-[480px]">
            <Image
              src={LazerIslandDesign}
              layout="fill"
              objectFit="cover"
              draggable={false}
              alt="Enviorment design with laser in the middle"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default FollowupSection;
