import { ArrowBack } from "../../assets/icons/arrowBack";
// import ArrowRightIcon from "../../assets/icons/arrow";

import { ArrowDown } from "../../assets/icons/arrowDown";
import { Link } from "react-router-dom";
import { CloseIcon } from "../../assets/icons/close";
import { AddIcon } from "../../assets/icons/add";
import { useState } from "react";
export function CustomPage() {
  const [QuestionAmount, setQuestionAmount] = useState("25");
  const [time, setTIme] = useState("20");
  return (
    <div className="bg-background-light  font-display">
      <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        {/* <!-- Top App Bar --> */}
        <div className="sticky top-0 z-10 flex items-center bg-background-light/80  p-4 pb-3 backdrop-blur-sm justify-between">
          <Link to={"/practice"}>
            <div className="text-[ #0d121b]  flex size-10 shrink-0 items-center justify-center">
              <span className="material-symbols-outlined text-2xl">
                <ArrowBack />{" "}
              </span>
            </div>
          </Link>
          <h2 className="text-[#0d121b]  text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
            Custom Test
          </h2>
          <div className="flex size-10 shrink-0 items-center justify-center"></div>
        </div>
        <main className="flex-1 px-4 py-2 space-y-6 pb-28">
          {/* <!-- Section 1: Content Selection --> */}
          <div className="space-y-4">
            <div className="bg-white  rounded-xl shadow-sm overflow-hidden">
              {/* <!-- Courses ListItem --> */}
              <div className="flex items-center gap-4 px-4 min-h-[72px] py-2 justify-between border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="text-sky-500 flex items-center justify-center rounded-lg bg-sky-500/20 shrink-0 size-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="30px"
                      viewBox="0 -960 960 960"
                      width="30px"
                      fill="#0a8ab1ff"
                    >
                      <path d="M300-80q-58 0-99-41t-41-99v-520q0-58 41-99t99-41h500v600q-25 0-42.5 17.5T740-220q0 25 17.5 42.5T800-160v80H300Zm-60-267q14-7 29-10t31-3h20v-440h-20q-25 0-42.5 17.5T240-740v393Zm160-13h320v-440H400v440Zm-160 13v-453 453Zm60 187h373q-6-14-9.5-28.5T660-220q0-16 3-31t10-29H300q-26 0-43 17.5T240-220q0 26 17 43t43 17Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[#0d121b]  text-base font-medium leading-normal line-clamp-1">
                      Courses
                    </p>
                    <p className="text-gray-500  text-sm font-normal leading-normal line-clamp-2">
                      Select courses for your test
                    </p>
                  </div>
                </div>
                <div className="shrink-0 flex items-center gap-2">
                  <button className="text-sky-500 text-base font-medium leading-normal">
                    3 selected
                  </button>
                  <ArrowDown />
                </div>
              </div>
              {/* <!-- Topics --> */}
              <div className="p-4">
                <h3 className="text-[#0d121b]  tracking-light text-base font-bold leading-tight text-left pb-2">
                  Topics
                </h3>
                <div className="flex gap-2 p-1 flex-wrap">
                  <div className="flex h-8 shrink-0 items-center justify-center gap-x-1 rounded-lg bg-sky-500/20 pl-2 pr-3">
                    <span className="material-symbols-outlined text-sky-500 text-lg">
                      <CloseIcon />
                    </span>
                    <p className="text-sky-500 text-sm font-medium leading-normal">
                      Algebra
                    </p>
                  </div>
                  <div className="flex h-8 shrink-0 items-center justify-center gap-x-1 rounded-lg bg-sky-500/20 pl-2 pr-3">
                    <span className="material-symbols-outlined text-sky-500 text-lg">
                      <CloseIcon />
                    </span>
                    <p className="text-sky-500 text-sm font-medium leading-normal">
                      Calculus
                    </p>
                  </div>
                  <div className="flex h-8 shrink-0 items-center justify-center gap-x-1 rounded-lg bg-sky-500/20 pl-2 pr-3">
                    <span className="material-symbols-outlined text-sky-500 text-lg">
                      <CloseIcon />
                    </span>
                    <p className="text-sky-500 text-sm font-medium leading-normal">
                      Trigonometry
                    </p>
                  </div>
                </div>
                <div className="flex justify-start pt-2">
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-3 bg-transparent text-sky-500 gap-1 text-sm font-bold leading-normal tracking-[0.015em]">
                    <span className="material-symbols-outlined text-xl">
                      <AddIcon />
                    </span>
                    <span className="truncate">Add Topics</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Section 2: Test Parameters --> */}
          <div className="space-y-4">
            <div className="bg-white  rounded-xl shadow-sm p-4 space-y-5">
              {/* <!-- Number of Questions Slider --> */}
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <label className="text-base font-bold text-[#0d121b] ">
                    Number of Questions
                  </label>
                  <span className="text-base font-medium text-sky-500">
                    {QuestionAmount}
                  </span>
                </div>
                <input
                  className="w-full h-2 bg-gray-200  rounded-lg appearance-none cursor-pointer accent-sky-500"
                  id="questions"
                  max="50"
                  min="5"
                  value={QuestionAmount}
                  type="range"
                  onChange={(e) => setQuestionAmount(e.target.value)}
                  //   value="25"
                />
              </div>
              {/* <!-- Time Limit Slider --> */}
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <label className="text-base font-bold text-[#0d121b] ">
                    Time Limit (minutes)
                  </label>
                  <span className="text-base font-medium text-sky-500">
                    {time}
                  </span>
                </div>
                <input
                  className="w-full h-2 bg-gray-200  rounded-lg appearance-none cursor-pointer accent-sky-500"
                  id="time"
                  max="60"
                  min="10"
                  value={time}
                  type="range"
                  onChange={(e) => setTIme(e.target.value)}
                  //   value="45"
                />
              </div>
            </div>
          </div>
          {/* <!-- Section 3: Difficulty --> */}
          <div className="space-y-2">
            <h3 className="text-[#0d121b]  tracking-light text-xl font-bold leading-tight px-1">
              Difficulty
            </h3>
            <div className="bg-white  rounded-xl shadow-sm p-4 space-y-2">
              <p className="text-gray-500  text-sm font-normal leading-normal">
                Choose the complexity of the questions.
              </p>
              <div className="grid grid-cols-3 gap-2 p-1 bg-gray-200  rounded-lg">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-9 px-3 bg-transparent text-gray-600  text-sm font-bold leading-normal tracking-[0.015em]">
                  Easy
                </button>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-9 px-3 bg-white  text-[#0d121b]  shadow-sm text-sm font-bold leading-normal tracking-[0.015em]">
                  Medium
                </button>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-9 px-3 bg-transparent text-gray-600  text-sm font-bold leading-normal tracking-[0.015em]">
                  Hard
                </button>
              </div>
            </div>
          </div>
        </main>
        {/* <!-- Sticky Footer Button --> */}
        <div className="p-4 bg-gradient-to-t from-background-light">
          <button className="w-full flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-4 bg-sky-500 text-white text-lg font-bold leading-normal tracking-[0.015em] shadow-lg shadow-sky-500/30">
            <span className="truncate">Start Test</span>
          </button>
        </div>
      </div>
    </div>
  );
}
