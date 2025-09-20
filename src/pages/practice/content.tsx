type ModeCardArgs ={
    icon:string, title:string, description:string, buttonText:string    
}

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
    <span className="material-symbols-outlined text-5xl mb-2">school</span>
    <h2 className="text-2xl font-bold">CBT Mode</h2>
    <p className="mt-1 mb-4 opacity-80">Simulate the real exam environment</p>
    <button className="w-full bg-white text-sky-500 font-bold py-3 px-6 rounded-lg shadow-md">
      Start CBT Test
    </button>
  </div>
);

const ModeCard = ({ icon, title, description, buttonText }:ModeCardArgs) => (
  <div className="bg-white dark:bg-background-dark/50 rounded-xl p-6 shadow-md flex items-center space-x-4">
    <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full">
      <span className="material-symbols-outlined text-primary text-3xl">
        {icon}
      </span>
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
        <CBTModeCard />
        <ModeCard
          icon="timer"
          title="Quick Test"
          description="Quickly assess your knowledge"
          buttonText="Start Quick Test"
        />
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

