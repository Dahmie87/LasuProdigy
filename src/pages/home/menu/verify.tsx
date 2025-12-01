import { Link } from "react-router-dom";
import { Check, CheckGray } from "../../../assets/icons/check";
function FreePriceCard() {
  const FreeFeaturesARR = [
    { id: 1, feature: "Access to CBT Mode" },
    { id: 2, feature: "Access to Quick test Mode" },
    { id: 3, feature: "Standard" },
  ];

  return (
    <div className="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-slate-200  bg-white  p-6 shadow-sm">
      <div className="flex flex-col gap-1">
        <h2 className="text-slate-900  text-base font-bold leading-tight">
          Basic
        </h2>
        <span className="text-slate-900  text-4xl font-black leading-tight tracking-[-0.033em]">
          Free
        </span>
      </div>
      <div className="flex flex-col gap-2.5">
        {FreeFeaturesARR.map((f) => (
          <div className="text-[13px] font-normal leading-normal flex gap-3 text-slate-600  items-center">
            <span className="material-symbols-outlined text-green-500">
              <Check />
            </span>
            {f.feature}
          </div>
        ))}
        <div className="text-[13px] font-normal leading-normal flex gap-3 text-slate-400  items-center line-through">
          <span className="material-symbols-outlined text-slate-400 ">
            cancel
          </span>
          Offline mode
        </div>
        <div className="text-[13px] font-normal leading-normal flex gap-3 text-slate-400  items-center line-through">
          <span className="material-symbols-outlined text-slate-400 ">
            cancel
          </span>
          Ad-free experience
        </div>
      </div>
    </div>
  );
}
function SpecialFeaturesCard() {
  const SpecialARR = [
    { id: 1, feature: "Unlimited" },
    { id: 1, feature: "Unlimited" },
    { id: 1, feature: "Unlimited" },
    { id: 1, feature: "Unlimited" },
  ];
  return (
    <div className="flex flex-1 flex-col gap-4 rounded-xl border-2 border-solid border-sky-500 bg-sky-500/5  p-6 shadow-sm relative overflow-hidden">
      <div
        className="absolute top-0 right-0 text-white  text-xs font-medium leading-normal tracking-[0.015em] bg-sky-500 px-6 py-1 text-center"
        style={{
          transform: "rotate(45deg) translate(28%, -15%)",
          transformOrigin: "center",
        }}
      >
        Special
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h2 className="text-slate-900  text-base font-bold leading-tight">
            Pro
          </h2>
          <p className="text-sky-500  text-xs font-medium leading-normal tracking-[0.015em] rounded-full bg-sky-500/10  px-3 py-[3px] text-center">
            Student Discount
          </p>
        </div>
        <p className="flex items-baseline gap-1 text-slate-900 ">
          <span className="text-slate-900  text-4xl font-black leading-tight tracking-[-0.033em]">
            N600
          </span>
          <span className="text-slate-600  text-base font-bold leading-tight">
            /month
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-2.5">
        {SpecialARR.map((f) => (
          <div className="text-[13px] font-normal leading-normal flex gap-3 text-slate-800  items-center">
            <span className="material-symbols-outlined text-sky-500">
              <CheckGray />
            </span>
            {f.feature}
          </div>
        ))}
      </div>
    </div>
  );
}

export function VerificationPage() {
  return (
    <div className="font-display bg-[#f5f7f8] ">
      <div className="relative mx-auto flex h-auto min-h-screen w-full max-w-md flex-col bg-[#f5f7f8]  group/design-root overflow-x-hidden">
        {/* <!-- TopAppBar --> */}
        <div className="flex items-center justify-end bg-[#f5f7f8]  p-4 pb-2">
          <Link to={"/home"}>
            <div className="flex size-10 shrink-0 cursor-pointer items-center justify-center text-slate-700 ">
              <span> ✕</span>
            </div>
          </Link>
        </div>
        <main className="flex-grow">
          {/* <!-- HeadlineText --> */}
          <h1 className="text-slate-900  text-[32px] font-bold leading-tight px-4 text-left pb-1 pt-4">
            Unlock Your Full Potential
          </h1>
          {/* <!-- BodyText --> */}
          <p className="text-slate-600  text-base font-normal leading-normal pb-6 pt-1 px-4">
            Get unlimited access to all features and take your learning to the
            next level.
          </p>
          {/* <!-- PricingCards --> */}
          <div className="grid grid-cols-1 gap-4 px-4 py-3 sm:grid-cols-2">
            <FreePriceCard />
            <SpecialFeaturesCard />
          </div>
          {/* <!-- SectionHeader --> */}
          <h3 className="text-slate-900  text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-8">
            How to unlock Pro
          </h3>
          {/* <!-- Activation Steps --> */}
          <div className="px-4 py-2 space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/10 text-sky-500 font-bold">
                1
              </div>
              <div className="pt-1">
                <h4 className="font-bold text-sm text-slate-800 ">
                  Verify Student Status
                </h4>
                <p className="text-sm text-slate-500  mt-0.5">
                  Confirm your student identity to access exclusive discounts.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/10 text-sky-500 font-bold">
                2
              </div>
              <div className="pt-1">
                <h4 className="font-bold text-sm text-slate-800 ">
                  Choose Your Plan
                </h4>
                <p className="text-sm text-slate-500  mt-0.5">
                  Select the monthly or annual Pro subscription that fits you
                  best.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/10 text-sky-500 font-bold">
                3
              </div>
              <div className="pt-1">
                <h4 className="font-bold text-sm text-slate-800 ">
                  Secure Payment
                </h4>
                <p className="text-sm text-slate-500  mt-0.5">
                  Complete your purchase through our secure payment gateway.
                </p>
              </div>
            </div>
          </div>
        </main>
        {/* <!-- Footer CTA --> */}
        <div className="sticky bottom-0 w-full bg-[#f5f7f8]  p-4 pt-3 border-t border-slate-200 ">
          <div className="flex items-center justify-center gap-2 pb-3">
            <span className="material-symbols-outlined text-sm text-slate-500 ">
              lock
            </span>
            <p className="text-xs text-slate-500 ">Secure SSL Payment</p>
          </div>
          <button className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-sky-500 text-white text-base font-bold leading-normal tracking-[0.015em] shadow-md hover:opacity-90">
            <span className="truncate">Upgrade &amp; Get Full Access</span>
          </button>
          <button className="w-full text-center text-sm text-sky-500  font-semibold py-3 mt-1 hover:opacity-80">
            Continue with Free Plan
          </button>
        </div>
      </div>
    </div>
  );
}
