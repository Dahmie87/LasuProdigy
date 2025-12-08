import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function PreCbtHeader() {
  const { type } = useParams();

  return (
    <header className="top-0 z-10 bg-background-light/80 ">
      <div className="container mx-auto flex items-center justify-between h-16">
        <Link to={"/practice"}>
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
        </Link>
        <h1 className="text-lg font-bold text-foreground-light dark:text-foreground-dark">
          {type == "CBT" ? "CBT Test" : "Quick Test"}
        </h1>
        <div className="w-6"></div>
      </div>
    </header>
  );
}

function PreCBTSubHeading() {
  const { type } = useParams();
  return (
    <div>
      {type == "CBT" ? (
        <div>
          <h2 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark">
            LASU Exam Simulator
          </h2>
          <p className="mt-2 text-muted-light dark:text-muted-dark">
            This CBT mode simulates LASU exam LEMA and helps to prepare both
            effocoently and adequately.
          </p>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark">
            VLAP test mode
          </h2>
          <p className="mt-2 text-muted-light dark:text-muted-dark">
            This Quick Tes mode simulates LASU tests VLAP
          </p>
        </div>
      )}
    </div>
  );
}

// function CBTcourse() {

//   return (
//     <div></div>
//   );
// }

function PreCbtCard() {
  const { type } = useParams();

  const CARD_ARRAY = [
    {
      id: 1,
      label: "Number of questions",
      value: type == "CBT" ? "35 questions" : "15 questions",
    },
    {
      id: 2,
      label: "Timer",
      value: type == "CBT" ? "20 minutes" : "10 minutes",
    },
    { id: 3, label: "Difficulty", value: "Mixed" },
  ];

  return (
    <div>
      {CARD_ARRAY.map((eachcard) => (
        <div
          className="bg-card-light dark:bg-card-dark p-4 rounded-lg shadow-sm"
          key={eachcard.id}
        >
          <label className="text-sm font-medium text-muted-light dark:text-muted-dark">
            {eachcard.label}
          </label>
          <p className="text-base font-semibold text-foreground-light dark:text-foreground-dark mt-1">
            {eachcard.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function PreCBTpage() {
  const [courseselected, setCourseSelected] = useState("none");
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCourseSelected(event.target.value);
  };
  const isAuthenticated = localStorage.getItem("access");

  console.log(courseselected);
  const { type, coursecode, coursetitle } = useParams();

  coursecode?.replace(/\s+/g, "");

  useEffect(() => {
    if (coursecode !== "all") {
      setCourseSelected(coursecode ?? "none");
    }
  }, [coursecode]);
  const CBT_LINK = type == "CBT" ? "CBTtest" : "qtest";
  return (
    <div className="bg-background-light dark:bg-background-dark font-display">
      <div className="flex flex-col min-h-screen">
        <PreCbtHeader />
        <div className="flex-grow container mx-auto px-4 py-8">
          <div className="space-y-8">
            <PreCBTSubHeading />
            <div className="space-y-4">
              {coursecode !== "all" ? (
                <div className="bg-card-light dark:bg-card-dark p-4 rounded-lg shadow-sm">
                  <label className="text-sm font-medium text-muted-light dark:text-muted-dark">
                    Course
                  </label>
                  <p className="text-base font-semibold text-foreground-light dark:text-foreground-dark mt-1">
                    {coursetitle}
                  </p>
                </div>
              ) : (
                <div className="bg-card-light dark:bg-card-dark p-4 rounded-lg shadow-sm">
                  <label className="text-sm font-medium text-muted-light dark:text-muted-dark">
                    Course
                  </label>
                  <div className="flex items-center justify-between mt-1">
                    <select
                      className="h-8 font-semibold text-foreground-light dark:text-foreground-dark w-full focus:outline-sky-500"
                      onChange={handleChange}
                    >
                      <option value="none">-- none --</option>
                      <option value="CHM101">CHM 101 atoms</option>
                      <option value="MAT101">Math 101 algebra</option>
                      <option value="PHY101">Physics 101 Mechanics</option>
                      <option value="CSC101">Computer Science 101</option>
                    </select>
                  </div>
                </div>
              )}

              <PreCbtCard />
            </div>
          </div>
        </div>

        <Link
          to={
            isAuthenticated
              ? `/CBT-test/${CBT_LINK}/course/${courseselected}`
              : "/user/not-logged-in"
          }
        >
          <div className=" bottom-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
            <div className="container mx-auto p-4">
              <button
                className="w-full bg-sky-500 disabled:bg-gray-300 text-white font-bold py-4 px-5 rounded-xl text-lg hover:bg-sky-500/90 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-background-light"
                disabled={courseselected == "none"}
              >
                Start Test
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
