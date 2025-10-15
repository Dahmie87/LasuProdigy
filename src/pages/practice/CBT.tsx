/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function CBTHeader({ timer }: { timer: string }) {
  const test = useParams();
  return (
    <header className="bg-background-light dark:bg-background-dark shadow-sm sticky top-0 z-10">
      <div className="flex items-center justify-between p-4">
        <button className="text-gray-800 dark:text-white">
          <svg
            fill="#000"
            height="24"
            viewBox="0 0 256 256"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
          </svg>
        </button>
        <h1 className="text-lg font-bold text-black">{test.courseid}</h1>
        <div className="flex items-center gap-1.5 bg-gray-100 rounded-lg px-2.5 py-1.5">
          <svg
            className="h-5 w-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="#000"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6v6l4 2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M12 21a9 9 0 110-18 9 9 0 010 18z"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <span className="text-sm font-semibold text-black-500">{timer}</span>
        </div>
      </div>
    </header>
  );
}

function OptionsSection(props: {
  value: any;
  onChange: () => void;
  checked: boolean;
}) {
  return (
    <div className="space-y-3 bg-blue-100/20">
      <label className="flex items-center gap-3 p-4 rounded-lg">
        <input
          className="h-5 w-5 border-gray-300 text-primary focus:ring-primary focus:ring-offset-background-light"
          name="answer"
          type="radio"
          onChange={props.onChange}
          checked={props.checked}
        />
        <span className="text-sm font-medium ">{props.value}</span>
      </label>
    </div>
  );
}

// function ConfirmationModal() {
//   return (

//   );
// }

export default function CBTpage() {
  const [timerSeconds, setTimerSeconds] = useState(1500);
  const params = useParams();

  const urlMap: Record<string, string> = {
    MAT101: "1",
    CHM101: "2",
    PHY101: "6",
  };

  const urlId = urlMap[params.courseid!];
  //  HH:MM:SS
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60)
      .toString()
      .padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  // Countdown
  useEffect(() => {
    if (timerSeconds <= 0) return;
    const interval = setInterval(() => {
      setTimerSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [timerSeconds]);

  const [Modal, setModal] = useState(false);

  const [selectedOptions, setSelectedOptions] = useState<any[]>([]);

  const handleOptionChange = (questionIndex: any, value: any) => {
    const updated = [...selectedOptions];
    updated[questionIndex] = value;
    setSelectedOptions(updated);
    console.log(updated);
  };
  type Option = { option_text: string; is_correct: boolean };
  type Question = { question_text: string; options: Option[] };
  const [Questions, setQuestions] = useState<Question[]>([]);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const MY_QUESTIONS_API_URL = `http://localhost:8000/api/courses/${urlId}/`;

  useEffect(() => {
    fetch(MY_QUESTIONS_API_URL)
      .then((res) => res.json())
      .then((data) => {
        const shuffled = [...data.questions].sort(() => Math.random() - 0.5);

        // Limit how many you want (e.g. 10)
        const limited = shuffled.slice(0, 10);

        // Save the limited, random questions to state
        setQuestions(limited);
      });
  }, [MY_QUESTIONS_API_URL]);

  function submitAnswers() {
    const CORRECT_ARRAY = [];
    for (let i = 0; i < Questions.length; i++) {
      const userAnswer = selectedOptions[i];
      const correctAnswer = Questions[i].options.find(
        (option) => option.is_correct
      )?.option_text;
      if (userAnswer === correctAnswer) {
        CORRECT_ARRAY.push(userAnswer);
      }
    }
    const filtered = CORRECT_ARRAY.filter((arr) => arr !== undefined);
    console.log("user scored", filtered.length, "out of", Questions.length);
    return filtered.length;
  }

  const cbtNavigate = useNavigate();

  function handleConfirm() {
    const total = submitAnswers();
    const encoded = btoa(total.toString());
    cbtNavigate(`/CBTresults?CBT=${encoded}`);
  }
  return (
    <div className="flex flex-col h-screen">
      <CBTHeader timer={formatTime(timerSeconds)} />
      <div className="p-4 ">
        <div className="mb-6">
          <p className="text-sm font-medium text-gray-500 mb-2">
            Question {currentQuestion + 1} of {Questions.length}
          </p>
          {Questions[currentQuestion]?.question_text}
        </div>
        {Questions[currentQuestion]?.options.map(
          (option: { option_text: string }, i) => (
            <OptionsSection
              key={i}
              value={option.option_text}
              onChange={() =>
                handleOptionChange(currentQuestion, option.option_text)
              }
              checked={selectedOptions[currentQuestion] === option.option_text}
            />
          )
        )}
      </div>

      <footer className="bg-background-light dark:bg-background-dark p-4">
        <div className="flex justify-between items-center gap-4">
          <button
            className="py-2 px-4 rounded-lg text-sm font-bold bg-blue-500 text-white"
            onClick={() => setCurrentQuestion((prev) => prev - 1)}
            disabled={currentQuestion <= 0 ? true : false}
          >
            Previous
          </button>
          <button
            className="py-2 px-4 rounded-lg text-sm font-bold bg-blue-500 text-white"
            onClick={() => setCurrentQuestion((prev) => prev + 1)}
            disabled={currentQuestion >= Questions.length - 1 ? true : false}
          >
            Next
          </button>
        </div>
        <div className="mt-4 text-center">
          <button
            className="bg-black py-2.5 px-10 rounded-xl text-white"
            onClick={() => setModal(true)}
          >
            Submit
          </button>
        </div>
      </footer>

      {Modal && (
        <div
          className="flex items-center justify-center min-h-screen bg-black/80 fixed inset-0 z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModal(false);
          }}
        >
          <div className="bg-white shadow-lg rounded-2xl p-6 w-80 text-center">
            <div className="relative w-20 h-20 mx-auto mb-4">
              <div className="w-full h-full rounded-full border-[5px] border-orange-400 "></div>
              <span className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-orange-500">
                !
              </span>
            </div>

            {/* Message */}
            <h2 className="text-lg font-semibold text-gray-800 mb-6">
              ARE YOU CONFIRMING SUBMISSION
            </h2>

            {/* Buttons */}
            <div className="flex justify-center gap-4">
              <button
                onClick={handleConfirm}
                className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg shadow"
              >
                Confirm
              </button>

              <button
                onClick={() => setModal(false)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
