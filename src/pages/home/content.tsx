import type { ReactNode } from "react";
import ArrowRightIcon from "../../assets/icons/arrow";
import algebra from "../../assets/images/algebra.png";
import gns from "../../assets/images/gns.jpg";
import mat from "../../assets/images/mat.png";
import phy from "../../assets/images/phy.jpg";
type MyCoursesProps = {
  name: string;
  image: string;
};
type PopularProps = {
  title: string;
  icon: ReactNode;
};

const userCourses = [
  { id: 1, courseName: "MAT 101- Algebra and Trigonometry", courseImage: mat },
  {
    id: 2,
    courseName: "PHY 101 Mechanics- Kinematics and Dynamics",
    courseImage: phy,
  },
  {
    id: 3,
    courseName: "GNS 101 Use of English, Library and ICT",
    courseImage: gns,
  },
];

function CalculateIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#1f1f1f"
    >
      <path d="M320-240h60v-80h80v-60h-80v-80h-60v80h-80v60h80v80Zm200-30h200v-60H520v60Zm0-100h200v-60H520v60Zm44-152 56-56 56 56 42-42-56-58 56-56-42-42-56 56-56-56-42 42 56 56-56 58 42 42Zm-314-70h200v-60H250v60Zm-50 472q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
    </svg>
  );
}
function LabIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#1f1f1f"
    >
      <path d="M200-120q-51 0-72.5-45.5T138-250l222-270v-240h-40q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760h-40v240l222 270q32 39 10.5 84.5T760-120H200Zm0-80h560L520-492v-268h-80v268L200-200Zm280-280Z" />
    </svg>
  );
}

const popCourses = [
  { id: 2, courseName: "Physics", icons: <CalculateIcon /> },
  { id: 1, courseName: "Calculus", icons: <LabIcon /> },
  { id: 3, courseName: "BioChemistry", icons: <CalculateIcon /> },
];

const lastTestTaken = {
  name: "Algebra Practice Test",
  dateTaken: "4 days ago",
  isCompleted: true,
};

function MyCourses({ name, image }: MyCoursesProps) {
  return (
    <div className="flex h-full w-40 flex-col gap-2 flex-shrink-0">
      <div
        className="w-full aspect-square bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <p className="text-gray-800 text-sm font-semibold">{name} </p>
    </div>
  );
}

function CoursesSection() {
  return (
    <section>
      <h2 className="text-xl font-bold text-gray-900 mb-4">My Courses</h2>
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

function RecentSection() {
  return (
    <section>
      <h2 className="text-xl font-bold text-gray-900 mb-4">Recent</h2>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-grow">
            <p className="text-xs text-gray-500">Last Attempted</p>
            <p className="text-base font-bold text-gray-900 mt-1">
              {lastTestTaken.name}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Attempted {lastTestTaken.dateTaken}
            </p>
            <button className="mt-4 flex items-center justify-center rounded-md h-9 px-4 bg-sky-500 text-white text-sm font-semibold">
              {lastTestTaken.isCompleted ? (
                <span>Review</span>
              ) : (
                <span>Continue</span>
              )}
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

function PopularSection() {
  function PopularCourses({ title, icon }: PopularProps) {
    return (
      <div className="flex items-center gap-4 bg-white p-3 rounded-lg shadow-sm">
        <div className="text-[var(--primary-color)] flex items-center justify-center rounded-lg bg-blue-100 shrink-0 size-12">
          {icon}
        </div>
        <div className="flex-grow">
          <p className="text-gray-800 font-semibold">{title}</p>
          <p className="text-gray-500 text-sm">1200+ practices</p>
        </div>
        <ArrowRightIcon></ArrowRightIcon>
      </div>
    );
  }

  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900">Popular</h2>
        <a className="text-sm font-semibold text-sky-500" href="#">
          See All
        </a>
      </div>
      <div className="space-y-3">
        {popCourses.map((popCourse) => (
          <PopularCourses
            key={popCourse.id}
            title={popCourse.courseName}
            icon={popCourse.icons}
          ></PopularCourses>
        ))}
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
  return (
    <section>
      <h2 className="text-xl font-bold text-gray-900 mb-4">Study Progress</h2>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-600">
              Overall Accuracy
            </p>
            <p className="text-3xl font-bold text-gray-900 mt-1">85%</p>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium text-green-600">
            <span className="material-symbols-outlined">trending_up</span>
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
              stroke-linecap="round"
              stroke-width="3"
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
                  stop-color="var(--primary-color)"
                  stop-opacity="0.2"
                ></stop>
                <stop
                  offset="1"
                  stop-color="var(--primary-color)"
                  stop-opacity="0"
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
    </section>
  );
}
function FeedSection() {
  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900">Feed</h2>
        <a
          className="text-sm font-semibold text-[var(--primary-color)]"
          href="#"
        >
          View Full Feed
        </a>
      </div>
      <div className="space-y-4">
        <div className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm">
          <img
            alt="Ethan Carter profile picture"
            className="size-10 rounded-full object-cover"
            // src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu72hwb4PxaZonOvZqPCGq30wh9DrPiVdircLvgRF1izk6I_WA4M1_n5R-4sj7brhBH4RG-gNEGb8BcloR87adzDsiXTkwMnCKp4q0WdckTSx-vB8WJkL-pwFDaVY7VUQHxy9sYV3EgLRd-zur9iTnmYFEcBYhfQy_yfjyXgHuzjz_YuQeuBe-J0CbO6h9drHBaJomDOmlyEYYuJUh_Nd41NNEmDeqARnubGU2ZNG3czg3aqZFeIMlsBZmEe6n75H6fEJcw2vUBjzR"
          />
          <div>
            <p className="text-sm font-semibold text-gray-800">Israel | SLT</p>
            <p className="text-xs text-gray-500">2h ago</p>
            <p className="text-sm text-gray-700 mt-2">
              Just finished the calculus practice test! That was a real brain
              teaser. How did everyone else do?
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm">
          <img
            alt="Sophia Lee profile picture"
            className="size-10 rounded-full object-cover"
            // src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0ykYsCO4cnHJrRKh-loDvrvG8ev6AmCx4uuNyKGz9QmA7S8zrmXCbHvD0s2VcbBPpHJd4Xels_WbsBwqTI3wLftwV9N_QtwtY7TjnHoPZiCObrlfrhnoUeF8Ge8AguoX6kPqJVHAk95JvHajVjjn_mLUTBi6skTAC3KPu8xTzCT3IFdJN1i2RSjuBthmI9R72-xljmjB0Ggft07tNdnBXj9crItNbIQg1ToTgS_drkJEzL7az0rxYxn0hp_uCyjDPmQiDHz-7htcR"
          />
          <div>
            <p className="text-sm font-semibold text-gray-800">
              Segun | Computer Science
            </p>
            <p className="text-xs text-gray-500">4h ago</p>
            <p className="text-sm text-gray-700 mt-2">
              Excited to start the new physics course today. Any tips from those
              who've already taken it? #science #learning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default function HomeMain() {
  return (
    <main className="p-4 space-y-8">
      <CoursesSection />
      <RecentSection />
      <PopularSection />
      <DailySection />
      <ProgressSection />
      <FeedSection />
    </main>
  );
}
