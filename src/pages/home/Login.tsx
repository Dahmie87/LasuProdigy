import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VisibilityOn } from "../../components/visibility";
export function ProdigyLogo() {
  return (
    <svg
      className="h-8 w-8 text-sky-500"
      fill="none"
      stroke="#2494fcff"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}

function LoginHeader() {
  return (
    <header className="flex items-center justify-start p-6 md:p-8">
      <div className="flex items-center gap-2">
        <ProdigyLogo />
        <h1 className="text-xl font-bold text-slate-800 ">Prodigy</h1>
      </div>
    </header>
  );
}
export async function Refresh() {
  const RefreshToken = localStorage.getItem("refreah");
  if (!RefreshToken) {
    return null;
  }
  const Response = await fetch(
    "http://127.0.0.1:8000/accounts/token/refresh/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: RefreshToken }),
    }
  );
  if (!Response.ok) {
    return null;
  }
  const data = await Response.json();
  localStorage.setItem("access", data.access);
  return data.access;
}
export function LoginPage() {
  // const [errors, setErrors] = useState();

  const LoginNavigate = useNavigate();
  async function login() {
    const response = await fetch("http://127.0.0.1:8000/accounts/token/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: email, password: passkey }),
    });
    const data = await response.json();
    console.log("data from backend", data);
    if (response.ok) {
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);
      console.log("login succesfull");
      LoginNavigate("/home");
    } else {
      // setErrors(response);
      console.log(response);
    }
  }

  const [email, setEmail] = useState("");
  const [passkey, setPasskey] = useState("");
  console.log(email);
  return (
    <div className="font-display">
      <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light  overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <LoginHeader />
          <main className="flex flex-1 items-center justify-center p-4 lg:p-8">
            <div className="w-full max-w-6xl overflow-hidden rounded-xl bg-white ">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="hidden lg:block w-full h-full">
                  <div
                    className="w-full h-full bg-center bg-no-repeat bg-cover aspect-auto"
                    data-alt="Abstract illustration of students collaborating and learning with digital tools."
                    // style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAAN-L7oeWeTNANoR3Vnpn9kiWSL5N90di2_QRm89bG__q0lc6SRlLlKY01dtEyFCiu3Jew2sZGvqQWNEVDFfPkrU7kLiafXVNEDWs5iKjXKTHhvrmnEmpY_KywZfQ6WOXiLrCdEZ912ygETEBVXrEWqGDPAAvWwM9QJPGkIJd3Lqz8VuDZB8emyDuWeJXwk3G1lYR4T4fg_Q07mP4Q7Qs3gMx3pvSjJ6UqI3pOhqjPSy6d2rX-20XWd-zJbaRgahtlgtnjBOSuK6R2");'
                  ></div>
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-12 md:p-16">
                  <div className="flex flex-col gap-2 mb-8">
                    <h2 className="text-[#111318] l font-black leading-tight tracking-[-0.033em]">
                      Welcome Back!
                    </h2>
                    <p className="text-[#616f89]  text-base font-normal leading-normal">
                      Log in to continue your learning journey.
                    </p>
                  </div>
                  {/* {errors && (
                    <div className="text-center text-red-400 font-bold w-full py-3 border-2 border-red-300 bg-red-100">
                      {errors[0]}
                    </div>
                  )} */}
                  <div className="flex flex-col gap-6">
                    <label className="flex flex-col w-full">
                      <p className="text-[#111318]  text-base font-medium leading-normal pb-2">
                        Username
                      </p>
                      <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111318]  focus:outline-0 focus:ring-2 focus:ring-sky-500/50 border border-[#dbdfe6] bg-white  focus:border-sky-500 h-14 placeholder:text-[#616f89]  p-[15px] text-base font-normal leading-normal"
                        placeholder="Enter your email or username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </label>
                    <div className="flex flex-col w-full">
                      <div className="flex justify-between items-baseline pb-2">
                        <p className="text-[#111318]  text-base font-medium leading-normal">
                          Password
                        </p>
                        <a
                          className="text-sky-500 hover:underline text-sm font-medium leading-normal"
                          href="#"
                        >
                          Forgot Password?
                        </a>
                      </div>

                      <div className="flex w-full flex-1 items-stretch rounded-lg">
                        <input
                          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#000]  focus:outline-0 focus:ring-2 focus:ring-sky-500/50 border border-[#dbdfe6]  bg-white 0 focus:border-sky-500 h-14 placeholder:text-[#616f89]  p-[15px] rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
                          placeholder="Enter your password"
                          type="password"
                          value={passkey}
                          onChange={(e) => {
                            setPasskey(e.target.value);
                          }}
                        />
                        <div className="text-[#616f89]  flex border border-[#dbdfe6]  bg-white  items-center justify-center pr-[15px] rounded-r-lg border-l-0">
                          <VisibilityOn />
                        </div>
                      </div>
                    </div>
                    <button
                      className="flex items-center justify-center whitespace-nowrap h-14 px-6 rounded-lg w-full bg-sky-500 text-white text-base font-medium leading-normal transition-colors hover:bg-sky-500/90"
                      onClick={() => {
                        login();
                      }}
                    >
                      Log In
                    </button>
                  </div>
                  <div className="mt-8 text-center">
                    <p className="text-[#616f89]  text-base font-normal">
                      Don't have an account?{" "}
                      <a
                        className="font-semibold text-sky-500 hover:underline"
                        href="/student/sign-up"
                      >
                        Sign Up
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
