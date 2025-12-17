import { Link } from "react-router-dom";
import ShieldIcon from "../assets/icons/shield";
import { SaveIcon } from "../assets/icons/save";
import RocketIcon from "../assets/icons/rocket";
import LockIcon from "../assets/icons/lock";
import LightIcon from "../assets/icons/light";

export function NotVeirfiedPage() {
  return (
    <div className="font-display bg-background-light ">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden text-slate-800 ">
        {/* <!-- TopAppBar --> */}
        <div className="flex items-center bg-background-light  p-4 pb-2 justify-between sticky top-0 z-10">
          <Link to={"/home"}>
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full text-slate-700 ">
              <svg
                fill="#000"
                height="24"
                viewBox="0 0 256 256"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
              </svg>
            </div>
          </Link>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center text-slate-900">
            Access Restricted
          </h2>
          <div className="size-10 shrink-0"></div>
        </div>
        <div className="flex flex-col items-center justify-center p-4 pt-12">
          <div className="flex items-center justify-center size-20 rounded-full bg-sky-500/30 mb-6 text--sky-500">
            <LockIcon />
          </div>
        </div>
        {/* <!-- HeadlineText --> */}
        <h1 className="text-slate-900 tracking-tight text-[32px] font-bold leading-tight px-4 text-center pb-3">
          You need an account to continue.
        </h1>
        {/* <!-- BodyText --> */}
        <p className="text-slate-600  text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
          To take this test, you must be a registered and verified user. We do
          this to protect your progress, save your results, and ensure fairness
          for all candidates.
        </p>
        <div className="p-4 pt-8">
          {/* <!-- SectionHeader --> */}
          <h3 className="text-slate-900  text-lg font-bold leading-tight tracking-[-0.015em] pb-3">
            Why You Need to Sign Up
          </h3>
          <div className="flex flex-col space-y-2">
            {/* <!-- ListItem 1 --> */}
            <div className="flex items-center gap-4 py-2">
              <div className="text--sky-500 flex items-center justify-center rounded-xl bg-sky-500/30 shrink-0 size-12">
                <SaveIcon />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-slate-800  text-base font-medium leading-normal line-clamp-1">
                  Save Your Test Progress
                </p>
                <p className="text-slate-500 text-sm font-normal leading-normal line-clamp-2">
                  Your answers and scores are stored securely, so you can always
                  come back and review them.
                </p>
              </div>
            </div>
            {/* <!-- ListItem 2 --> */}
            <div className="flex items-center gap-4 py-2">
              <div className="text--sky-500 flex items-center justify-center rounded-xl bg-sky-500/30 shrink-0 size-12">
                <LightIcon />{" "}
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-slate-800  text-base font-medium leading-normal line-clamp-1">
                  Get Personalized Recommendations
                </p>
                <p className="text-slate-500  text-sm font-normal leading-normal line-clamp-2">
                  We generate study tips and test suggestions based on your
                  performance.
                </p>
              </div>
            </div>
            {/* <!-- ListItem 3 --> */}
            <div className="flex items-center gap-4 py-2">
              <div className="text--sky-500 flex items-center justify-center rounded-xl bg-sky-500/30 shrink-0 size-12">
                <ShieldIcon />{" "}
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-slate-800  text-base font-medium leading-normal line-clamp-1">
                  Prevent Impersonation
                </p>
                <p className="text-slate-500  text-sm font-normal leading-normal line-clamp-2">
                  Verification helps us confirm it's really you taking the test.
                </p>
              </div>
            </div>
            {/* <!-- ListItem 4 --> */}
            <div className="flex items-center gap-4 py-2">
              <div className="text--sky-500 flex items-center justify-center rounded-xl bg-sky-500/30 shrink-0 size-12">
                <RocketIcon />{" "}
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-slate-800  text-base font-medium leading-normal line-clamp-1">
                  Unlock All Features
                </p>
                <p className="text-slate-500  text-sm font-normal leading-normal line-clamp-2">
                  Unregistered users can’t access mock tests, analytics, or exam
                  history.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow"></div>
        {/* <!-- Buttons Section --> */}
        <div className="flex flex-col gap-4 p-4 sticky bottom-0 bg-background-light  pt-4 border-t border-slate-200">
          <Link to={"/student/sign-up"}>
            <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-5 py-4 text-base font-bold text-white shadow-sm transition-all hover:bg--sky-500/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline--sky-500">
              Create an Account
            </button>
          </Link>
          <Link to={"/student/login"}>
            <button className="w-full text-center text-sm font-medium text-sky-500 hover:underline">
              Already have an account? Log In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
