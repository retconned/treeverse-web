import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import MonthlyTreeUpdate1 from "../public/Monthly Treeverse Update.webp";
import MonthlyTreeUpdate2 from "../public/Monthly Treeverse Update 2.jpeg";
import MonthlyTreeUpdate3 from "../public/Monthly Treeverse Update 3.jpg";
import MonthlyTreeUpdate4 from "../public/Monthly Treeverse Update 4.jpeg";
import MonthlyTreeUpdate5 from "../public/Monthly Treeverse Update 5.png";

const monthlyUpdates = [
  {
    title: "Monthly Update #1",
    picture: MonthlyTreeUpdate1,
    link: "https://tailwindcss.com/",
  },
  {
    title: "Monthly Update #2",
    picture: MonthlyTreeUpdate2,
    link: "https://twitch.com/",
  },
  {
    title: "Monthly Update #3",
    picture: MonthlyTreeUpdate3,
    link: "https://google.com/",
  },
  {
    title: "Monthly Update #4",
    picture: MonthlyTreeUpdate4,
    link: "https://youtube.com/",
  },
  {
    title: "Monthly Update #5",
    picture: MonthlyTreeUpdate5,
    link: "https://twitter.com/",
  },
  {
    title: "Monthly Update #6",
    picture: MonthlyTreeUpdate5,
    link: "https://twitter.com/",
  },
  {
    title: "Monthly Update #7",
    picture: MonthlyTreeUpdate5,
    link: "https://twitter.com/",
  },
  {
    title: "Monthly Update #8",
    picture: MonthlyTreeUpdate5,
    link: "https://twitter.com/",
  },
];

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const item = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

// Update component
const Update = ({
  title,
  src,
  link,
}: {
  src: any;
  title: string;
  link: string;
}) => {
  return (
    <motion.a variants={item} href={link} target={"_blank"} rel={"noreferrer"}>
      <div className="mr-4 mt-4 flex h-auto max-h-64 w-[20rem] cursor-pointer flex-col rounded-xl bg-treeGreen bg-opacity-20 py-3 duration-300 hover:scale-105 hover:bg-opacity-30">
        <div className="flex h-[50%] flex-row items-center justify-center">
          <div className="my-2 w-[15rem] select-none  overflow-hidden rounded-lg border-0 border-white  ">
            <Image
              // priority={true}
              draggable={false}
              // unoptimized={true}
              src={src}
              alt={title}
              layout="responsive"
              objectFit="fill"
            />
          </div>
        </div>
        <div className="flex h-[20%] items-center justify-center  py-2 px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <p className="w-fit text-xl font-semibold text-treeGray duration-150 hover:text-treeGreen">
              {title}
            </p>
          </div>
        </div>
      </div>
    </motion.a>
  );
};

const DevUpdatesSection: NextPage = () => {
  return (
    <main className="flex h-fit flex-col items-center justify-center bg-treeDarkGreen py-14 ">
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0 }}
        className="w-full py-0 pb-11 text-center font-poppins text-5xl font-semibold text-treeGreen md:py-0 md:pt-2 md:pb-10 md:text-7xl"
      >
        Dev Updates
      </motion.p>
      <div className="w-9/12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={list}
          className="flex flex-row flex-wrap items-center justify-center md:justify-between"
        >
          {monthlyUpdates.map((update, index) => {
            return (
              <Update
                key={index}
                title={update.title}
                src={update.picture}
                link={update.link}
              />
            );
          })}
        </motion.div>
      </div>
    </main>
  );
};

export default DevUpdatesSection;
