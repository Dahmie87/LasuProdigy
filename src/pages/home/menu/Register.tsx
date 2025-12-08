import { VisibilityOn, VisibilityOff } from "../../../components/visibility";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ProfileHeader } from "./Profile";

interface RegisterInputsProps {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setFirst: React.Dispatch<React.SetStateAction<string>>;
  setLast: React.Dispatch<React.SetStateAction<string>>;
  setUserN: React.Dispatch<React.SetStateAction<string>>;
  setPass: React.Dispatch<React.SetStateAction<string>>;
}
function RegisterInputs({
  setEmail,
  setFirst,
  setLast,
  setPass,
  setUserN,
}: RegisterInputsProps) {
  const InputFields = [
    {
      id: 1,
      value: "First name",
      placeholder: "Enter first Name",
      setter: setFirst,
    },
    {
      id: 2,
      value: "Last Name",
      placeholder: "Enter last name",
      setter: setLast,
    },
    {
      id: 5,
      value: "Username",
      placeholder: "Enter  your preferred username",
      setter: setUserN,
    },
    {
      id: 3,
      value: "Email",
      placeholder: "Enter your email address",
      setter: setEmail,
    },
    {
      id: 4,
      value: "Password",
      placeholder: "Enter your password",
      setter: setPass,
    },
  ];
  const [visible, setVisible] = useState(false);
  function ToggleVisibility() {
    setVisible((prev) => !prev);
  }
  console.log(visible);
  return (
    <div>
      {InputFields.map((field) => (
        <label className="flex flex-col flex-1" key={field.id}>
          <p className="text-[#111318] text-base font-medium leading-normal pb-2">
            {field.value}
          </p>

          {field.value == "Password" ? (
            <div className="flex w-full flex-1 items-stretch rounded-lg">
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-none border-r-0 text-[#111318] focus:outline-0 focus:ring-2 focus:ring-sky-500/50 focus:z-10 border border-[#dbdfe6] bg-white h-14 placeholder:text-[#616f89] p-[15px] pr-2 text-base font-normal leading-normal rounded-lg"
                placeholder="Enter your password"
                type={visible ? "text" : "password"}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  field.setter(e.target.value)
                }
              />
              <button
                className="text-[#616f89] flex border border-[#dbdfe6] bg-white items-center justify-center px-4 rounded-r-lg border-l-0 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:z-10"
                data-alt="Toggle password visibility"
                onClick={ToggleVisibility}
              >
                {visible ? <VisibilityOff /> : <VisibilityOn />}
              </button>
            </div>
          ) : (
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111318] focus:outline-0 focus:ring-2 focus:ring-sky-500/50 border border-[#dbdfe6] bg-white h-14 placeholder:text-[#616f89] p-[15px] text-base font-normal leading-normal"
              placeholder={field.placeholder}
              onChange={(e) => field.setter(e.target.value)}
            />
          )}
        </label>
      ))}
    </div>
  );
}

export function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string[] }>({});

  const userData = {
    username: userName,
    password1: userPassword,
    first_name: firstName,
    last_name: lastName,
    email: userEmail,
    password2: userPassword,
    department: "",
    faculty: "",
    gender: "",
    level: "",
  };
  const RegisterNavigate = useNavigate();
  async function RegisterUser() {
    try {
      const Response = await fetch("http://127.0.0.1:8000/accounts/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      const data = await Response.json();

      console.log(data);
      if (Response.ok) {
        RegisterNavigate("/home");
      } else {
        setErrors(data);
      }
    } catch {
      console.error("network error, bobo use better sim");
      setErrors({ nofieldErr: ["Network Error, bobo try use better sim"] });
    }
  }

  let buttonDisable = false;
  let confirmClass =
    "form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111318] focus:outline-0 focus:ring-2 focus:ring-sky-500/50 border border-[#dbdfe6] bg-white h-14 placeholder:text-[#616f89] p-[15px] text-base font-normal leading-normal";
  if (confirmPassword !== userPassword) {
    buttonDisable = true;
  }
  let errorMatch = false;
  console.log(confirmPassword.length);

  if (buttonDisable && confirmPassword.length > userPassword.length) {
    errorMatch = true;
    confirmClass =
      "form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111318] focus:outline-0 focus:ring-2 focus:ring-red-500/50 border border-red-500 bg-white h-14 placeholder:text-[#616f89] p-[15px] text-base font-normal leading-normal";
  }
  return (
    <div className="font-display">
      <div
        className="relative flex min-h-screen w-full flex-col bg-background-light group/design-root"
        // style={{'fontFamily: Lexend'}}
      >
        <div className="layout-container flex h-full grow flex-col">
          <ProfileHeader />{" "}
          <main className="flex flex-1 justify-center p-4 sm:p-6 md:p-8">
            <div className="flex w-full max-w-md flex-col items-center">
              <div className="flex w-full flex-col gap-3 pt-8 pb-6 text-center">
                <p className="text-[#111318] text-4xl font-black leading-tight tracking-[-0.033em]">
                  Create an Account
                </p>
                <p className="text-[#616f89] text-base font-normal leading-normal">
                  Join Prodigy now to get access to numerous student resources
                </p>
              </div>
              <div className="flex w-full flex-col gap-4 py-3">
                {errors.username && (
                  <div className="text-center text-red-400 font-bold w-full py-3 border-2 border-red-300 bg-red-100">
                    {errors.username[0]}
                  </div>
                )}
                {errors.password1 && (
                  <div className="text-center text-red-400 font-bold w-full py-3 border-2 border-red-300 bg-red-100">
                    {errors.password1[0]}
                  </div>
                )}
                <RegisterInputs
                  setFirst={setFirstName}
                  setLast={setLastName}
                  setEmail={setUserEmail}
                  setPass={setUserPassword}
                  setUserN={setUserName}
                />
                <label className="flex flex-col flex-1">
                  <p className="text-[#111318] text-base font-medium leading-normal pb-2">
                    Confirm Password
                  </p>
                  <input
                    className={confirmClass}
                    placeholder="Confirm your password"
                    type="password"
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                  {errorMatch && (
                    <p className="text-red-600 text-sm font-normal leading-normal pt-1">
                      Passwords do not match.
                    </p>
                  )}
                </label>
              </div>
              <div className="flex w-full flex-col items-stretch pt-4 pb-6">
                <button
                  disabled={buttonDisable}
                  onClick={RegisterUser}
                  className="flex items-center justify-center disabled:bg-gray-200 whitespace-nowrap h-12 px-5 rounded-lg bg-sky-500 text-white text-base font-semibold leading-normal hover:bg-sky-500/90 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
                >
                  Sign Up
                </button>
              </div>
              <div className="flex w-full items-center justify-center pt-2">
                <p className="text-[#616f89] text-base font-normal leading-normal">
                  Already have an account?{" "}
                  <Link to={"/student/login"}>
                    <span className="font-medium text-sky-500 hover:underline">
                      Log In
                    </span>
                  </Link>{" "}
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
