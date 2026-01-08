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
                  ProdigyLASU is designed to be your central hub for academic
                  success. Key features include CBT mock tests that simulate
                  real LASU examinations, quick tests that let you generate
                  practice questions within a limited time, collaborative
                  project spaces for working with classmates, and many other
                  useful academic resources. Everything you need, all in one
                  place.
                </p>
              </div>
              <div>
                <h2 className="text-[#111318]  text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                  Verification
                </h2>
                <p className="text-[#111318]  text-base font-normal leading-relaxed pb-3 pt-1 px-4">
                  The verification feature in Prodigy helps ensure a secure,
                  fair, and personalized learning experience for every user. By
                  verifying accounts, Prodigy can protect student data, prevent
                  impersonation, and maintain the integrity of CBT tests and
                  collaborative spaces. Verification also allows the platform to
                  track progress accurately, provide reliable results, and
                  ensure that all users are real students who can safely
                  interact and work together.{" "}
                </p>
              </div>
              <div>
                <h2 className="text-[#111318]  text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                  Meet the Developer
                </h2>
                <p className="text-[#111318]  text-base font-normal leading-relaxed pb-3 pt-1 px-4">
                  Hi there! I appreciate you contributing to the Prodigy
                  community. If you’re reading this, you’re either curious about
                  the developer who brought this application to life, or you’ve
                  found a bug you’d like to report. Either way, I’m excited to
                  tell you a bit about myself. My name is Omotayo Damilare, a
                  200-level Computer Science student at LASUITE. From my work so
                  far, I can confidently describe myself as a software engineer.
                  If you’re interested in the technologies used to build this
                  project, or if you have any issues or feedback to share, feel
                  free to reach out to me directly via DM.{" "}
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
