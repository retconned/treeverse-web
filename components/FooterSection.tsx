import type { NextPage } from "next";
import Image from "next/image";

import FullLogo from "../public/Full logo.png";
import { motion } from "framer-motion";

import { FaTwitter, FaYoutube, FaDiscord } from "react-icons/fa";

const Footer: NextPage = () => {
  return (
    <motion.main className="flex h-fit flex-col items-center justify-center bg-treeDarkGreen py-10">
      <motion.div className="flex w-9/12 flex-col items-start justify-center py-4 text-center font-poppins text-5xl text-treeGreen md:flex-row md:py-0 lg:justify-center">
        <div className="py-0">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
            className="flex h-20 w-full flex-row items-center justify-center space-x-10 text-white "
          >
            <a href="https://twitter.com/TheTreeverse">
              <button
                title="Treeverse's twitter account"
                className="rounded-md bg-white bg-opacity-20 p-2 duration-300 hover:scale-105 hover:bg-opacity-30"
              >
                <FaTwitter size={30} />
              </button>
            </a>
            <a href="https://discord.com/invite/treeverse">
              <button
                title="Treeverse's discord server"
                className="rounded-md bg-white bg-opacity-20 p-2 duration-300 hover:scale-105 hover:bg-opacity-30"
              >
                <FaDiscord size={30} />
              </button>
            </a>
            <a href="https://www.youtube.com/channel/UC-txmjw3iAs9-gz8D9i5QUw/featured">
              <button
                title="Treeverse's youtube channel"
                className="rounded-md bg-white bg-opacity-20 p-2 duration-300 hover:scale-105 hover:bg-opacity-30"
              >
                <FaYoutube size={30} />
              </button>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src={FullLogo}
              width={330}
              height={90}
              objectFit="cover"
              draggable={false}
              alt="Treeverse Logo"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.main>
  );
};

export default Footer;
