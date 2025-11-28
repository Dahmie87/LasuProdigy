/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function CBTHeader({ timer }: { timer: string }) {
  const test = useParams();
  return (
    <header className="bg-background-light dark:bg-background-dark shadow-sm sticky top-0 z-10">
      <div className="flex items-center justify-between p-4">
        <Link to={"/practice"}>
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
        </Link>
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
  label: any;
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
        <span className="text-sm font-medium ">
          {props.label}
          {".    "}
          {props.value}
        </span>
      </label>
    </div>
  );
}

export default function CBTpage() {
  const params = useParams();
  const testSecoods = params.testtype == "qtest" ? 600 : 1200;
  const [timerSeconds, setTimerSeconds] = useState(testSecoods);

  const [timeModal, setTimeModal] = useState(false);

  const urlMap: Record<string, string> = {
    MAT101: "1",
    CHM101: "2",
    PHY101: "6",
    CSC101: "7",
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
    if (timerSeconds <= 0) {
      setTimeModal(true);
    }
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

  useEffect(() => {
    const MY_QUESTIONS_API_URL = `http://localhost:8000/api/courses/${urlId}/`;
    const AccessToken = localStorage.getItem("access");
    console.log(AccessToken);

    fetch(MY_QUESTIONS_API_URL, {
      headers: {
        Authorization: `Bearer ${AccessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const shuffled = [...data.questions].sort(() => Math.random() - 0.5);

        const limited =
          params.testtype == "qtest"
            ? shuffled.slice(0, 15)
            : shuffled.slice(0, 30);
        setQuestions(limited);
      });
  }, []);
  console.log(params.testtype);
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

    const answeredOptions = Questions.map((q, i) => ({
      question: q.question_text,
      selected: selectedOptions[i],
      correct: q.options.find((opt) => opt.is_correct)?.option_text,
    }));
    cbtNavigate(`/CBTresults?CBT=${encoded}`, {
      state: { answers: answeredOptions, timerSeconds },
    });
  }
  return (
    <div className="flex flex-col h-screen">
      <CBTHeader timer={formatTime(timerSeconds)} />

      <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
        {params.testtype !== "qtest" && (
          <aside className="w-full md:w-64 order-2 md:order-1 border-red-900 flex flex-col p-4 overflow-y-auto">
            {/* Random things i will add later*/}
            <div className="mb-4">
              <p className="text-sm font-bold mb-2">OMOTAYO DAMILARE</p>
            </div>

            {/*6 per row */}
            <div className="grid grid-cols-6 gap-2">
              {Questions.map((_, index) => {
                const attempted = selectedOptions[index];
                return (
                  <button
                    key={index}
                    onClick={() => setCurrentQuestion(index)}
                    className={`w-8 h-8 rounded-md font-semibold flex items-center justify-center text-sm transition-colors duration-200
              ${
                attempted
                  ? "border-2 border-green-500"
                  : index === currentQuestion
                  ? "border-2 border-blue-500"
                  : "border-2 border-gray-300"
              }`}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
          </aside>
        )}
        <div className="flex flex-col flex-1 overflow-y-auto order-1 md:order-2">
          <div className="p-4 flex-1">
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
                  label={String.fromCharCode(65 + i)}
                  onChange={() =>
                    handleOptionChange(currentQuestion, option.option_text)
                  }
                  checked={
                    selectedOptions[currentQuestion] === option.option_text
                  }
                />
              )
            )}
          </div>

          {/* ==== Footer ==== */}
          <footer className="bg-background-light dark:bg-background-dark p-4">
            <div className="flex justify-between items-center gap-4">
              <button
                className="py-2 px-4 rounded-lg text-sm font-bold bg-blue-500 text-white disabled:bg-gray-300"
                onClick={() => setCurrentQuestion((prev) => prev - 1)}
                disabled={currentQuestion <= 0}
              >
                Previous
              </button>
              <button
                className="py-2 px-4 rounded-lg text-sm font-bold bg-blue-500 text-white disabled:bg-gray-300"
                onClick={() => setCurrentQuestion((prev) => prev + 1)}
                disabled={currentQuestion >= Questions.length - 1}
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
        </div>
      </div>

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
      {timeModal && (
        <div className="flex items-center justify-center min-h-screen bg-black/80 fixed inset-0 z-50">
          <div className="bg-white shadow-lg rounded-2xl p-6 w-80 text-center">
            <h2 className="text-lg font-semibold text-gray-800">
              TIME IS UP, PLEASE SUBMIT!
            </h2>
            <div className=" inset-0 flex items-center justify-center p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="60px"
                viewBox="0 -960 960 960"
                width="60px"
                fill="#050505ff"
              >
                <path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z" />
              </svg>
            </div>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleConfirm}
                className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
