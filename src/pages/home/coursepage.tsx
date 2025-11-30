import { ArrowBack } from "../../assets/icons/arrowBack";
import { ArrowDown } from "../../assets/icons/arrowDown";
import { Link, useLocation } from "react-router-dom";
import man from "../../assets/images/man.png";
export function CourseInfoPage() {
  const courseLOCATION = useLocation();
  const { course } = courseLOCATION.state;
  console.log(course);
  return (
    <div className="">
      <div
        className="relative flex h-auto min-h-screen w-full flex-col font-display"
        // style='font-family: Lexend, "Noto Sans", sans-serif;'
      >
        {/* <!-- Top App Bar --> */}
        <div className="sticky top-0 z-10 flex items-center  p-4 pb-2">
          <div className="flex size-12 shrink-0 items-center text-black">
            <Link to={"/courses"}>
              <ArrowBack />
            </Link>
          </div>
          <h2 className="flex-1 text-center text-lg font-bold leading-tight tracking-[-0.015em] text-black">
            CSC 101
          </h2>
          <div className="w-12"></div>{" "}
          {/*<!-- Spacer to balance the title -->*/}
        </div>
        {/* <!-- Header Card --> */}
        <div className="p-4 pt-2">
          <div className="shadow-sm flex flex-col gap-4 rounded-xl bg-white p-4">
            <div className="flex flex-col gap-1">
              <p className="text-xl font-bold leading-tight text-black">
                Introduction to Computer Science
              </p>
              <p className="text-sm font-normal leading-normal text-black/60">
                CSC101 - 100l First Semester
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img
                className="size-10 rounded-full object-cover"
                data-alt="Portrait photo of Dr. Ada Lovelace"
                src={man}
              />
              <div className="flex flex-col">
                <p className="text-sm font-medium leading-normal text-black">
                  Dr. Adam Zubair
                </p>
                <p className="text-xs font-normal text-primary">View Profile</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Segmented Buttons --> */}
        <div className="sticky top-[72px] z-10 px-4 py-3">
          <div className="flex h-10 flex-1 items-center justify-center rounded-lg bg-white p-1 shadow-sm">
            <label className="text-sky-500 flex h-full grow cursor-pointer items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-medium leading-normal has-[:checked]:bg-sky-500 has-[:checked]:text-white has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)]">
              <span className="truncate">Details</span>
              <input
                className="w-0"
                name="view-toggle"
                type="radio"
                value="Details"
              />
            </label>
            <label className="flex h-full grow cursor-pointer items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-medium leading-normal text-sky-500 has-[:checked]:bg-sky-500 has-[:checked]:text-white has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)]">
              <span className="truncate">Materials</span>
              <input
                className="invisible w-0"
                name="view-toggle"
                type="radio"
                value="Materials"
              />
            </label>
          </div>
        </div>
        {/* <!-- Details Section Content --> */}
        <div className="flex flex-col gap-4 px-4 pb-4">
          {/* <!-- Description & Outline Accordions --> */}
          <div className="flex flex-col gap-3">
            <details className="flex flex-col rounded-xl bg-white px-4 group">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-3">
                <p className="text-base font-medium leading-normal text-black">
                  Course Description
                </p>
                <div className="text-black transition-transform group-open:rotate-180">
                  <ArrowDown />
                </div>
              </summary>
              <p className="pb-3 text-sm font-normal leading-relaxed text-black/60">
                This course provides a comprehensive introduction to the
                fundamental concepts of computer science. Students will learn
                about algorithms, data structures, and the principles of
                programming. The course is designed to build a strong foundation
                for further studies in the field.
              </p>
            </details>
            <details className="flex flex-col rounded-xl bg-white px-4 group shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-3">
                <p className="text-base font-medium leading-normal text-black">
                  Course Outline
                </p>
                <div className="text-black transition-transform group-open:rotate-180">
                  <ArrowDown />
                </div>
              </summary>
              <div className="flex flex-col gap-2 pb-3 pt-1">
                <p className="text-sm font-normal leading-relaxed text-black/60">
                  Week 1: Introduction to Algorithms
                </p>
                <p className="text-sm font-normal leading-relaxed text-black/60">
                  Week 2: Data Structures &amp; Arrays
                </p>
                <p className="text-sm font-normal leading-relaxed text-black/60">
                  Week 3: Control Flow &amp; Logic
                </p>
              </div>
            </details>
          </div>
          {/* <!-- Schedule & Location Description List --> */}
          <div className="rounded-xl bg-white px-4 shadow-sm">
            <div className="grid grid-cols-[25%_1fr] items-center gap-x-6">
              <div className="col-span-2 grid grid-cols-subgrid py-4">
                <p className="text-sm font-normal leading-normal text-black/60">
                  Schedule
                </p>
                <p className="text-sm font-normal leading-normal text-black">
                  Mon, Wed, Fri 10:00 - 11:00 AM
                </p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#3b4354] py-4">
                <p className="text-sm font-normal leading-normal text-black/60">
                  Faculty
                </p>
                <p className="text-sm font-normal leading-normal text-black">
                  Science
                </p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#3b4354] py-4">
                <p className="text-sm font-normal leading-normal text-black/60">
                  Credits
                </p>
                <p className="text-sm font-normal leading-normal text-black">
                  3 Units
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- This section would be conditionally displayed when 'Materials' is selected --> */}
        {/* <!-- For this static design, it's just here to show the component style --> */}
        <div className="hidden flex-col gap-3 px-4 pb-4">
          <h3 className="text-base font-medium text-black">Lecture Notes</h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4 rounded-xl bg-white p-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-500/20 text-red-400">
                <span className="material-symbols-outlined">description</span>
              </div>
              <div className="flex-grow">
                <p className="font-medium text-black">Lecture_01.pdf</p>
                <p className="text-xs text-black/60">1.2 MB</p>
              </div>
              <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#3b4354] text-black">
                <span className="material-symbols-outlined text-xl">
                  download
                </span>
              </button>
            </div>
            <div className="flex items-center gap-4 rounded-xl bg-white p-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500/20 text-orange-400">
                <span className="material-symbols-outlined">slideshow</span>
              </div>
              <div className="flex-grow">
                <p className="font-medium text-black">Week2_Slides.pptx</p>
                <p className="text-xs text-black/60">3.5 MB</p>
              </div>
              <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#3b4354] text-black">
                <span className="material-symbols-outlined text-xl">
                  download
                </span>
              </button>
            </div>
          </div>
          <h3 className="mt-2 text-base font-medium text-black">Assignments</h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4 rounded-xl bg-white p-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
                <span className="material-symbols-outlined">assignment</span>
              </div>
              <div className="flex-grow">
                <p className="font-medium text-black">Assignment_1_Brief.pdf</p>
                <p className="text-xs text-black/60">450 KB</p>
              </div>
              <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#3b4354] text-black">
                <span className="material-symbols-outlined text-xl">
                  download
                </span>
              </button>
            </div>
          </div>
        </div>
        <Link to={"/practice"}>
          <footer className="sticky bottom-0 p-4 bg-background-light border-gray-200 dark:border-gray-700">
            <button className="w-full h-12 px-5 bg-sky-500 text-white font-bold rounded-lg hover:bg-sky-500/90 transition-colors duration-300">
              Start Test
            </button>
          </footer>
        </Link>
      </div>
    </div>
  );
}
