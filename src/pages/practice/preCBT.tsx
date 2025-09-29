export default function PreCBTpage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display">
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-border-light dark:border-border-dark">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <button className="p-2 -ml-2 text-foreground-light dark:text-foreground-dark">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15 18l-6-6 6-6"></path>
                </svg>
              </button>
              <h1 className="text-lg font-bold text-foreground-light dark:text-foreground-dark">
                CBT Test
              </h1>
              <div className="w-6"></div>
            </div>
          </div>
        </header>
        <div className="flex-grow container mx-auto px-4 py-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark">
                Prepare for Your Test
              </h2>
              <p className="mt-2 text-muted-light dark:text-muted-dark">
                This test assesses your understanding of CBT principles. Ensure
                you're ready before you begin.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-card-light dark:bg-card-dark p-4 rounded-lg shadow-sm">
                <label className="text-sm font-medium text-muted-light dark:text-muted-dark">
                  Course
                </label>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-base font-semibold text-foreground-light dark:text-foreground-dark">
                    CBT Fundamentals
                  </p>
                  <svg
                    className="h-5 w-5 text-muted-light dark:text-muted-dark"
                    fill="none"
                    height="20"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </div>
              </div>
              <div className="bg-card-light dark:bg-card-dark p-4 rounded-lg shadow-sm">
                <label className="text-sm font-medium text-muted-light dark:text-muted-dark">
                  Number of Questions
                </label>
                <p className="text-base font-semibold text-foreground-light dark:text-foreground-dark mt-1">
                  180 Questions
                </p>
              </div>
              <div className="bg-card-light dark:bg-card-dark p-4 rounded-lg shadow-sm">
                <label className="text-sm font-medium text-muted-light dark:text-muted-dark">
                  Timer
                </label>
                <p className="text-base font-semibold text-foreground-light dark:text-foreground-dark mt-1">
                  2 hours
                </p>
              </div>
              <div className="bg-card-light dark:bg-card-dark p-4 rounded-lg shadow-sm">
                <label className="text-sm font-medium text-muted-light dark:text-muted-dark">
                  Difficulty
                </label>
                <p className="text-base font-semibold text-foreground-light dark:text-foreground-dark mt-1">
                  Mixed
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky bottom-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
          <div className="container mx-auto p-4 border-t border-border-light dark:border-border-dark">
            <button className="w-full bg-sky-500 text-white font-bold py-4 px-5 rounded-xl text-lg hover:bg-sky-500/90 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark">
              Start Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
