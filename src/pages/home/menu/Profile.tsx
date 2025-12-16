import { useNavigate } from "react-router-dom";
import ProfileMan from "../../../assets/images/man.png";
import { ProdigyLogo } from "../Login";
import { Refresh } from "../Login";
import { useEffect, useState } from "react";
import { EditIcon } from "../../../assets/icons/editIcon";
import { Link } from "react-router-dom";

export function ProfileHeader() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200/80  px-10 py-6 bg-white ">
      <div className="flex items-center gap-4 text-slate-900 ">
        <div className="size-6 text-sky-500">
          <ProdigyLogo />{" "}
        </div>
        <h2 className="text-slate-900  text-xl font-bold leading-tight tracking-[-0.015em]">
          Prodigy
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9"></div>
      </div>
    </header>
  );
}
function SubHeading1() {
  return (
    <div className="flex flex-wrap gap-2 pb-4">
      <Link to={"/"}> Home</Link>

      <span className="text-slate-500  text-sm font-medium leading-normal">
        /
      </span>
      <span className="text-slate-800  text-sm font-medium leading-normal">
        Profile
      </span>
    </div>
  );
}

type SubProps = {
  usr: User | null;
};
function SubHeading2({ usr }: SubProps) {
  const SubNavigate = useNavigate();
  const handleEdit = () => {
    SubNavigate("/student/Profile/edit", { state: { ProfileData: usr } });
  };

  return (
    <div className="flex flex-wrap justify-between gap-4 items-center mb-8">
      <p className="text-slate-900  text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
        My Profile
      </p>
      <div className="flex gap-3">
        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-transparent text-slate-700  border border-slate-300  text-sm font-bold leading-normal tracking-[0.015em] hover:bg-slate-100  transition-colors">
          <span className="truncate">View Public Profile</span>
        </button>

        <button
          onClick={handleEdit}
          className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-sky-500 text-white text-sm font-bold leading-normal tracking-[0.015em] gap-2 hover:bg-sky-500/90 transition-colors"
        >
          <EditIcon />
          <span className="truncate">Edit Profile</span>
        </button>
      </div>
    </div>
  );
}
interface User {
  email: string;
  first_name: string;
  last_name: string;
  gender: string;
  level: string;
  faculty: string;
  department: string;
  username: string;
  phone_number: string;
}
interface ProfileAsideProps {
  user: User | null;
}
function ProfileAside({ user }: ProfileAsideProps) {
  if (!user) {
    return;
  }
  return (
    <aside className="lg:col-span-1">
      <div className="bg-white  rounded-xl shadow-sm p-6 flex flex-col items-center text-center">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-32 h-32 mb-4 ring-4 ring-sky-500/20"
          data-alt="Profile picture of student Alex Doe"
          style={{ backgroundImage: `url${ProfileMan}` }}
        >
          <img src={ProfileMan}></img>
        </div>
        <h1 className="text-slate-900  text-2xl font-bold leading-tight tracking-[-0.015em]">
          {user.first_name} {user.last_name}
        </h1>
        <p className="text-slate-500 d text-base font-normal leading-normal mt-1">
          @ {user.username}
        </p>
      </div>
    </aside>
  );
}
function ProfileSection({ user }: ProfileAsideProps) {
  if (!user) {
    return;
  }
  return (
    <section className="lg:col-span-2">
      <div className="bg-white rounded-xl shadow-sm">
        <h2 className="text-slate-900  text-xl font-bold leading-tight tracking-[-0.015em] px-6 py-4 border-b border-slate-200 ">
          Bio-Data
        </h2>
        <div className="p-6">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
            <div className="flex flex-col">
              <dt className="text-sm font-medium text-slate-500  mb-1">
                Email
              </dt>
              <dd className="text-base text-slate-800 ">{user.email}</dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-sm font-medium text-slate-500  mb-1">
                Phone.No
              </dt>
              <dd className="text-base text-slate-800 ">{user.phone_number}</dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-sm font-medium text-slate-500 d mb-1">
                Gender
              </dt>
              <dd className="text-base text-slate-800 ">{user.gender}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
function ProfileAcademics({ user }: ProfileAsideProps) {
  if (!user) {
    return;
  }
  return (
    <section className="lg:col-span-2">
      <div className="bg-white rounded-xl shadow-sm">
        <h2 className="text-slate-900  text-xl font-bold leading-tight tracking-[-0.015em] px-6 py-4 border-b border-slate-200 ">
          Academic Information
        </h2>
        <div className="p-6">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
            <div className="flex flex-col">
              <dt className="text-sm font-medium text-slate-500  mb-1">
                Faculty
              </dt>
              <dd className="text-base text-slate-800 ">{user.faculty}</dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-sm font-medium text-slate-500 d mb-1">
                Department
              </dt>
              <dd className="text-base text-slate-800 ">{user.department}</dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-sm font-medium text-slate-500 d mb-1">
                Levle
              </dt>
              <dd className="text-base text-slate-800 ">{user.level}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
export function ProfilePage() {
  const [data, setData] = useState<User | null>(null);
  async function getProfile() {
    const AccessToken = localStorage.getItem("access");
    const Response = await fetch(
      "https://prodigybackend-3d9e.onrender.com/accounts/profile/",
      {
        headers: {
          Authorization: `Bearer ${AccessToken}`,
        },
      }
    );
    if (!Response.ok) {
      Refresh();
    }
    const userdata = await Response.json();
    console.log(userdata);
    setData(userdata);
  }
  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="font-display bg-background-light">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <ProfileHeader />
          <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
            <div className="mx-auto max-w-5xl">
              <SubHeading1 />
              <SubHeading2 usr={data} />
              <div className="grid  grid-cols-1 lg:grid-cols-3 gap-8">
                <ProfileAside user={data} />
                <ProfileSection user={data} />
                <ProfileAcademics user={data} />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
