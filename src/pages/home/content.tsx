// import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import algebra from "../../assets/images/algebra.png";
import gns from "../../assets/images/gns.jpg";
import mat from "../../assets/images/mat.png";
import phy from "../../assets/images/phy.jpg";
// import ProgressChart from "../../components/chart";
type MyCoursesProps = {
  name: string;
  image: string;
};
// type PopularProps = {
//   title: string;
//   icon: ReactNode;
// };

const userCourses = [
  { id: 1, courseName: "MAT 101", courseImage: mat },
  {
    id: 2,
    courseName: "PHY 101",
    courseImage: phy,
  },
  {
    id: 3,
    courseName: "GNS 101",
    courseImage: gns,
  },
];

function MyCourses({ name, image }: MyCoursesProps) {
  return (
    <div className="flex h-full w-40 flex-col gap-2 flex-shrink-0">
      <div
        className="w-full aspect-square bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <p className="text-gray-800 font-bold">{name} </p>
    </div>
  );
}

function CoursesSection() {
  const token = localStorage.getItem("access");
  let IfAuthLink = "/user/not-logged-in";
  if (token) {
    IfAuthLink = "/courses";
  }
  return (
    <section>
      <div className="flex justify-between">
        <h2 className="text-xl font-bold text-gray-900 mb-4">My Courses</h2>
        <Link to={IfAuthLink}>
          {" "}
          <p className="text-sm  text-sky-500">See more courses</p>
        </Link>{" "}
      </div>
      <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden -mx-4 px-4">
        {" "}
        <div className="flex items-stretch gap-4">
          {userCourses.map((courses) => (
            <MyCourses
              key={courses.id}
              name={courses.courseName}
              image={courses.courseImage}
            ></MyCourses>
          ))}
        </div>
      </div>
    </section>
  );
}

function DailySection() {
  return (
    <section>
      <h2 className="text-xl font-bold text-gray-900 mb-4">Daily Quiz</h2>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-grow">
            <p className="text-base font-bold text-gray-900">Today's Quiz</p>
            <p className="text-sm text-gray-500 mt-1">
              5 questions based on recent activity
            </p>
            <button className="mt-4 flex items-center justify-center rounded-md h-9 px-4 bg-sky-500 text-white text-sm font-semibold">
              <span>Start Quiz</span>
            </button>
          </div>
          <div
            className="w-24 h-24 bg-cover bg-center rounded-md flex-shrink-0"
            style={{
              backgroundImage: ` url(${algebra})`,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}

function ProgressSection() {
  const token = localStorage.getItem("access");
  return (
    <section>
      <h2 className="text-xl font-bold text-gray-900 mb-4">Study Progress</h2>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        {token ? (
          <div>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Overall Accuracy
                </p>
                <p className="text-3xl font-bold text-gray-900 mt-1">85%</p>
              </div>
              <div className="flex items-center gap-1 text-sm font-medium text-green-600">
                <span>+5%</span>
              </div>
            </div>
            <div className="mt-4">
              <svg
                fill="none"
                height="150"
                viewBox="0 0 472 150"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                  stroke="#3ca4faff"
                  strokeLinecap="round"
                  strokeWidth="3"
                ></path>
                <path
                  d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V150H0V109Z"
                  fill="url(#paint0_linear_1131_5935)"
                ></path>
                <defs>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint0_linear_1131_5935"
                    x1="236"
                    x2="236"
                    y1="1"
                    y2="149"
                  >
                    <stop
                      stopColor="var(--primary-color)"
                      stopOpacity="0.2"
                    ></stop>
                    <stop
                      offset="1"
                      stopColor="var(--primary-color)"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                </defs>
              </svg>
              <div className="flex justify-around text-xs font-bold text-gray-500 -mt-4">
                <p>Mon</p>
                <p>Tue</p>
                <p>Wed</p>
                <p>Thu</p>
                <p>Fri</p>
                <p>Sat</p>
                <p>Sun</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center max-w-md mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center max-w-md mx-auto">
              <h2 className="text-2xl font-bold text-gray-900">
                Welcome to Prodigy
              </h2>

              <p className="text-gray-600 text-sm mt-2">
                Sign in to access your dashboard and track your study progress.
              </p>

              <button className="mt-5 bg-sky-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
// function FeedSection() {
//   return (
//     <section>
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-bold text-gray-900">Feed</h2>
//         <a
//           className="text-sm font-semibold text-[var(--primary-color)]"
//           href="#"
//         >
//           View Full Feed
//         </a>
//       </div>
//       <div className="space-y-4">
//         <div className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm">
//           <img
//             alt="Ethan Carter profile picture"
//             className="size-10 rounded-full object-cover"
//             // src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu72hwb4PxaZonOvZqPCGq30wh9DrPiVdircLvgRF1izk6I_WA4M1_n5R-4sj7brhBH4RG-gNEGb8BcloR87adzDsiXTkwMnCKp4q0WdckTSx-vB8WJkL-pwFDaVY7VUQHxy9sYV3EgLRd-zur9iTnmYFEcBYhfQy_yfjyXgHuzjz_YuQeuBe-J0CbO6h9drHBaJomDOmlyEYYuJUh_Nd41NNEmDeqARnubGU2ZNG3czg3aqZFeIMlsBZmEe6n75H6fEJcw2vUBjzR"
//           />
//           <div>
//             <p className="text-sm font-semibold text-gray-800">Israel | SLT</p>
//             <p className="text-xs text-gray-500">2h ago</p>
//             <p className="text-sm text-gray-700 mt-2">
//               Just finished the calculus practice test! That was a real brain
//               teaser. How did everyone else do?
//             </p>
//           </div>
//         </div>
//         <div className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm">
//           <img
//             alt="Sophia Lee profile picture"
//             className="size-10 rounded-full object-cover"
//             // src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0ykYsCO4cnHJrRKh-loDvrvG8ev6AmCx4uuNyKGz9QmA7S8zrmXCbHvD0s2VcbBPpHJd4Xels_WbsBwqTI3wLftwV9N_QtwtY7TjnHoPZiCObrlfrhnoUeF8Ge8AguoX6kPqJVHAk95JvHajVjjn_mLUTBi6skTAC3KPu8xTzCT3IFdJN1i2RSjuBthmI9R72-xljmjB0Ggft07tNdnBXj9crItNbIQg1ToTgS_drkJEzL7az0rxYxn0hp_uCyjDPmQiDHz-7htcR"
//           />
//           <div>
//             <p className="text-sm font-semibold text-gray-800">
//               Segun | Computer Science
//             </p>
//             <p className="text-xs text-gray-500">4h ago</p>
//             <p className="text-sm text-gray-700 mt-2">
//               Excited to start the new physics course today. Any tips from those
//               who've already taken it? #science #learning
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
export default function HomeMain() {
  return (
    <main className="p-4 space-y-8">
      <CoursesSection />
      {/* <RecentSection /> */}
      {/* <PopularSection /> */}
      <DailySection />
      <ProgressSection />
    </main>
  );
}
