export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light  group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-row">
        {/* <!-- SideNavBar --> */}

        {/* <!-- Main Content --> */}
        <main className="flex-1 flex justify-center py-10 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl">
            {/* <!-- PageHeading --> */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-2">
                <p className="text-[#111318]  text-4xl font-black leading-tight tracking-[-0.033em]">
                  About ProdigyLasu
                </p>
                <p className="text-[#616f89]  text-base font-normal leading-normal">
                  Your all-in-one academic companion.
                </p>
              </div>
            </div>
            {/* <!-- Main Content Blocks --> */}
            <div className="mt-8 p-4 space-y-10">
              {/* <!-- Image --> */}
              <div className="w-full gap-1 overflow-hidden aspect-[3/1] rounded-xl flex">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none flex-1"
                  data-alt="A modern, abstract gradient of blue and purple hues representing technology and learning."
                ></div>
              </div>
              {/* <!-- Section: Our Mission --> */}
              <div>
                <h2 className="text-[#111318]  text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                  Our Mission
                </h2>
                <p className="text-[#111318]  text-base font-normal leading-relaxed pb-3 pt-1 px-4">
                  To empower students by providing a seamless platform to
                  organize schedules, track assignments, and collaborate on
                  projects, making academic life simpler and more productive. We
                  believe that with the right tools, every student can achieve
                  their full potential.
                </p>
              </div>
              {/* <!-- Section: Core Features --> */}
              <div>
                <h2 className="text-[#111318]  text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                  Core Features
                </h2>
                <p className="text-[#111318]  text-base font-normal leading-relaxed pb-3 pt-1 px-4">
                  ProdigyLasu is designed to be your central hub for academic
                  success. Key features include an CBT Mdde tests simulating real lasu examinations, quisck test to spin up questions to pracctice in a limited amount of time, and
                  collaborative project spaces to work with classmates.
                  Everything you need, all in one place.
                </p>
              </div>
              <div>
                <h2 className="text-[#111318]  text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                  Verification
                </h2>
                <p className="text-[#111318]  text-base font-normal leading-relaxed pb-3 pt-1 px-4">
                  ProdigyLasu is designed to be your central hub for academic
                  success. Key features include an intuitive schedule manager, a
                  comprehensive assignment tracker with deadline reminders, and
                  collaborative project spaces to work with classmates.
                  Everything you need, all in one place.
                </p>
              </div>
              <div>
                <h2 className="text-[#111318]  text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                  Meet the Developer
                </h2>
                <p className="text-[#111318]  text-base font-normal leading-relaxed pb-3 pt-1 px-4">
                  Hi there!, i appreciate yoo contributing to the Prodigy
                  community, if you are reading this you are either curious
                  about the dev who broght this application to life or you have a big
                  bug to report, either way im pumped to tell you about me, i am Omotayo
                  Damilare, a 200 level lasuite myself, a computer Science
                  Major- obviously, and from my works i can confidently say that
                  i'm a software enginerr, if you are interested in the
                  technology used in this project or have any issue to complain
                  about you can dm me directly
                </p>
              </div>
              {/* <!-- Section: Legal and Support --> */}
              <div>
                <h2 className="text-[#111318]  text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                  Support &amp; Legal
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 px-4 pt-1 pb-3">
                  <a
                    className="inline-flex items-center gap-2 text-sky-500  hover:underline text-sm font-medium"
                    href="#"
                  >
                    <span>Help &amp; Support</span>
                    <span className="material-symbols-outlined text-base">
                      open_in_new
                    </span>
                  </a>
                  <a
                    className="inline-flex items-center gap-2 text-sky-500  hover:underline text-sm font-medium"
                    href="#"
                  >
                    <span>Terms of Service</span>
                    <span className="material-symbols-outlined text-base">
                      open_in_new
                    </span>
                  </a>
                  <a
                    className="inline-flex items-center gap-2 text-sky-500  hover:underline text-sm font-medium"
                    href="#"
                  >
                    <span>Privacy Policy</span>
                    <span className="material-symbols-outlined text-base">
                      open_in_new
                    </span>
                  </a>
                </div>
              </div>
              {/* <!-- Footer --> */}
              <div className="border-t border-gray-200  mt-12 pt-6 px-4 flex justify-between items-center text-xs text-gray-500 ">
                <p>Version 1.0.2</p>
                <p>© 2024 ProdigyLasu. All rights reserved.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
