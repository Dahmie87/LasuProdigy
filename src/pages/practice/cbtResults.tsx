import {
  useSearchParams,
  useLocation,
  useNavigate,
  Link,
} from "react-router-dom";

const total = 30;

// import { useState } from "react";

function ScoreSection() {
  const [searchParams] = useSearchParams();

  const cbtScore = searchParams.get("CBT");
  const RADIUS = 44;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

  const decodedScore = cbtScore ? parseInt(atob(cbtScore)) : 0;
  const RATIO = (decodedScore / total) * CIRCUMFERENCE;

  return (
    <section className="mb-6 rounded-xl bg-white dark:bg-primary/10 p-6 text-center">
      <p className="text-sm text-gray-700">Overall Score</p>
      <div className="my-4 flex items-center justify-center">
        <div className="relative h-40 w-40">
          <svg
            className="h-full w-full"
            fill="none"
            stroke-width="12"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="text-gray-200 dark:text-primary/20"
              cx="50"
              cy="50"
              r={RADIUS}
              stroke="currentColor"
            ></circle>
            <circle
              className="text-primary"
              cx="50"
              cy="50"
              r={RADIUS}
              stroke="#2d6ee6ff"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={CIRCUMFERENCE - RATIO}
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            ></circle>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold text-gray-900">
              {decodedScore}
            </span>
            <span className="text-gray-500 dark:text-gray-700">/ {total}</span>
          </div>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-600">
        Great job,Dahmie ! You've shown excellent understanding.
      </p>
    </section>
  );
}

// function PerformanceSection() {
//   const [searchParams] = useSearchParams();

//   const [morePerformance, setMorePerformance] = useState(true);

//   const cbtScore = searchParams.get("CBT");
//   const decodedScore = cbtScore ? parseInt(atob(cbtScore)) : 0;
//   const percentScore = (decodedScore / 30) * 100;
//   const PercentFlloor = Math.floor(percentScore);

//   // const PERFORMANCE_ARRAY = [
//   //   { id: 2, hide: false, name: "Questions attempted", value: "29/30" },
//   //   { id: 1, hide: false, name: "Questions failed", value: "7/30" },
//   //   {
//   //     id: 3,
//   //     hide: false,
//   //     name: "Perccentage",
//   //     value: `${PercentFlloor}%`,
//   //   },
//   //   { id: 4, hide: false, name: "Time remaining", value: "01:55" },
//   //   {
//   //     id: 5,
//   //     hide: { morePerformance },
//   //     name: "Time remaining",
//   //     value: "01:55",
//   //   },
//   //   { id: 6, hide: true, name: "Time remaining", value: "01:55" },
//   //   { id: 7, hide: true, name: "Time remaining", value: "01:55" },
//   // ];
//   return (
//     <section
//       className="mb-6"
//       onClick={() => {
//         setMorePerformance(false);
//       }}
//     >
//       <div className="flex justify-between">
//         <h3 className="mb-4 text-lg font-semibold text-gray-900">
//           Performance Analysis
//         </h3>
//         <p
//           onClick={() => {
//             setMorePerformance(false);
//           }}
//           className="text-sm text-sky-500 font-bold"
//         >
//           see more
//         </p>
//       </div>
//     </section>
//   );
// }
type PerformanceProps = {
  name: string;
  value: string;
};
function PerformanceComponent({ name, value }: PerformanceProps) {
  return (
    <div>
      <div className="p-8 w-full bg-white">
        <h5 className="font-bold text-sm">{name}</h5>
        <p>{value}</p>
      </div>
    </div>
  );
}
export default function CBTResultsPage() {
  const [searchParams] = useSearchParams();
  const LOCATION = useLocation();
  const ResultNavigate = useNavigate();

  const cbtScore = searchParams.get("CBT");

  const decodedScore = cbtScore ? parseInt(atob(cbtScore)) : 0;

  interface Answer {
    questionId: number;
    selected?: string; // or whatever type `selected` actually is
  }

  // Then, type LOCATION.state
  const { answers, timerSeconds } = LOCATION.state as {
    answers: Answer[];
    timerSeconds: number;
  };

  const ATTEMPTED_ARR = answers.filter(
    (answer) => answer.selected !== undefined
  );

  const attempted = ATTEMPTED_ARR.length;
  const percent = `${Math.floor((decodedScore / total) * 100)}%`;
  console.log(timerSeconds);
  const formatTimeRem = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const min_str = m.toString();
    const s = seconds % 60;
    return `${min_str}mins ${s}secs`;
  };
  const averageTime = (secs: number) => {
    const time_used = 1200 - secs;
    const avg = Math.floor(time_used / total);

    return `${avg} seconds`;
  };
  console.log(averageTime(timerSeconds));
  //   const angle = (decodedScore / total) * 360;
  //   console.log(angle);
  return (
    <div className="bg-background-light dark:bg-background-dark font-display">
      <div className="relative flex min-h-screen w-full flex-col justify-between">
        <div className="flex-grow">
          <div className="flex items-center p-4">
            <h1 className="flex-1 text-center text-lg font-bold text-black ">
              Score Dashboard
            </h1>
          </div>
          <div className="p-4">
            <ScoreSection />
            <section className="mb-6">
              <div className="flex justify-between">
                <h3 className="mb-4 text-lg font-semibold text-gray-900">
                  Performance Analysis
                </h3>
                <p className="text-sm text-sky-500 font-bold">see more</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <PerformanceComponent value={percent} name={"Percentage"} />
                <PerformanceComponent
                  value={`${attempted}`}
                  name={"Questions attempted"}
                />
                <PerformanceComponent
                  value={formatTimeRem(timerSeconds)}
                  name={"Time remaining"}
                />
                <PerformanceComponent
                  value={averageTime(timerSeconds)}
                  name={"Average Time "}
                />
              </div>
            </section>
            <section className="grid grid-cols-2 gap-4">
              {" "}
              <Link
                to={"/practice"}
                className="flex flex-col items-center justify-center gap-2 rounded-xl bg-white dark:bg-primary/10 p-4 text-center"
              >
                <button>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/10 text-primary">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="#2d6ee6ff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"></path>
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-900">
                    Go to Practice
                  </span>
                </button>
              </Link>
              <button
                onClick={() =>
                  ResultNavigate("/Review", {
                    state: { decodedScore, answers },
                  })
                }
                className="flex flex-col items-center justify-center gap-2 rounded-xl bg-white dark:bg-primary/10 p-4 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/10 text-primary">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="#2d6ee6ff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 20h.01"></path>
                    <path d="M5 14.5a9 9 0 1 1 14 0"></path>
                    <path d="M8.5 12.5a1.5 1.5 0 0 1-3 0V11a3 3 0 0 1 6 0 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 0-5 3 3 0 0 1-6 0v1.5"></path>
                  </svg>
                </div>

                <span className="font-semibold text-gray-900 ">
                  Review Answers
                </span>
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
