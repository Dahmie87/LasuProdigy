export function LeaderboardPage(){
    return(<div className="font-display bg-background-light dark:bg-background-dark">
<div className="relative flex h-auto min-h-screen w-full flex-row group/design-root overflow-x-hidden">
<!-- SideNavBar -->
<div className="flex h-full min-h-screen flex-col justify-between border-r border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-background-dark w-64">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3 px-3">
<span className="material-symbols-outlined text-primary text-3xl">school</span>
<h1 className="text-slate-900 dark:text-white text-xl font-bold">StudentApp</h1>
</div>
<div className="flex flex-col gap-2 mt-4">
<a className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg" href="#">
<span className="material-symbols-outlined">dashboard</span>
<p className="text-sm font-medium">Dashboard</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg" href="#">
<span className="material-symbols-outlined">book</span>
<p className="text-sm font-medium">Courses</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary dark:bg-primary/20" href="#">
<span className="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">leaderboard</span>
<p className="text-sm font-medium">Leaderboard</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg" href="#">
<span className="material-symbols-outlined">assignment</span>
<p className="text-sm font-medium">Assignments</p>
</a>
</div>
</div>
<div className="flex flex-col gap-2">
<div className="flex items-center gap-3 px-3 py-2">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Profile picture of Alex Johnson" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCLntgej7RxYYEz0cZFDbcQ6gQDLWb01g3ZegGAsqAX-Yb9vE_kTReQJkDm9skurZzNlJmYwZ7R0pfmPN8accc9NylFdfatZ_ysRM4Tvtae1-7oiOwYr_i8Ro8urqbjCIv5tNPWO1t2BYatnf-WsxHR049LVKZAprVpi-66Q0JbNFNnEP_FSzwGBoLZArnVznQs4iel73jJ25eifqvAkmKftM2I8fD_FLCOvwjkWq-cOJr20U7IvQXWOtnqheSzO7-H2u7SqMDdncYY");'></div>
<div className="flex flex-col">
<h1 className="text-slate-900 dark:text-white text-sm font-medium">Alex Johnson</h1>
<p className="text-slate-500 dark:text-slate-400 text-xs">Grade 10</p>
</div>
</div>
<div className="border-t border-slate-200 dark:border-slate-800 my-2"></div>
<a className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg" href="#">
<span className="material-symbols-outlined">settings</span>
<p className="text-sm font-medium">Settings</p>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg" href="#">
<span className="material-symbols-outlined">logout</span>
<p className="text-sm font-medium">Log Out</p>
</a>
</div>
</div>
<!-- Main Content -->
<main className="flex-1 p-8">
<div className="max-w-4xl mx-auto">
<!-- PageHeading -->
<div className="flex flex-wrap justify-between items-center gap-4">
<p className="text-[#111318] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Leaderboard</p>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
<input className="pl-10 pr-4 py-2 w-64 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-primary transition" placeholder="Search student..." type="text"/>
</div>
</div>
<!-- SegmentedButtons -->
<div className="flex pt-6 pb-3">
<div className="flex h-10 w-full sm:w-auto items-center justify-center rounded-lg bg-slate-200/80 dark:bg-slate-800 p-1">
<label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-4 has-[:checked]:bg-white dark:has-[:checked]:bg-slate-700 has-[:checked]:shadow-[0_1px_3px_rgba(0,0,0,0.1)] has-[:checked]:text-slate-900 dark:has-[:checked]:text-white text-slate-500 dark:text-slate-400 text-sm font-medium">
<span className="truncate">This Week</span>
<input checked="" className="invisible w-0" name="leaderboard-time" type="radio" value="This Week"/>
</label>
<label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-4 has-[:checked]:bg-white dark:has-[:checked]:bg-slate-700 has-[:checked]:shadow-[0_1px_3px_rgba(0,0,0,0.1)] has-[:checked]:text-slate-900 dark:has-[:checked]:text-white text-slate-500 dark:text-slate-400 text-sm font-medium">
<span className="truncate">This Month</span>
<input className="invisible w-0" name="leaderboard-time" type="radio" value="This Month"/>
</label>
<label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-4 has-[:checked]:bg-white dark:has-[:checked]:bg-slate-700 has-[:checked]:shadow-[0_1px_3px_rgba(0,0,0,0.1)] has-[:checked]:text-slate-900 dark:has-[:checked]:text-white text-slate-500 dark:text-slate-400 text-sm font-medium">
<span className="truncate">All Time</span>
<input className="invisible w-0" name="leaderboard-time" type="radio" value="All Time"/>
</label>
</div>
</div>
<!-- Top 3 Podium -->
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end py-8">
<!-- 2nd Place -->
<div className="relative flex flex-col items-center p-4 bg-white dark:bg-slate-800 border-2 border-[#C0C0C0] rounded-xl shadow-md order-2 md:order-1">
<div className="absolute -top-4 text-4xl text-[#C0C0C0]">
<span className="material-symbols-outlined" style="font-size: 2.5rem;">workspace_premium</span>
</div>
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24 mt-4" data-alt="Profile picture of Ben Carter" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAEtaciSUMfYNwxXD_GPqNqH7918Nzw19lRVq44KfIeb8L1sRNxgGfXpnfqPcuPrAbyWF0XR-tixQOTWui_FTnyL6Sl_soB2TWXB7uE419f5gAz0OuEStOgGOeNd4Q-gAMxjnU2u3jzhzxoY8HsKWhFlljHULp9tnRAtkVWmDNzSVL8hgHga1mo7bJS7mYh-U7t367dsr-zpftSYqEt6OFk-NNu8Oj5TfvLF7fehy2kzBRwjpN9QmADVQ433ZJGfZpmr_M0Y0IAU00z");'></div>
<p className="text-lg font-bold text-slate-800 dark:text-white mt-3">Ben Carter</p>
<p className="text-slate-500 dark:text-slate-400 text-sm">Rank 2</p>
<p className="text-2xl font-black text-[#C0C0C0] mt-1">4,850 pts</p>
</div>
<!-- 1st Place -->
<div className="relative flex flex-col items-center p-6 bg-white dark:bg-slate-800 border-2 border-[#FFD700] rounded-xl shadow-lg order-1 md:order-2">
<div className="absolute -top-5 text-5xl text-[#FFD700]">
<span className="material-symbols-outlined" style="font-size: 3rem;">emoji_events</span>
</div>
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-32 mt-4" data-alt="Profile picture of Sarah Miller" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_XQ4kX8dU5AHvaoAtrrLoEM8wkl6_g5eShGnnNwadf9xbhJgxPizuVC_NkW7yFRkNBWSax_-99BhEycl_e0JnJLlOm9hlfWe6sk6ILES7jfa9TEA1RJIT3cZpIlLU9GEAd5r8PFTM1PPoPkzuGNQqCK1E_1aTTxhgIE-jWqqARSOBXjQpCEHjX6_H41UEF27R6vbSfN2iVQhHAu_-wK-IVKJL98En3h12WbjywxP3pGhIkT7JMB5JcIUU7RiSVjCqYa796qcv620V");'></div>
<p className="text-xl font-bold text-slate-800 dark:text-white mt-4">Sarah Miller</p>
<p className="text-slate-500 dark:text-slate-400 text-sm">Rank 1</p>
<p className="text-3xl font-black text-[#FFD700] mt-1">5,230 pts</p>
</div>
<!-- 3rd Place -->
<div className="relative flex flex-col items-center p-4 bg-white dark:bg-slate-800 border-2 border-[#CD7F32] rounded-xl shadow-md order-3 md:order-3">
<div className="absolute -top-4 text-4xl text-[#CD7F32]">
<span className="material-symbols-outlined" style="font-size: 2.5rem;">workspace_premium</span>
</div>
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24 mt-4" data-alt="Profile picture of Olivia Chen" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDUiVbpM5SOOooKM01pv38S6Wmxa-BlXf-WSq1lwG0hvlEmpogJKZwHNW6NGBtFVEc8j9L46zk3QZwqTr1fqr2xc_WgJ4UxFsjP3r4dNo4wPGzfJK2ePIzK_vRIE42qJY_8YJskZXm_woaXlJsS63duuIWGLQbOM7xX7YF5FDgRsldpZ4o5K9wkj0t8A7Fa5vP7mH1s5QgA0l3JnAqXBYhA3uAYPL31ciLRW1aYMLD8TPBOAw1PTv2AlLWX3ZVKXXNTmEZrayHfL8-V");'></div>
<p className="text-lg font-bold text-slate-800 dark:text-white mt-3">Olivia Chen</p>
<p className="text-slate-500 dark:text-slate-400 text-sm">Rank 3</p>
<p className="text-2xl font-black text-[#CD7F32] mt-1">4,790 pts</p>
</div>
</div>
<!-- Main Leaderboard List -->
<div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden">
<div className="flex justify-between items-center p-4 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider border-b border-slate-100 dark:border-slate-700">
<p className="w-16 text-center">Rank</p>
<p className="flex-1">Student</p>
<p className="w-24 text-right">Score</p>
</div>
<div className="flex flex-col">
<!-- List Item -->
<div className="flex items-center p-4 border-b border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition">
<p className="w-16 text-center text-slate-500 dark:text-slate-400 font-bold text-lg">4</p>
<div className="flex items-center gap-3 flex-1">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Profile picture of David Lee" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDt-VL_EcZU1JkyOLFH4oicNCTW6Kgrn-GM85Af2LIIvXFtoejRed-IhoIt0I5d5NMbfnNHfjOJMoFpON14ZKVuW7AkoD3gXa418KiMsyuMcXJ4llES6HsNWd4eUsBhG_sJaD0m2r_31CNOu33_95I7OnAqyc7JfZ8PO9CPmC1J0m__upnv5ojW7Ztbbgy6kfrtEMi9LZ3-oHzw8TIzxNR3S59yoHE30wrmaSteQKdThKSHitsDCMHScLnZ2CnYY8azTER5HNMm2LNB");'></div>
<p className="text-slate-800 dark:text-white font-medium">David Lee</p>
</div>
<p className="w-24 text-right font-bold text-slate-700 dark:text-slate-200">4,510</p>
</div>
<!-- Current User Highlighted Item -->
<div className="flex items-center p-4 border-b border-slate-100 dark:border-slate-700/50 bg-primary/10 dark:bg-primary/20 ring-2 ring-primary/50 dark:ring-primary/70">
<p className="w-16 text-center text-primary font-bold text-lg">5</p>
<div className="flex items-center gap-3 flex-1">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Profile picture of Alex Johnson" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDEWhYtgit_8iwRPpSQfjHeCLFUcRQF_QC5rsgiXtcNUIlobLcNvs1nBjTUorXVfDbk4YYW6rYlvpK9ZQ_eexhw7b7FgjwcIzo01AfPOl5m8nDRnE6aupdt2Bib3v8SgBpExv3N1cKI5pP5ullz-hu-oNoB1WV0XMKthynkleCnFNIHttUD1hwLCU6P9A6F3SnqKgKLAkTwT5F6zmBiTX-hsRjI8wrebXV5Cr4WhT08SOKVEWRU1_MuJjWXOa7G6XTDodSrK4CwVbvZ");'></div>
<p className="text-primary font-bold">Alex Johnson (You)</p>
</div>
<p className="w-24 text-right font-bold text-primary">4,480</p>
</div>
<!-- List Item -->
<div className="flex items-center p-4 border-b border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition">
<p className="w-16 text-center text-slate-500 dark:text-slate-400 font-bold text-lg">6</p>
<div className="flex items-center gap-3 flex-1">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Profile picture of Emily Rose" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCE7DLv7oaomdeTzSRpI_p7uhrEAAaQ9ZtY67mxapaMWr8ndqxF5GIhbqGN3wlm9ziV9MvtILHhz88i9ghhF8QPsngBGa44gXXj1hsDOI-18celVt6FUGzSKr5LAwD04DB_9laeERiFy-n9AAgF4rVueDdomQP3Sc87JvDFeL-KGKAEqx-qFevkmUHLBMgtTFJzhlV3Q3Paj15kVimHF6FJ8hSmZKY0ChOImMDkIGKQj-CWS_SCu9vfgFGN6z6R-roYpEKCSJuSdSQW");'></div>
<p className="text-slate-800 dark:text-white font-medium">Emily Rose</p>
</div>
<p className="w-24 text-right font-bold text-slate-700 dark:text-slate-200">4,320</p>
</div>
<!-- List Item -->
<div className="flex items-center p-4 border-b border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition">
<p className="w-16 text-center text-slate-500 dark:text-slate-400 font-bold text-lg">7</p>
<div className="flex items-center gap-3 flex-1">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Profile picture of Michael Brown" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_Pn4oY8WyaLTW_5Kurcf9MLucmittaLE-b524HPtT0A0pIE8rZINo_FwmQS1Q3Opv-bPo3SjsEIs_wbJww8Qoq8gYlEQjLRghIMPihnjA3gG39my55LQ5Cu-EKcnY2YTQkxaT3_MXcGroueVM61CYOq84ZH-wd850t6muKrEZN1r1wjIoJWx0w55uDEdV-CyjRfdWnV3x9iBGS20JGKHc9oXwEM9gQ-b0mtB3s_7PxEKZtC96HMpBSkuxMemYAD3VocO0ZfM4jzZX");'></div>
<p className="text-slate-800 dark:text-white font-medium">Michael Brown</p>
</div>
<p className="w-24 text-right font-bold text-slate-700 dark:text-slate-200">4,150</p>
</div>
<!-- List Item -->
<div className="flex items-center p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition">
<p className="w-16 text-center text-slate-500 dark:text-slate-400 font-bold text-lg">8</p>
<div className="flex items-center gap-3 flex-1">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Profile picture of Jessica Wang" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAPiOI2Qq-i99NWDWf4npaidKEAnZglKkcbrSCRjYtrkhR76k8eW82kuPF0am0YE8VNzVOiIWVV526-3yvfXvllDu7Mql045TnAF7cg-5W01kwDNrswUFb6Ug6Okc4TTlPW4bHGDKjntOQaAHkxBPZvwG0EZn7kx7kejqdoJznYPGRBmmWOap5I5hAr7H0f5y_wAVvGQpdf_9bHo-biz8Ppqyc7KBuW-18Rv13g-9n-Ryezpyus6Cu40yghJQVtuDIUwoaXb3oY5S7h");'></div>
<p className="text-slate-800 dark:text-white font-medium">Jessica Wang</p>
</div>
<p className="w-24 text-right font-bold text-slate-700 dark:text-slate-200">4,090</p>
</div>
</div>
</div>
</div>
</main>
</div>
</div>)
}