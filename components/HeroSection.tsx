import type { NextPage } from "next";
import Image from "next/image";
import FullLogo from "../public/Full logo.png";
import Link from "next/link";

import BG from "../public/BG-Image.png";

const HerSection: NextPage = () => {
  return (
    // overlay is used to make the background image cover the entire page

    <div className="relative">
      <div className="bg-blue-400 md:block">
        <div className=" absolute inset-0 z-20 flex flex-col items-center justify-center ">
          <div className="flex flex-col items-center justify-center space-y-3 md:mb-20 md:space-y-6">
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
            <p className="text-center font-poppins text-sm font-medium text-white md:text-lg">
              Currently in development by Endless Clouds.
            </p>
            <button className="focus:shadow-outline-none rounded-md bg-black bg-opacity-80 py-2 px-4 font-poppins text-base font-normal text-white duration-150 hover:bg-treeGreen hover:text-white focus:outline-none md:py-3 md:px-8 md:text-lg">
              Sign up
            </button>
          </div>
        </div>
        <div className="relative flex h-[calc(100vh-80px)] w-full items-center justify-center">
          <div className="absolute inset-0 z-10 bg-black opacity-40 " />
          <Image
            priority
            src={BG}
            layout="fill"
            objectFit="cover"
            draggable={false}
            alt="Treeverse Background"
          />
        </div>
      </div>
    </div>
  );
};

export default HerSection;
