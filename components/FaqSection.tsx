import type { NextPage } from "next";

// array that contains questions and answers
const faqQuestions: TeamMember[] = [
  {
    question: "Is it F2P?",
    answer: "Yes, when Treeverse officially launches, it will be free to play!",
  },
  {
    question: "Do I need a phone to play?",
    answer:
      "Treeverse is designed for mobile, but we plan to port to PC at official launch.",
  },
  {
    question: "Will it be PVP?",
    answer:
      "We are starting with PVE first, and then plan to build a PVP system in the future if all goes well.",
  },
  {
    question: "Will it be P2W?",
    answer:
      "We are limiting P2W as much as we can. Collectibles that can be purchased hardly affect gameplay.",
  },

  {
    question: "What are Collectibles?",
    answer:
      "We are planning to launch our Alpha at the end of the year with a proof-of-concept. Sign up to keep up to date with any updated timelines.",
  },
  {
    question: "Can I keep track of the game?",
    answer:
      "Collectibles are NFTs on the blockchain. You own these assets and can trade them whenever you want.",
  },
  {
    question: "Where is the community?",
    answer:
      "Our community is on Discord where you can speak with everyone excited about Treeverse. Join us!",
  },
  {
    question: "Any gameplay information?",
    answer:
      "To understand more about the gameplay of Treeverse, we will release a game guide in the future.",
  },
  {
    question: "When release?",
    answer:
      "We are starting with PVE first, and then plan to build a PVP system in the future if all goes welWe are limiting P2W as much as we can. Collectibles that can be purchased hardly affect gameplay.We are planning to launch our Alpha at the end of the year with a proof-of-concept. Sign up to keep up to date with any updated timelines.",
  },
];

interface TeamMember {
  question: string;
  answer: string;
}

const Question = ({
  answer,
  question,
}: {
  question: string;
  answer: string;
}) => {
  return (
    <div>
      <div className="mr-10 mt-10 flex  min-h-[12rem] w-[20rem] cursor-pointer flex-col rounded-xl bg-treeGray bg-opacity-20 py-3 duration-300 hover:scale-105 hover:bg-opacity-30">
        <div className="flex h-[20%] items-center justify-center py-2 px-8">
          <div className="flex flex-col items-start justify-center space-y-4 text-start">
            <p className="w-fit text-xl font-semibold text-treeGray duration-150 hover:text-treeGreen">
              {question}
            </p>
            <p className="w-fit text-sm font-normal text-treeGray duration-150 ">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FaqSection: NextPage = () => {
  return (
    <main className="flex h-fit flex-col items-center justify-center bg-treeDarkGreen py-14">
      <div className="flex w-9/12 flex-col items-start justify-center py-4 text-center font-poppins text-5xl text-treeGreen md:flex-row md:py-0 md:text-7xl lg:justify-around">
        <p className="mt-10 w-[23%] pl-4 text-start font-bold">FAQ</p>
        <div className="flex w-10/12 flex-row flex-wrap items-start justify-center bg-opacity-20">
          {faqQuestions.map((member, index) => {
            return (
              <Question
                key={index}
                question={member.question}
                answer={member.answer}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default FaqSection;
