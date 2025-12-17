import { ProfileHeader } from "./Profile";
import SearchIcon from "../../../assets/icons/search";

function ProdigyUser() {
  const Users = [
    { id: 1, name: "Omotayo Danilare", no_of_tests: 11 },
    { id: 2, name: "Hassan Segun", no_of_tests: 7 },
    { id: 3, name: "Israel Akintola", no_of_tests: 6 },
    { id: 4, name: "Onatemi Emmanuel", no_of_tests: 3 },
    { id: 5, name: "Oluwatobi Abayomi", no_of_tests: 3 },
    { id: 6, name: "Ephraim", no_of_tests: 3 },
  ];
  return Users.map((usr) => (
    <div className="flex items-center p-4 border-b border-slate-100 dark:border-slate-700/50 hover:bg-slate-50  transition">
      <p className="w-16 text-center text-slate-500 dark:text-slate-400 font-bold text-lg">
        {usr.id}
      </p>
      <div className="flex items-center gap-3 flex-1">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
          data-alt="Profile picture of David Lee"
          //   style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDt-VL_EcZU1JkyOLFH4oicNCTW6Kgrn-GM85Af2LIIvXFtoejRed-IhoIt0I5d5NMbfnNHfjOJMoFpON14ZKVuW7AkoD3gXa418KiMsyuMcXJ4llES6HsNWd4eUsBhG_sJaD0m2r_31CNOu33_95I7OnAqyc7JfZ8PO9CPmC1J0m__upnv5ojW7Ztbbgy6kfrtEMi9LZ3-oHzw8TIzxNR3S59yoHE30wrmaSteQKdThKSHitsDCMHScLnZ2CnYY8azTER5HNMm2LNB");'
        ></div>
        <p className="text-slate-800  font-medium">{usr.name}</p>
      </div>
      <p className="w-24 text-right font-bold text-slate-700 ">
        {usr.no_of_tests}
      </p>
    </div>
  ));
}

export default function LeaderboardPage() {
  return (
    <div className="relative flex flex-col h-auto min-h-screen w-full  overflow-x-hidden">
      <ProfileHeader />
      <main className="flex-1 ">
        <div className="max-w-4xl mx-auto"></div>
        <div className="flex flex-wrap justify-around items-center gap-4">
          <p className="text-[#111318] text-center text-4xl font-black leading-tight tracking-[-0.033em]">
            Leaderboard
          </p>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <SearchIcon />{" "}
            </span>
            <input
              className="pl-10 pr-4 py-2 w-64 rounded-lg border border-slate-200 bg-white text-slate-900  focus:ring-2 focus:ring-primary focus:border-primary transition"
              placeholder="Search student..."
              type="text"
            />
          </div>
        </div>

        <div className="flex pt-6 pb-3 pl-10">
          <div className="flex h-10 w-full sm:w-auto items-center justify-center rounded-lg bg-slate-200/80  p-1">
            <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-4 has-[:checked]:bg-white  has-[:checked]:shadow-[0_1px_3px_rgba(0,0,0,0.1)] has-[:checked]:text-slate-900  text-slate-500  text-sm font-medium">
              <span className="truncate">This Week</span>
              <input
                className="invisible w-0"
                name="leaderboard-time"
                type="radio"
                value="This Week"
              />
            </label>
            <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-4 has-[:checked]:bg-white  has-[:checked]:shadow-[0_1px_3px_rgba(0,0,0,0.1)] has-[:checked]:text-slate-900   text-sm font-medium">
              <span className="truncate">This Month</span>
              <input
                className="invisible w-0"
                name="leaderboard-time"
                type="radio"
                value="This Month"
              />
            </label>
            <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-4 has-[:checked]:bg-white  has-[:checked]:shadow-[0_1px_3px_rgba(0,0,0,0.1)] has-[:checked]:text-slate-900   text-sm font-medium">
              <span className="truncate">All Time</span>
              <input
                className="invisible w-0"
                name="leaderboard-time"
                type="radio"
                value="All Time"
              />
            </label>
          </div>
        </div>
        <div className="bg-white pl-10 rounded-xl shadow-sm overflow-hidden">
          <div className="flex justify-between items-center p-4 text-xs font-bold text-slate-400  uppercase tracking-wider border-b border-slate-100 ">
            <p className="w-16 text-center">Rank</p>
            <p className="flex-1">Student</p>
            <p className="w-24 text-right">Tests</p>
          </div>
          <ProdigyUser />
        </div>
        <div className="flex flex-col"></div>
      </main>
    </div>
  );
}
