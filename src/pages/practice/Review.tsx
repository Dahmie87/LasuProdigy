import { useLocation } from "react-router-dom";
import { useState } from "react";
function CBTHeader() {
  // const test = useParams();
  return (
    <header className="bg-background-light shadow-sm sticky top-0 z-10 flex">
      <button className="p-2 -ml-2 text-foreground-light ">
        <svg
          className="h-6 w-6"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15 18l-6-6 6-6"></path>
        </svg>
      </button>
      <div className="flex items-center p-4">
        <h1 className="text-lg font-bold text-black">Review</h1>
      </div>
    </header>
  );
}

export default function ReviewPage() {
  const { state } = useLocation();

  const { decodedScore, answers } = state;
  console.log(decodedScore, answers);
  const [currentReviewQuestion, setCurrentReviewQuestion] = useState(0);
  const correct = "text-green-600 mt-9";
  return (
    <div className="">
      <CBTHeader />
      <div className="p-4 flex-1 mb-15">
        <p className="text-sm font-medium text-gray-500 mb-2">
          Question {currentReviewQuestion + 1} of {answers.length}
        </p>

        {/* <p>Your score is {decodedScore}</p> */}
        {answers[currentReviewQuestion].question}
        {}
        <div className="px-6">
          <p
            className={
              answers[currentReviewQuestion].correct ==
              answers[currentReviewQuestion].selected
                ? correct
                : "text-red-500 mt-9"
            }
          >
            {" "}
            <span className="text-black font-bold">You chose:</span>{" "}
            {answers[currentReviewQuestion].selected}
          </p>

          <p className="text-black">
            {" "}
            <span className="text-black font-bold">Correct answer:</span>{" "}
            {answers[currentReviewQuestion].correct}
          </p>
        </div>
      </div>
      {/* {answers.map((ans, i) => (
        <div key={i}>{ans.question}</div>
      ))} */}
      <footer className="bg-background-light dark:bg-background-dark p-4">
        <div className="flex justify-between items-center gap-4">
          <button
            className="py-2 px-4 rounded-lg text-sm font-bold bg-blue-500 text-white disabled:bg-gray-300"
            onClick={() => setCurrentReviewQuestion((prev) => prev - 1)}
            disabled={currentReviewQuestion <= 0}
          >
            Previous
          </button>
          <button
            className="py-2 px-4 rounded-lg text-sm font-bold bg-blue-500 text-white disabled:bg-gray-300"
            onClick={() => setCurrentReviewQuestion((prev) => prev + 1)}
            disabled={currentReviewQuestion >= answers.length - 1}
          >
            Next
          </button>
        </div>
      </footer>
    </div>
  );
}
