import type { NextPage } from "next";
import Image from "next/image";
import FullLogo from "../public/Full logo.png";
import { motion } from "framer-motion";

import BG from "../public/BG-Image.png";

const HeroSection: NextPage = () => {
  return (
    <main className="relative" id="Hero">
      <div className="bg-blue-400 md:block">
        <div className=" absolute inset-0 z-20 flex flex-col items-center justify-center ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center space-y-3 md:mb-20 md:space-y-6"
          >
            <div className="block select-none flex-col">
              <Image
                src={FullLogo}
                width={900}
                height={230}
                objectFit="cover"
                draggable={false}
                alt="Treeverse Logo"
              />
            </div>
            <motion.p
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.35 }}
              className="text-center font-poppins text-sm font-medium text-white md:text-lg"
            >
              Currently in development by Endless Clouds.
            </motion.p>
            <motion.button
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.35 }}
              className="focus:shadow-outline-none rounded-md bg-black bg-opacity-80 py-2 px-4 font-poppins text-base font-normal text-white duration-150 hover:bg-treeGreen hover:text-white focus:outline-none md:py-3 md:px-8 md:text-lg"
            >
              Sign up
            </motion.button>
          </motion.div>
        </div>
        <div className="relative flex h-[calc(100vh-80px)] w-full items-center justify-center">
          <div className="absolute inset-0 z-10 bg-black opacity-40 " />
          <Image
            priority={true}
            src={BG}
            layout="fill"
            objectFit="cover"
            draggable={false}
            alt="Treeverse Background"
          />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
