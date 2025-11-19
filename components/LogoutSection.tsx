"use client";

export function LogoutSection() {
  return (
    <div className="flex min-h-[320px] items-center justify-center">
      <div className="glass-panel w-full max-w-sm px-6 py-6 text-center text-xs">
        <h2 className="text-lg font-semibold text-white/90 mb-2">
          Are you sure you want to logout?
        </h2>
        <p className="mb-4 text-white/60">
          You can always sign back in to LUX CRM to pick up where you left off.
        </p>
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
          <button className="rounded-xl bg-white text-xs font-semibold text-black px-4 py-2 shadow-crm-soft">
            Logout
          </button>
          <button className="rounded-xl border border-white/20 text-xs font-semibold text-white px-4 py-2 hover:bg-white/5">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
