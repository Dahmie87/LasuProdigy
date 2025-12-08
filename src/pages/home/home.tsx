import HomeMain from "./content";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import gns from "../../assets/images/man.png";

interface User {
  first_name: string;
  last_name: string;
  username: string;
}

function LogOutAlert() {
  return (
    <div className="bg-blue-400 py-4 px-8 text-white z-100 text-center">
      You have successfully logged out of your account 0$12a6sd4$gs*6F4{" "}
    </div>
  );
}

function HomeHeader() {
  const [open, setOpen] = useState(false);

  const isAuthenticated = localStorage.getItem("access");
  let MENU_LINKS;
  if (isAuthenticated) {
    MENU_LINKS = [
      { id: 1, value: "Profile", url: "/student/Profile" },
      { id: 2, value: "Verification", url: "/student/verification" },
      { id: 3, value: "Courses", url: "/courses" },
      { id: 4, value: "History", url: "/courses" },
      { id: 5, value: "Leaderboard", url: "/student/leaderboard" },
      { id: 6, value: "About", url: "/About" },
    ];
  } else {
    MENU_LINKS = [
      { id: 1, value: "Login", url: "/student/login" },

      { id: 4, value: "About", url: "/About" },
    ];
  }
  const HomeNavigate = useNavigate();
  const [logAlert, setlogAlert] = useState(false);
  function logOut() {
    setlogAlert(true);

    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setTimeout(() => {
      HomeNavigate("/home");
      setlogAlert(false);
    }, 1500);
  }
  const [data, setData] = useState<User | null>(null);

  async function getProfile() {
    const AccessToken = localStorage.getItem("access");
    const Response = await fetch("http://127.0.0.1:8000/accounts/profile/", {
      headers: {
        Authorization: `Bearer ${AccessToken}`,
      },
    });

    const userdata = await Response.json();
    console.log(userdata);
    setData(userdata);
  }
  useEffect(() => {
    getProfile();
  }, []);

  return (
    <header className="bg-white sticky top-0 z-10 shadow-sm">
      <div className="flex items-center p-4 ">
        <button
          className="flex items-center justify-center rounded-full h-10 w-10 bg-gray-100 text-gray-600 hover:bg-gray-200"
          onClick={() => setOpen(true)}
        >
          <svg
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#1f1f1f"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </button>
        {logAlert && <LogOutAlert />}
        {open && (
          <div className="fixed inset-0 z-50 flex">
            <div
              className="flex-1 bg-black/50"
              onClick={() => setOpen(false)}
            ></div>

            <div className="w-64 fixed top-0 left-0 h-full bg-white p-4 shadow-lg">
              <button onClick={() => setOpen(false)} className="mb-4">
                ✕
              </button>
              {isAuthenticated && (
                <Link to={"/student/Profile"}>
                  <div className="flex flex-col items-center p-4 bg-white shadow rounded-2xl">
                    {/* Profile Picture */}
                    <img
                      src={gns}
                      alt="Profile"
                      className="w-24 h-24 rounded-full object-cover"
                    />

                    <div className="mt-3 text-center">
                      <h2 className="text-lg font-semibold text-gray-800">
                        {data?.last_name} {data?.first_name}
                      </h2>
                      <p className="text-sm text-gray-500">{data?.username}</p>
                    </div>

                    {/* Verification Status */}
                    <p className="mt-2 text-xs text-red-500">Not verified</p>
                  </div>
                </Link>
              )}{" "}
              <ul className="space-y-2 mt-10">
                {MENU_LINKS.map((eachLINK) => (
                  <li className="text-xl " key={eachLINK.id}>
                    <Link to={eachLINK.url}>{eachLINK.value}</Link>
                  </li>
                ))}
                {isAuthenticated ? (
                  <button onClick={logOut}>
                    <li className="text-l pt-6"> Log out</li>
                  </button>
                ) : (
                  ""
                )}{" "}
              </ul>
            </div>
          </div>
        )}

        <h1 className="flex text-xl text-center font-bold text-gray-900">
          Home
        </h1>
      </div>
    </header>
  );
}

export default function HomePage() {
  return (
    <>
      <HomeHeader></HomeHeader>
      <HomeMain></HomeMain>
    </>
  );
}
