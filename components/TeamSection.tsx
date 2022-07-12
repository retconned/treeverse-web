import type { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";

import Loop from "../public/Loop.webp";
import Aizea from "../public/Aizea.webp";
import Retconned from "../public/Retconned.jpg";

// array that contains the team members
const teamMembers: TeamMember[] = [
  {
    name: "Loop",
    role: "Founder / CEO",
    image: {
      src: Loop,
    },
  },
  {
    name: "Aizea",
    role: "Founder / CTO",
    image: {
      src: Aizea,
    },
  },
  {
    name: "Retconned",
    role: "Web Developer",
    image: {
      src: Retconned,
    },
  },
  {
    name: "Loop",
    role: "Founder / CEO",
    image: {
      src: Loop,
    },
  },
  {
    name: "Aizea",
    role: "Founder / CTO",
    image: {
      src: Aizea,
    },
  },
  {
    name: "Retconned",
    role: "Web Developer",
    image: {
      src: Retconned,
    },
  },
  {
    name: "Loop",
    role: "Founder / CEO",
    image: {
      src: Loop,
    },
  },
  {
    name: "Aizea",
    role: "Founder / CTO",
    image: {
      src: Aizea,
    },
  },
  {
    name: "Retconned",
    role: "Web Developer",
    image: {
      src: Retconned,
    },
  },
  {
    name: "Loop",
    role: "Founder / CEO",
    image: {
      src: Loop,
    },
  },
  {
    name: "Aizea",
    role: "Founder / CTO",
    image: {
      src: Aizea,
    },
  },
  {
    name: "Retconned",
    role: "Web Developer",
    image: {
      src: Retconned,
    },
  },
  {
    name: "Loop",
    role: "Founder / CEO",
    image: {
      src: Loop,
    },
  },
  {
    name: "Aizea",
    role: "Founder / CTO",
    image: {
      src: Aizea,
    },
  },
  {
    name: "Retconned",
    role: "Web Developer",
    image: {
      src: Retconned,
    },
  },
  {
    name: "Loop",
    role: "Founder / CEO",
    image: {
      src: Loop,
    },
  },
  {
    name: "Aizea",
    role: "Founder / CTO",
    image: {
      src: Aizea,
    },
  },
  {
    name: "Retconned",
    role: "Web Developer",
    image: {
      src: Retconned,
    },
  },
  {
    name: "Loop",
    role: "Founder / CEO",
    image: {
      src: Loop,
    },
  },
  {
    name: "Aizea",
    role: "Founder / CTO",
    image: {
      src: Aizea,
    },
  },
  {
    name: "Retconned",
    role: "Web Developer",
    image: {
      src: Retconned,
    },
  },
  {
    name: "Loop",
    role: "Founder / CEO",
    image: {
      src: Loop,
    },
  },
  {
    name: "Aizea",
    role: "Founder / CTO",
    image: {
      src: Aizea,
    },
  },
  {
    name: "Retconned",
    role: "Web Developer",
    image: {
      src: Retconned,
    },
  },
  {
    name: "Loop",
    role: "Founder / CEO",
    image: {
      src: Loop,
    },
  },
  {
    name: "Aizea",
    role: "Founder / CTO",
    image: {
      src: Aizea,
    },
  },
  {
    name: "Retconned",
    role: "Web Developer",
    image: {
      src: Retconned,
    },
  },
  {
    name: "Loop",
    role: "Founder / CEO",
    image: {
      src: Loop,
    },
  },
  {
    name: "Aizea",
    role: "Founder / CTO",
    image: {
      src: Aizea,
    },
  },
  {
    name: "Retconned",
    role: "Web Developer",
    image: {
      src: Retconned,
    },
  },
  {
    name: "Loop",
    role: "Founder / CEO",
    image: {
      src: Loop,
    },
  },
  {
    name: "Aizea",
    role: "Founder / CTO",
    image: {
      src: Aizea,
    },
  },
  {
    name: "Retconned",
    role: "Web Developer",
    image: {
      src: Retconned,
    },
  },
  {
    name: "Loop",
    role: "Founder / CEO",
    image: {
      src: Loop,
    },
  },
  {
    name: "Aizea",
    role: "Founder / CTO",
    image: {
      src: Aizea,
    },
  },
  {
    name: "Retconned",
    role: "Web Developer",
    image: {
      src: Retconned,
    },
  },
  {
    name: "Loop",
    role: "Founder / CEO",
    image: {
      src: Loop,
    },
  },
  {
    name: "Aizea",
    role: "Founder / CTO",
    image: {
      src: Aizea,
    },
  },
  {
    name: "Retconned",
    role: "Web Developer",
    image: {
      src: Retconned,
    },
  },
  {
    name: "Loop",
    role: "Founder / CEO",
    image: {
      src: Loop,
    },
  },
  {
    name: "Aizea",
    role: "Founder / CTO",
    image: {
      src: Aizea,
    },
  },
  {
    name: "Retconned",
    role: "Web Developer",
    image: {
      src: Retconned,
    },
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

// interface for the team members
interface TeamMember {
  name: string;
  role: string;
  image: {
    src: any;
  };
}

const Person = ({
  name,
  src,
  role,
}: {
  src: any;
  name: string;
  role: string;
}) => {
  return (
    <motion.div
      variants={item}
      className="mx-4 my-4 flex h-72 max-h-72 w-[16rem] cursor-pointer select-none flex-col rounded-xl bg-opacity-20 py-3 duration-300 hover:scale-105 hover:bg-opacity-30"
    >
      <div className="flex h-[50%] flex-row items-center justify-center">
        <div className="my-2 h-[8rem] w-[8rem]  overflow-hidden rounded-full border-4 border-white  ">
          <Image
            // priority={true}
            draggable={false}
            // unoptimized={true}
            src={src}
            alt={`Picture of ${name}`}
            layout="responsive"
            objectFit="fill"
          />
        </div>
      </div>
      <div className="flex h-[50%] items-center justify-center py-2 px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <p className="w-fit text-xl font-semibold text-black duration-150 hover:text-treeGreen">
            {name}
          </p>
          <p className="text-treeGreen">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const TeamSection: NextPage = () => {
  return (
    <main
      className="flex h-fit flex-col items-center justify-center bg-treeGray py-14 "
      id="Team"
    >
      <div className="flex w-9/12 items-center justify-center py-4 text-center font-poppins text-5xl text-treeGreen md:py-8 md:text-6xl lg:justify-between">
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0 }}
          className="font-bold"
        >
          Meet the Team
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden w-6/12 items-center justify-center text-base text-black sm:hidden lg:block"
        >
          Here is the team at{" "}
          <span className="font-semibold">Endless Clouds</span> focused on
          developing Treeverse. Some of our team members have contributed to
          games like League of Legends, Rainbow 6 Siege, Horizon Zero Dawn, Dark
          Souls 3, Marvel Spiderman... and are now excited to build Treeverse!
        </motion.p>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={list}
        className="flex w-10/12 flex-row flex-wrap justify-center bg-opacity-20"
      >
        {teamMembers.map((member, index) => {
          return (
            <Person
              key={index}
              name={member.name}
              src={member.image.src}
              role={member.role}
            />
          );
        })}
      </motion.div>
    </main>
  );
};

export default TeamSection;
