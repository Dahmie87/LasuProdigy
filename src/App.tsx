import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/home/home";
import PracticePage from "./pages/practice/content";
import "./App.css";

const NAVIGATION_ARRAY = [
  {
    id: 1,
    pageName: "Home",
    url: "/",
    page: <HomePage />,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="30px"
        viewBox="0 -960 960 960"
        width="30px"
        fill="#1f1f1f"
      >
        <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
      </svg>
    ),
  },
  {
    id: 2,
    pageName: "Practice",
    url: "/practice",
    page: <PracticePage />,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="30px"
        viewBox="0 -960 960 960"
        width="30px"
        fill="#1f1f1f"
      >
        <path d="M300-80q-58 0-99-41t-41-99v-520q0-58 41-99t99-41h500v600q-25 0-42.5 17.5T740-220q0 25 17.5 42.5T800-160v80H300Zm-60-267q14-7 29-10t31-3h20v-440h-20q-25 0-42.5 17.5T240-740v393Zm160-13h320v-440H400v440Zm-160 13v-453 453Zm60 187h373q-6-14-9.5-28.5T660-220q0-16 3-31t10-29H300q-26 0-43 17.5T240-220q0 26 17 43t43 17Z" />
      </svg>
    ),
  },
];

function NavFooter() {
  return (
    <footer className="sticky bottom-0 bg-white border-t border-gray-200 pb-safe">
      <div className="flex justify-around items-center h-16">
        {NAVIGATION_ARRAY.map((eachLink) => (
          <Link
            className="flex flex-col items-center justify-center gap-1"
            to={eachLink.url}
            key={eachLink.id}
          >
            {eachLink.icon}
            <p className="text-xs font-medium">{eachLink.pageName}</p>
          </Link>
        ))}
      </div>
    </footer>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div
        className="bg-gray-50 relative flex h-auto min-h-screen w-full flex-col justify-between group/design-root"
        // style="font-family: Inter, 'Noto Sans', sans-serif"
      >
        <div className="flex-grow">
          <Routes>
            {NAVIGATION_ARRAY.map((eachRoute) => (
              <Route path={eachRoute.url} element={eachRoute.page} />
            ))}
          </Routes>
        </div>
        <NavFooter></NavFooter>
      </div>
    </BrowserRouter>
  );
}

export default App;
