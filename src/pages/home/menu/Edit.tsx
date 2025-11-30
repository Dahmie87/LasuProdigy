import man from "../../../assets/images/man.png";
import { ArrowBack } from "../../../assets/icons/arrowBack";
import { ArrowDown } from "../../../assets/icons/arrowDown";
import { Link } from "react-router-dom";
export function EditProfile() {
  return (
    <div className="bg-background-light  font-display">
      <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light  group/design-root overflow-x-hidden">
        {/* <!-- Top App Bar --> */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200/10 bg-background-light/80 p-4 pb-3 backdrop-blur-sm ">
          <div className="flex size-12 shrink-0 items-center">
            <Link to={"/student/Profile"}>
              {" "}
              <ArrowBack />
            </Link>
          </div>
          <h2 className="flex-1 text-center text-lg font-bold leading-tight tracking-[-0.015em] text-gray-900 ">
            Edit Public Profile
          </h2>
          <div className="flex w-12 items-center justify-end">
            <p className="shrink-0 text-base font-bold leading-normal tracking-[0.015em] text-sky-500">
              Save
            </p>
          </div>
        </div>
        <main className="flex flex-1 flex-col px-4">
          {/* <!-- Profile Header --> */}
          <div className="flex w-full flex-col items-center gap-4 p-4 @container">
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div
                  className="aspect-square w-32 rounded-full bg-cover bg-center bg-no-repeat"
                  data-alt="Profile picture of Alex Kip"
                >
                  <img src={man} />
                </div>
              </div>
              <button className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-sky-500/20 px-4 text-sm font-bold leading-normal tracking-[0.015em] text-sky-500 transition-colors hover:bg-sky-500/30">
                <span className="truncate">Change Photo</span>
              </button>
            </div>
          </div>
          {/* <!-- Form Fields --> */}
          <div className="flex w-full max-w-lg flex-col gap-4 self-center">
            {/* <!-- Full Name TextField --> */}
            <label className="flex flex-col">
              <p className="pb-2 text-base font-medium leading-normal text-gray-700">
                Full Name
              </p>
              <input
                className="form-input h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-gray-300 bg-white p-[15px] text-base font-normal leading-normal text-gray-900 placeholder:text-gray-400 focus:border-sky-500 focus:outline-0 focus:ring-2 focus:ring-sky-500/50 "
                placeholder="Enter your full name"
              />
            </label>
            {/* <!-- Pronouns TextField --> */}
            <label className="flex flex-col">
              <p className="pb-2 text-base font-medium leading-normal text-gray-700">
                Gender
              </p>
              <div className="relative">
                <select className="form-select h-14 w-full appearance-none rounded-lg border border-gray-300 bg-white p-[15px] pr-10 text-base font-normal leading-normal text-gray-900 focus:border-sky-500 focus:outline-0 focus:ring-2 focus:ring-sky-500/50">
                  <option selected={true}>Male</option>
                  <option>Female</option>
                </select>
                <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <ArrowDown />
                </span>
              </div>
            </label>
            <label className="flex flex-col">
              <p className="pb-2 text-base font-medium leading-normal text-gray-700">
                Faculty
              </p>
              <div className="relative">
                <select className="form-select h-14 w-full appearance-none rounded-lg border border-gray-300 bg-white p-[15px] pr-10 text-base font-normal leading-normal text-gray-900 focus:border-sky-500 focus:outline-0 focus:ring-2 focus:ring-sky-500/50">
                  <option selected={true}>Faculty of Computing</option>
                  <option>Facutly of Science</option>
                  <option>Facutly of Education</option>
                  <option>Faculty of Arts</option>
                  <option>School of Transport</option>
                  <option>School of Communication</option>
                  <option>Faculty of Management Sciemces</option>
                  <option>Faculty of Social Sciemces</option>
                </select>
                <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <ArrowDown />
                </span>
              </div>
            </label>

            {/* <!-- Major TextField --> */}
            <label className="flex flex-col">
              <p className="pb-2 text-base font-medium leading-normal text-gray-700">
                Major
              </p>
              <input
                className="form-input h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-gray-300 bg-white p-[15px] text-base font-normal leading-normal text-gray-900 placeholder:text-gray-400 focus:border-sky-500 focus:outline-0 focus:ring-2 focus:ring-sky-500/50"
                placeholder="e.g., Computer Science"
              />
            </label>
            {/* <!-- Graduation Year Field --> */}
            <label className="flex flex-col">
              <p className="pb-2 text-base font-medium leading-normal text-gray-700">
                Year
              </p>
              <div className="relative">
                <select className="form-select h-14 w-full appearance-none rounded-lg border border-gray-300 bg-white p-[15px] pr-10 text-base font-normal leading-normal text-gray-900 focus:border-sky-500 focus:outline-0 focus:ring-2 focus:ring-sky-500/50">
                  <option selected={true}>100</option>
                  <option>200</option>
                  <option>300</option>
                  <option>400</option>
                </select>
                <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <ArrowDown />
                </span>
              </div>
            </label>
            <label className="flex flex-col">
              <p className="pb-2 text-base font-medium leading-normal text-gray-700">
                Phone No
              </p>
              <input
                className="form-input h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-gray-300 bg-white p-[15px] text-base font-normal leading-normal text-gray-900 placeholder:text-gray-400 focus:border-sky-500 focus:outline-0 focus:ring-2 focus:ring-sky-500/50 "
                placeholder="080 XXX XXXX"
              />
            </label>
            {/* <!-- Bio TextArea --> */}
            <label className="flex flex-col">
              <div className="flex items-center justify-between pb-2">
                <p className="text-base font-medium leading-normal text-gray-700">
                  Bio
                </p>
                <p className="text-sm text-gray-500">120/150</p>
              </div>
              <textarea
                className="form-textarea w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-gray-300 bg-white p-[15px] text-base font-normal leading-normal text-gray-900 placeholder:text-gray-400 focus:border-sky-500 focus:outline-0 focus:ring-2 focus:ring-sky-500/50"
                placeholder="Tell us a little about yourself"
                rows={4}
              >
                Passionate about leveraging data to solve real-world problems.
                Currently exploring machine learning and its applications in
                biotech.
              </textarea>
            </label>
            {/* <!-- Social Links Section --> */}
          </div>
          <div className="h-10"></div>
        </main>
      </div>
    </div>
  );
}
