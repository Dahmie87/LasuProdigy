import { Link } from "react-router-dom";

type ModeCardArgs = {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
};

const Header = () => (
  <header className="flex-shrink-0">
    <div className="p-4">
      <h1 className="text-xl font-bold text-center text-[#111318] dark:text-white">
        Practice
      </h1>
    </div>
  </header>
);

const CBTModeCard = () => (
  <div className="bg-sky-500 rounded-xl p-6 shadow-lg flex flex-col items-center text-center text-white">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="50px"
      viewBox="0 -960 960 960"
      width="50px"
      fill="#FFF"
    >
      <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
    </svg>{" "}
    <h2 className="text-2xl font-bold">CBT Mode</h2>
    <p className="mt-1 mb-4 opacity-80">Simulate the real exam environment</p>
    <button className="w-full bg-white text-sky-500 font-bold py-3 px-6 rounded-lg shadow-md">
      Start CBT Test
    </button>
  </div>
);

const ModeCard = ({ icon, title, description, buttonText }: ModeCardArgs) => (
  <div className="bg-white dark:bg-background-dark/50 rounded-xl p-6 shadow-md flex items-center space-x-4">
    <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full">
      {icon === "timer" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#1f1f1f"
        >
          <path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#1f1f1f"
        >
          <path d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z" />
        </svg>
      )}
    </div>
    <div className="flex-grow">
      <h3 className="text-lg font-bold text-[#111318] dark:text-white">
        {title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
        {description}
      </p>
      <button className="mt-4 bg-sky-500/10 dark:bg-primary/20 text-sky-500 font-bold py-2 px-4 rounded-lg text-sm">
        {buttonText}
      </button>
    </div>
  </div>
);

export default function PracticePage() {
  return (
    <div className="flex flex-col  font-display bg-background-light dark:bg-background-dark">
      <Header />
      <main className="flex-grow overflow-y-auto px-4 space-y-6 pb-6">
        <Link to={"/preCbt"}>
          <CBTModeCard />
        </Link>
        <Link to="/Pre-Quick-Test">
          <ModeCard
            icon="timer"
            title="Quick Test"
            description="Quickly assess your knowledge"
            buttonText="Start Quick Test"
          />
        </Link>
        <ModeCard
          icon="tune"
          title="Custom Mode"
          description="Tailor your test experience"
          buttonText="Customize Test"
        />
      </main>
    </div>
  );
}
