import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import IdeocoLogo from "../public/ideocologo.webp";
import AnimeocaLogo from "../public/animocalogo.webp";
import SkyvisionLogo from "../public/skyvisionlogo.webp";

// collection component
const Backer = ({
  src,
  link,
  alt,
}: {
  src: any;
  link: string;
  alt: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0 }}
      className="mr-4 mt-4 flex h-fit w-[22rem] flex-col rounded-xl bg-treeDarkGray py-3 "
    >
      <div className="flex h-1/2 items-center justify-center">
        <div className="w-[15rem] cursor-pointer select-none  overflow-hidden rounded-lg border-4 border-white duration-150 hover:border-treeGreen ">
          <a href={link} target={"_blank"} rel={"noreferrer"}>
            <Image
              // priority={true}
              draggable={false}
              // unoptimized={true}
              src={src}
              alt={alt}
              layout="responsive"
              objectFit="fill"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
const BackersSection: NextPage = () => {
  return (
    <main className="flex h-fit flex-col items-center justify-center bg-treeGray py-14 ">
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0 }}
        className="w-full py-0 pb-11 text-center font-poppins text-5xl font-semibold text-treeGreen md:py-0 md:pt-2 md:pb-10 md:text-7xl"
      >
        Backers
      </motion.p>
      <div className="w-10/12 md:pl-4 lg:bg-treeGray lg:pl-0">
        <div className="flex w-full flex-row flex-wrap items-center justify-center md:w-[80vw] md:justify-around lg:justify-around xl:justify-around">
          <Backer
            link="https://www.ideocolab.com/"
            src={IdeocoLogo}
            alt={"IDEO's logo"}
          />
          <Backer
            link="https://www.animocabrands.com/"
            src={AnimeocaLogo}
            alt={"Animoca's logo"}
          />
          <Backer
            link="https://www.skyvisioncapital.com/"
            src={SkyvisionLogo}
            alt={"Skyvision's logo"}
          />
        </div>
      </div>
    </main>
  );
};

export default BackersSection;
