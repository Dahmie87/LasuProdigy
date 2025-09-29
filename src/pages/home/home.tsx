import HomeMain from "./content";
import { useState } from "react";
import gns from "../../assets/images/gns.jpg";

function HomeHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-10 shadow-sm">
      <div className="flex items-center p-4 ">
        <button
          className="flex items-center justify-center rounded-full h-10 w-10 bg-gray-100 text-gray-600 hover:bg-gray-200"
          onClick={() => setOpen(true)}
        >
          <svg
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#1f1f1f"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </button>

        {open && (
          <div className="fixed inset-0 z-50 flex">
            <div
              className="flex-1 bg-black/50"
              onClick={() => setOpen(false)}
            ></div>

            <div className="w-64 fixed top-0 left-0 h-full bg-white p-4 shadow-lg">
              <button onClick={() => setOpen(false)} className="mb-4">
                ✕
              </button>
              <div className="flex flex-col items-center p-4 bg-white shadow rounded-2xl">
                {/* Profile Picture */}
                <img
                  src={gns}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover"
                />

                <div className="mt-3 text-center">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Omotayo Damilare
                  </h2>
                  <p className="text-sm text-gray-500">@Dahmie</p>
                </div>

                {/* Verification Status */}
                <p className="mt-2 text-xs text-red-500">Not verified</p>
              </div>
              <ul className="space-y-2 mt-10">
                <li className="text-xl ">
                  <a href="#">Profile</a>
                </li>
                <li className="text-xl ">
                  <a href="#">Courses</a>
                </li>
                <li className="text-xl ">
                  <a href="#">CBT history</a>
                </li>
                <li className="text-xl ">
                  <a href="#">Performance</a>
                </li>
                <li className="text-xl ">
                  <a href="#">Leaderboard</a>
                </li>
                <li className="text-xl ">
                  <a href="#">Settings</a>
                </li>
                <li className="text-xl ">
                  <a href="#">About</a>
                </li>
              </ul>
            </div>
          </div>
        )}

        <h1 className="flex text-xl text-center font-bold text-gray-900">
          Home
        </h1>
      </div>
    </header>
  );
}

export default function HomePage() {
  return (
    <>
      <HomeHeader></HomeHeader>
      <HomeMain></HomeMain>
    </>
  );
}
