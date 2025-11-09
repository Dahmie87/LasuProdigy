export default function CoursesPage() {
  return (
    <div className="font-display bg-background-light ">
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-10 bg-background-light/80 ">
          <div className="flex items-center p-4">
            <button className="p-2 text-gray-800 ">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <h1 className="flex-1 text-lg font-bold text-center text-gray-900 pr-10">
              Courses
            </h1>
          </div>
        </header>
        <main className="flex-grow p-4 space-y-4">
          <div className="bg-white  rounded-xl shadow-sm overflow-hidden">
            <div className="flex items-center p-4">
              <div
                className="w-24 h-24 bg-center bg-no-repeat bg-cover rounded-lg mr-4"
                // style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBTpGhW6B7dv2eL339FrS1sXgaS5MdQiqg7vU208hVTI41HtKHxzjdBKG0q3mnn2evPEDvKf05uXGoxiO0ovAE4kZ0qslz8LtmfFqrSCcFSqbZ5BHF_uJYhD2V7OFV3XesZY2E0tySv4BWThDS6cP40z2PZ9Lf3Q7OzyXrj-gkthtdbxy8Mgd1YVAXctlUJ-cZTlYFJQtZFJSOCWkpC2bfetK24ZBudkeS68VZ5KPTcc6wLGhpW0EIpSP9f1UQRLgQmIE8Ktc8hWgdz");'
              ></div>
              <div className="flex-grow">
                <h2 className="text-lg font-bold text-gray-900 ">
                  Mathematics
                </h2>
                <p className="text-sm text-gray-600 ">
                  100 Questions | 2 Hours
                </p>
                <p className="text-xs text-red-500  mt-1">
                  No Pause | Timer Starts Immediately
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white  rounded-xl shadow-sm overflow-hidden">
            <div className="flex items-center p-4">
              <div
                className="w-24 h-24 bg-center bg-no-repeat bg-cover rounded-lg mr-4"
                // style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAPU-gZanhjY8u9Vam_58VDCNoyLCFuXocfefepiXXVe7IXbfpCAGXbxF7qJQaQa0uipcPr3meXjjtOxGXYy2DL-ghqJ6lD3jpIYQ7oC7bv6LwhvwY2iOAKh4yerfEmZD2vMDTGr4E4bsyuLKnusWPClHabGMRCbcHQmwtsp-ezdehPacRDVvGvFfKHzXvjofOnjOtWE-dYmyGzjtkhK7SRdZ3h4OP5HE2Fyc2irYpry6ogOA71jPh0WNCWMowE_GGcUk9smobCW89j");'
              ></div>
              <div className="flex-grow">
                <h2 className="text-lg font-bold text-gray-900">Physics</h2>
                <p className="text-sm text-gray-600 ">
                  80 Questions | 1 Hour 30 Minutes
                </p>
                <p className="text-xs text-red-500 mt-1">
                  No Pause | Timer Starts Immediately
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="flex items-center p-4">
              <div
                className="w-24 h-24 bg-center bg-no-repeat bg-cover rounded-lg mr-4"
                // style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFyhc1YPbtKo-WmZ_fYigIZ2HNaQ-EjcUmYZWHGurJMN0U_ZT_7oC8vf2-pfwWSOdT404uXWMUPQIZMMIAXradNHqBgAzkDRgeVZNmi7s7o0TBx5bAJOEiy_NQ1nFeaPDMBNAuzcjTzVZDyf93vk1aCkmKyNQw5QueDhqbnNEZEJEr585_W2IQju0VlNdIhMaVg3xwzR3OTsL-XFeVxvU9TaBs27m-EgYvnlUdpGTlsZrhSJCcHJAL_ENjp2O-OnCurDfhNxrShgd7");'
              ></div>
              <div className="flex-grow">
                <h2 className="text-lg font-bold text-gray-900">Chemistry</h2>
                <p className="text-sm text-gray-600 ">
                  70 Questions | 1 Hour 15 Minutes
                </p>
                <p className="text-xs text-red-500  mt-1">
                  No Pause | Timer Starts Immediately
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="flex items-center p-4">
              <div
                className="w-24 h-24 bg-center bg-no-repeat bg-cover rounded-lg mr-4"
                // style={'background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuC1qXMFvOqbc2XUz31XKcSQnH-jAoUezs5WUO0q4_4b2L4w7pAkoU0spH_5rIt48ofnu-BZ4jGPsEmw8OQ7TT23JQ7nt_BcSxfnxA5xsW0mz5IHU4M2ZmP2avrqyaxexoFJQEwiylGftx1faHABA4kvxxZ3zsBlyB-zfI0RgZDHgcZ1lv_OFcx4mRaTeLFHvAck5Qp5ul_dTaaWaT_KWX9hb0blI95Rtg_1hye5_Liv4gB_E8ptHNywgaKjO3FDd-ijvmK6iw-AGGiW");'}
              ></div>
              <div className="flex-grow">
                <h2 className="text-lg font-bold text-gray-900 ">English</h2>
                <p className="text-sm text-gray-600 ">
                  50 Questions | 45 Minutes
                </p>
                <p className="text-xs text-red-500 mt-1">
                  No Pause | Timer Starts Immediately
                </p>
              </div>
            </div>
          </div>
        </main>
        <footer className="sticky bottom-0 p-4 bg-background-light border-gray-200 dark:border-gray-700">
          <button className="w-full h-12 px-5 bg-sky-500 text-white font-bold rounded-lg hover:bg-sky-500/90 transition-colors duration-300">
            Start Test
          </button>
        </footer>
      </div>
    </div>
  );
}
