// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import HomePage from './pages/home/home' 
import './App.css'



function App() {
  
  return (
    
     <div className="bg-gray-50 relative flex h-auto min-h-screen w-full flex-col justify-between group/design-root"
      // style="font-family: Inter, 'Noto Sans', sans-serif"
    >
    

      <div className="flex-grow"> 
<HomePage></HomePage>
        
      </div>
      <footer className="sticky bottom-0 bg-white border-t border-gray-200 pb-safe">
        <div className="flex justify-around items-center h-16">
          <a
            className="flex flex-col items-center justify-center gap-1 text-[var(--primary-color)]"
            href="#"
          >
            <span className="material-symbols-outlined">home</span>
            <p className="text-xs font-medium">Home</p>
          </a>
          <a
            className="flex flex-col items-center justify-center gap-1 text-gray-500 hover:text-[var(--primary-color)]"
            href="#"
          >
            <span className="material-symbols-outlined">import_contacts</span>
            <p className="text-xs font-medium">Courses</p>
          </a>
          <a
            className="flex flex-col items-center justify-center gap-1 text-gray-500 hover:text-[var(--primary-color)]"
            href="#"
          >
            <span className="material-symbols-outlined">quiz</span>
            <p className="text-xs font-medium">Daily Quiz</p>
          </a>
          <a
            className="flex flex-col items-center justify-center gap-1 text-gray-500 hover:text-[var(--primary-color)]"
            href="#"
          >
            <span className="material-symbols-outlined">leaderboard</span>
            <p className="text-xs font-medium">Progress</p>
          </a>
          <a
            className="flex flex-col items-center justify-center gap-1 text-gray-500 hover:text-[var(--primary-color)]"
            href="#"
          >
            <span className="material-symbols-outlined">group</span>
            <p className="text-xs font-medium">Feed</p>
          </a>
        </div>
      </footer>
    </div>
  

    
  )
}

export default App
