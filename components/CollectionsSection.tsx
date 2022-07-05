import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import NFTrees from "../public/NFTrees.webp";
import TreeversePlots from "../public/TreeversePlots.webp";
import Timeless from "../public/Timeless.webp";

// collection component
const Collection = ({
  title,
  description,
  src,
  link,
}: {
  src: any;
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <div className="flex h-[36rem] w-[22rem] flex-col rounded-xl bg-treeDarkGray py-3">
      <div className="flex h-1/2 items-center justify-center">
        <div className="w-[15rem] cursor-pointer  overflow-hidden rounded-lg border-4 border-white duration-150 hover:border-treeGreen ">
          <Link href={link}>
            <Image
              priority={true}
              draggable={false}
              unoptimized={true}
              src={src}
              alt="Floating island environment design"
              layout="responsive"
              objectFit="fill"
            />
          </Link>
        </div>
      </div>
      <div className="flex h-1/2 items-center justify-center  px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <p className="w-fit cursor-pointer text-2xl font-bold duration-150 hover:text-treeGreen">
            {title}
          </p>
          <p className="font-barlow text-base font-semibold">{description}</p>
        </div>
      </div>
    </div>
  );
};
const CollectionsSection: NextPage = () => {
  // console.log(JungleConcept);
  return (
    <main className="flex h-fit flex-col items-center justify-center bg-treeGray py-14 ">
      <p className="w-full py-0 pb-11 text-center font-poppins text-5xl font-semibold text-treeGreen md:py-0 md:pt-2 md:pb-10 md:text-7xl">
        Collections
      </p>
      <div className="w-10/12">
        <div className="flex flex-row flex-wrap items-center justify-center space-y-10 md:justify-between md:space-y-0">
          <Collection
            link="https://opensea.io/"
            src={NFTrees}
            title="Nftrees"
            description="Nftrees produce unique fruit depending on the traits of the tree. Once an Nftree is placed, holders can set a $ROOT price for the fruits that the trees bear and other players can purchase from them. Consuming fruits gives minor temporary buffs."
          />
          <Collection
            link="https://opensea.io/"
            src={TreeversePlots}
            title="Treeverse Plots"
            description="Plots can be placed inside of Treeverse and built upon. Design your exterior and interior and teleport to your home whenever you want. Holders can also choose to rent out their plots to other adventurers given they pay the price set by the landlord."
          />
          <Collection
            link="https://opensea.io/"
            src={Timeless}
            title="Timeless"
            description="Timeless are unique anime characters that are purely cosmetic. Differentiate yourself from others with a clean badge and unique look. Timeless are CC0 and designed for multiple virtual worlds, including Treeverse.

            "
          />
          {/* <CollectionComp
            link="https://opensea.io/"
            src={JungleConcept}
            title="Building and Forging"
            description="Create your dream house on your personal plot of land and open it up to all adventurers, or keep it private and invite your friends or guild members to come visit and hang out. Or rather, gather rare resources, forge unique weapons, and trade them with other adventurers. Will you be a landlord or a master of forgery? Both are extremely desirable in Arboros."
          /> */}
        </div>
      </div>
    </main>
  );
};

export default CollectionsSection;
