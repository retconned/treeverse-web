import type { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";

import CharDesign from "../public/Character-design.webp";
import IslandDesign from "../public/Environment_floating-island-expansion.webp";
import LazerIslandDesign from "../public/Laze island.webp";

const FollowupSection: NextPage = () => {
  return (
    <main
      className="flex w-full flex-col bg-treeGray py-0 sm:flex-col md:h-[91vh] md:flex-row"
      id="FollowUp"
    >
      <div className="space-y-6 p-10 font-poppins md:space-y-10 md:p-32 lg:w-[80vw] ">
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0 }}
          className=" text-3xl font-semibold text-treeGreen md:w-2/3 md:text-7xl"
        >
          What is Treeverse?
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-semibold text-black "
        >
          Treeverse is a top-down open-world classless MMORPG built for mobile
          with social features and an emphasis on cooperative gameplay.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-medium md:text-xl "
        >
          In the Arboros continent, you own the assets you spend time grinding
          for. Start your journey in the city of Elderwall that is protected by
          the World Tree and immerse yourself in this world of mythical
          creatures surrounded by Jovians and Sidhe. Forge unique weapons with
          primal energy and slay bosses to test your skills.
        </motion.p>
      </div>

      <div className="relative flex h-[calc(100vh-25vh)] w-full flex-col justify-between md:hidden md:h-[91vh] md:min-w-[30vw] lg:flex ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute top-[6%] left-[70%] h-fit w-[101px] overflow-hidden rounded-xl border-4  border-white md:left-[44%] md:w-[193px] lg:left-[60%]"
        >
          <Image
            draggable={false}
            src={CharDesign}
            alt="Character design"
            layout="responsive"
            objectFit="fill"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="absolute top-[8%] left-[5%] h-fit w-[183px] overflow-hidden rounded-xl border-4  border-white md:left-[25%] md:top-[35%] md:w-[166px] lg:top-[25%] lg:left-[25%] lg:w-[266px]"
        >
          <Image
            draggable={false}
            // unoptimized={true}
            src={IslandDesign}
            alt="Floating island environment design"
            layout="responsive"
            objectFit="fill"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="absolute top-[50%] left-[5%] h-fit w-[340px] overflow-hidden rounded-xl border-4 border-white md:top-[62%] md:w-[250px] lg:left-[11%] lg:w-[250px] 2xl:left-[40%]"
        >
          <Image
            draggable={false}
            src={LazerIslandDesign}
            alt="island environment design with laser in the middle"
            layout="responsive"
            objectFit="fill"
          />
        </motion.div>
      </div>
    </main>
  );
};

export default FollowupSection;
