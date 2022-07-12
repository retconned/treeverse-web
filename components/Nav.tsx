import type { NextPage } from "next";
import Image from "next/image";
import Logo from "../public/Icon Logo.png";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const menu = {
  open: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.2,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.2,
    },
  },
};

// nav button component
const NavButton = ({
  href,
  text,
  onClick,
  ...props
}: {
  href: string;
  text: string;
  onClick?: () => void;
  [key: string]: any;
}) => {
  return (
    <Link href={href} {...props}>
      <button
        onClick={onClick}
        className="focus:shadow-outline-none rounded-md py-2 px-3 font-poppins font-normal text-white duration-150 hover:bg-white hover:bg-opacity-20 hover:text-treeCyan focus:outline-none"
      >
        {text}
      </button>
    </Link>
  );
};

const Navbar: NextPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="top-0 z-40 flex h-20 items-center justify-between bg-treeDarkGreen px-10 py-2 md:sticky md:px-20 md:py-2 lg:sticky">
      <Image
        src={Logo}
        width={50}
        height={50}
        objectFit="contain"
        alt="Treeverse Logo"
        draggable={false}
      />
      <div className="hidden md:flex">
        <ul className=" md:flex md:flex-row md:space-x-4">
          <NavButton href="#" text="Home" />
          <NavButton href="#Gameplay" text="Gameplay" />
          <NavButton href="#Collections" text="Collections" />
          <NavButton href="#DevUpdates" text="Updates" />
          <NavButton href="#Team" text="Team" />
          <NavButton href="#Backers" text="Backers" />
        </ul>
      </div>
      <div className="z-40 block md:hidden">
        <motion.button
          whileTap={{ scale: 1.1 }}
          onClick={toggleMenu}
          className="hover:scale-110  md:hover:scale-100"
          title="menu button"
        >
          {!menuOpen ? (
            <FaBars size={30} color={"white"} />
          ) : (
            <FaTimes size={30} color={"white"} />
          )}
        </motion.button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menu}
            initial={menu.closed}
            animate={menuOpen ? menu.open : menu.closed}
            exit={menu.exit}
            className={"absolute inset-0 z-30 bg-treeDarkGreen md:sticky"}
          >
            <div
              className={`absolute inset-20 z-20 flex flex-col items-center justify-center`}
            >
              <ul className="flex flex-col items-center justify-center space-y-3 md:mb-20 md:space-y-6">
                <NavButton href="/" text="Home" />
                <NavButton href="/Gameplay" text="Gameplay" />
                <NavButton href="/Collections" text="Collections" />
                <NavButton href="/Updates" text="Updates" />
                <NavButton href="/Updates" text="Team" />
                <NavButton href="/Backers" text="Backers" />
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
