import Image from "next/image";

const questions = [
  "Do I need to sign a contract?",
  "What sevices do we offer?",
  "How do we ensure quality of deliverables?",
  "How do you ensure user privacy?",
  "How do I begin collaboration?",
  "How can I pay for the services?",
];
export const Question = () => {
  return (
    <div className="border-b border-1 border-gray-500">
      <div className="w-full pt-20 px-32">
        <div className="w-full text-center">
          <h1 className="text-2xl font-medium">GET TO KNOW US</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0594ff] to-[#93f3f6] rounded mx-auto mt-1"></div>
          <h1 className="text-6xl font-medium text-center my-6">
            Frequently Asked Questions
          </h1>
        </div>
      </div>
      <div className="w-full px-20 py-10 grid grid-cols-2 gap-6">
        {questions.map((el, i) => {
          return (
            <div
              key={i}
              className="p-3 rounded flex w-full justify-between items-center border border-1 border-white"
            >
              <span>{el}</span>
              <Image
                src="/down_arrow.svg"
                alt="down arrow"
                height={15}
                width={15}
                className="white-image"
              ></Image>
            </div>
          );
        })}
      </div>
    </div>
  );
};
