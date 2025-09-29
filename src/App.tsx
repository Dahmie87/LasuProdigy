import {
  BrowserRouter,
  Route,
  Routes,
  NavLink,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/home/home";
import PracticePage from "./pages/practice/content";
import "./App.css";
import PreCBTpage from "./pages/practice/preCBT";
import CBTpage from "./pages/practice/CBT";
import PreQuickTestPage from "./pages/practice/preQuickTest";

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
        fill="#1f1f1fff"
      >
        <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
      </svg>
    ),
    icon2: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="30px"
        viewBox="0 -960 960 960"
        width="30px"
        fill="#3ca4faff"
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
    icon2: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="30px"
        viewBox="0 -960 960 960"
        width="30px"
        fill="#3ca4faff"
        className="stroke-[3]"
      >
        <path d="M300-80q-58 0-99-41t-41-99v-520q0-58 41-99t99-41h500v600q-25 0-42.5 17.5T740-220q0 25 17.5 42.5T800-160v80H300Zm-60-267q14-7 29-10t31-3h20v-440h-20q-25 0-42.5 17.5T240-740v393Zm160-13h320v-440H400v440Zm-160 13v-453 453Zm60 187h373q-6-14-9.5-28.5T660-220q0-16 3-31t10-29H300q-26 0-43 17.5T240-220q0 26 17 43t43 17Z" />
      </svg>
    ),
  },
  {
    id: 3,
    pageName: "PreCbt",
    url: "/preCbt",
    page: <PreCBTpage />,
    icon: "",
    icon2: "",
  },
  {
    id: 4,
    pageName: "CBT",
    url: "/CBT-test",
    page: <CBTpage />,
    icon: "",
    icon2: "",
  },
  {
    id: 5,
    pageName: "Quick Test",
    url: "/Pre-Quick-Test",
    page: <PreQuickTestPage />,
    icon: "",
    icon2: "",
  },
];

function NavFooter() {
  return (
    <footer className="sticky bottom-0 bg-white border-t border-gray-200 pb-safe">
      <div className="flex justify-around items-center h-16">
        {NAVIGATION_ARRAY.filter((eachlink) => eachlink.id < 3).map(
          (eachLink) => (
            <NavLink
              className="flex flex-col items-center justify-center gap-1"
              to={eachLink.url}
              key={eachLink.id}
              children={({ isActive }) => (
                <>
                  {isActive ? eachLink.icon2 : eachLink.icon}
                  {isActive ? (
                    <p className="text-xs font-medium text-sky-500">
                      {eachLink.pageName}
                    </p>
                  ) : (
                    <p className="text-xs font-medium">{eachLink.pageName}</p>
                  )}{" "}
                </>
              )}
            ></NavLink>
          )
        )}
      </div>
    </footer>
  );
}

function AppLayout() {
  const LOCATION = useLocation();
  const PRECBT_URL_PATH =
    LOCATION.pathname == "/preCbt" || LOCATION.pathname == "/preCbt";

  return (
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
      {!PRECBT_URL_PATH && <NavFooter></NavFooter>}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
