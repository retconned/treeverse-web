import type { NextPage } from "next";
import Image from "next/image";
import Logo from "../public/Icon Logo.png";
import Link from "next/link";
// import menu icon from react-icons
import { FaBars } from "react-icons/fa";
// import menu close icon from react-icons
import { FaTimes } from "react-icons/fa";

// import useState from react
import { useState } from "react";

// menu useState

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
    <nav className=" flex h-20 items-center justify-between  bg-treeDarkGreen px-10 py-2 md:px-20 md:py-2">
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
          <NavButton href="/" text="Home" />
          <NavButton href="/Gameplay" text="Gameplay" />
          <NavButton href="/Collections" text="Collections" />
          <NavButton href="/Updates" text="Updates" />
          <NavButton href="/Updates" text="Team" />
          <NavButton href="/Backers" text="Backers" />
        </ul>
      </div>
      <div className="z-40 block md:hidden">
        <button onClick={toggleMenu}>
          {!menuOpen ? (
            <FaBars size={30} color={"white"} />
          ) : (
            <FaTimes size={30} color={"white"} />
          )}
        </button>
      </div>
      {menuOpen && (
        <div className="absolute inset-0 z-30 bg-treeDarkGreen ">
          <div className="absolute inset-20 z-20 flex flex-col items-center justify-center ">
            <ul className="flex flex-col items-center justify-center space-y-3 md:mb-20 md:space-y-6">
              <NavButton href="/" text="Home" />
              <NavButton href="/Gameplay" text="Gameplay" />
              <NavButton href="/Collections" text="Collections" />
              <NavButton href="/Updates" text="Updates" />
              <NavButton href="/Updates" text="Team" />
              <NavButton href="/Backers" text="Backers" />
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
