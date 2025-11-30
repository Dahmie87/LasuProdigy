import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CoursesPage() {
  type course = {
    id: number;
    code: string;
    description: string;
    outline: string;
    title: string;
  };
  const token = localStorage.getItem("access");
  const [course, setCourse] = useState<course[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/courses/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
        console.log(data);
      });
  }, []);

  const courseNavigate = useNavigate();
  function coursePagePortal(course: course) {
    courseNavigate("info", { state: course.title });
    console.log(course.title);
  }
  return (
    <div className="font-display bg-background-light ">
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-10 bg-background-light/80 ">
          <div className="flex items-center p-4">
            <Link to="/home">
              <button className="p-2 text-gray-800 ">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15 18l-6-6 6-6"></path>
                </svg>
              </button>
            </Link>
            <h1 className="flex-1 text-lg font-bold text-center text-gray-900 pr-10">
              Courses
            </h1>
          </div>
        </header>
        <main className="flex-grow p-4 space-y-4">
          {course.map((c) => (
            <div
              onClick={() => {
                coursePagePortal(c);
              }}
              className="bg-white rounded-xl shadow-sm overflow-hidden mb-4"
            >
              <div className="flex items-center p-4">
                <div
                  className="w-24 h-24 bg-center bg-no-repeat bg-cover rounded-lg mr-4"
                  // style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBTpGhW6B7dv2eL339FrS1sXgaS5MdQiqg7vU208hVTI41HtKHxzjdBKG0q3mnn2evPEDvKf05uXGoxiO0ovAE4kZ0qslz8LtmfFqrSCcFSqbZ5BHF_uJYhD2V7OFV3XesZY2E0tySv4BWThDS6cP40z2PZ9Lf3Q7OzyXrj-gkthtdbxy8Mgd1YVAXctlUJ-cZTlYFJQtZFJSOCWkpC2bfetK24ZBudkeS68VZ5KPTcc6wLGhpW0EIpSP9f1UQRLgQmIE8Ktc8hWgdz");'
                ></div>
                <div className="flex-grow">
                  <h2 className="text-lg font-bold text-gray-900 ">{c.code}</h2>
                  <p className="text-sm text-gray-600 ">{c.title} |</p>
                  <p className="text-xs text-red-500  mt-1">
                    No Pause | Timer Starts Immediately
                  </p>
                </div>
              </div>
            </div>
          ))}
        </main>
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
