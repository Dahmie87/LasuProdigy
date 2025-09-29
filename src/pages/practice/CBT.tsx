export default function CBTpage() {
  return (
    <body className="bg-background-light dark:bg-background-dark font-display">
      <div className="flex flex-col h-screen justify-between">
        <div>
          <header className="bg-background-light dark:bg-background-dark shadow-sm sticky top-0 z-10">
            <div className="flex items-center justify-between p-4">
              <button className="text-gray-800 dark:text-white">
                <svg
                  fill="currentColor"
                  height="24"
                  viewBox="0 0 256 256"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
                </svg>
              </button>
              <h1 className="text-lg font-bold text-gray-900 dark:text-white">
                CBT Test
              </h1>
              <div className="flex items-center gap-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg px-2.5 py-1.5">
                <svg
                  className="h-5 w-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
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
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  01:59:59
                </span>
              </div>
            </div>
          </header>
          <div className="p-4">
            <div className="mb-6">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                Question 1 of 50
              </p>
              <p className="text-base font-semibold text-gray-900 dark:text-white">
                Which of the following is NOT a type of computer memory?
              </p>
            </div>
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 has-[:checked]:bg-primary/10 has-[:checked]:border-primary dark:has-[:checked]:bg-primary/20">
                <input
                  className="h-5 w-5 border-gray-300 dark:border-gray-600 text-primary focus:ring-primary focus:ring-offset-background-light dark:focus:ring-offset-background-dark bg-transparent"
                  name="answer"
                  type="radio"
                />
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  RAM
                </span>
              </label>
              <label className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 has-[:checked]:bg-primary/10 has-[:checked]:border-primary dark:has-[:checked]:bg-primary/20">
                <input
                  className="h-5 w-5 border-gray-300 dark:border-gray-600 text-primary focus:ring-primary focus:ring-offset-background-light dark:focus:ring-offset-background-dark bg-transparent"
                  name="answer"
                  type="radio"
                />
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  ROM
                </span>
              </label>
              <label className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 has-[:checked]:bg-primary/10 has-[:checked]:border-primary dark:has-[:checked]:bg-primary/20">
                <input
                  className="h-5 w-5 border-gray-300 dark:border-gray-600 text-primary focus:ring-primary focus:ring-offset-background-light dark:focus:ring-offset-background-dark bg-transparent"
                  name="answer"
                  type="radio"
                />
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  CPU
                </span>
              </label>
              <label className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 has-[:checked]:bg-primary/10 has-[:checked]:border-primary dark:has-[:checked]:bg-primary/20">
                <input
                  className="h-5 w-5 border-gray-300 dark:border-gray-600 text-primary focus:ring-primary focus:ring-offset-background-light dark:focus:ring-offset-background-dark bg-transparent"
                  name="answer"
                  type="radio"
                />
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  Cache
                </span>
              </label>
            </div>
          </div>
        </div>
        <footer className="bg-background-light dark:bg-background-dark p-4 border-t border-gray-200 dark:border-gray-800">
          <div className="flex justify-between items-center gap-4">
            <button className="flex-1 py-2 px-4 rounded-lg text-sm font-bold bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white">
              Previous
            </button>
            <button className="flex-1 py-2 px-4 rounded-lg text-sm font-bold bg-primary text-white">
              Next
            </button>
            <button className="p-2 rounded-lg bg-primary text-white">
              <svg
                fill="currentColor"
                height="24"
                viewBox="0 0 256 256"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,80H136V56h64ZM120,56v64H56V56ZM56,136h64v64H56Zm144,64H136V136h64v64Z"></path>
              </svg>
            </button>
          </div>
          <div className="mt-4 text-center">
            <button className="w-full py-2.5 px-4 rounded-lg text-sm font-bold border border-primary text-primary">
              Submit
            </button>
          </div>
        </footer>
      </div>
    </body>
  );
}
