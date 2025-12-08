import { ProfileHeader } from "./Profile";

export default function LeaderboardPage() {
  return (
    <div className="font-display bg-background-light">
      <ProfileHeader />
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto"></div>
        <div className="flex flex-wrap justify-between items-center gap-4">
          <p className="text-[#111318]  text-4xl font-black leading-tight tracking-[-0.033em]">
            Leaderboard
          </p>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              search
            </span>
            <input
              className="pl-10 pr-4 py-2 w-64 rounded-lg border border-slate-200 bg-white text-slate-900  focus:ring-2 focus:ring-primary focus:border-primary transition"
              placeholder="Search student..."
              type="text"
            />
          </div>
        </div>

        <div className="flex pt-6 pb-3">
          <div className="flex h-10 w-full sm:w-auto items-center justify-center rounded-lg bg-slate-200/80  p-1">
            <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-4 has-[:checked]:bg-white  has-[:checked]:shadow-[0_1px_3px_rgba(0,0,0,0.1)] has-[:checked]:text-slate-900  text-slate-500  text-sm font-medium">
              <span className="truncate">This Week</span>
              <input
                checked={true}
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
      </main>
    </div>
  );
}
