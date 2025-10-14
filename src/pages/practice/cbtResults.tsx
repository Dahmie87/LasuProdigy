import { useSearchParams } from "react-router-dom";
export default function CBTResultsPage() {
  const [searchParams] = useSearchParams();
  const cbtScore = searchParams.get("CBT");
  const decodedScore = cbtScore ? parseInt(atob(cbtScore)) : 0;
  return (
    <div className="bg-background-light dark:bg-background-dark font-display">
      <div className="relative flex min-h-screen w-full flex-col justify-between">
        <div className="flex-grow">
          <header className="flex items-center p-4">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-primary/20 text-gray-800 ">
              <svg
                className="h-6 w-6"
                fill="none"
                height="24"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 12H5"></path>
                <path d="m12 19-7-7 7-7"></path>
              </svg>
            </button>
            <h1 className="flex-1 text-center text-lg font-bold text-black ">
              Score Dashboard
            </h1>
          </header>
          <main className="p-4">
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
                      r="44"
                      stroke="currentColor"
                    ></circle>
                    <circle
                      className="text-primary"
                      cx="50"
                      cy="50"
                      r="44"
                      stroke="#2d6ee6ff"
                      stroke-dasharray="276.46"
                      stroke-dashoffset="41.469"
                      stroke-linecap="round"
                      transform="rotate(-90 50 50)"
                    ></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold text-gray-900">
                      {decodedScore}
                    </span>
                    <span className="text-gray-500 dark:text-gray-700">
                      / 10
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-600">
                Great job, ! You've shown excellent understanding.
              </p>
            </section>
            <section className="mb-6">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">
                Performance Analysis
              </h3>
            </section>
            <section className="grid grid-cols-2 gap-4">
              <button className="flex flex-col items-center justify-center gap-2 rounded-xl bg-white dark:bg-primary/10 p-4 text-center">
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
                <span className="font-semibold text-gray-900 ">
                  Go to Practice
                </span>
              </button>
              <button className="flex flex-col items-center justify-center gap-2 rounded-xl bg-white dark:bg-primary/10 p-4 text-center">
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
          </main>
        </div>
      </div>
    </div>
  );
}
