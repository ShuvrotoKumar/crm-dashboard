"use client";

export function SettingsSection() {
  return (
    <div className="flex-1 space-y-4 xl:space-y-6 text-xs">
      <div className="glass-panel px-4 py-4 sm:px-6 sm:py-5">
        <h2 className="text-lg font-semibold text-white/90 mb-1">Settings</h2>
        <p className="text-xs text-white/60 mb-4">
          Manage your profile, notifications, security and billing.
        </p>
        <div className="grid gap-4 lg:grid-cols-4 text-[11px]">
          <button className="rounded-xl bg-black/40 p-3 text-left ring-1 ring-white/10 hover:bg-white/5">
            <p className="font-medium text-white/80">Profile Settings</p>
            <p className="mt-1 text-white/55">Name, title, avatar.</p>
          </button>
          <button className="rounded-xl bg-black/40 p-3 text-left ring-1 ring-white/10 hover:bg-white/5">
            <p className="font-medium text-white/80">Notification Settings</p>
            <p className="mt-1 text-white/55">Email, in-app, mobile.</p>
          </button>
          <button className="rounded-xl bg-black/40 p-3 text-left ring-1 ring-white/10 hover:bg-white/5">
            <p className="font-medium text-white/80">Security</p>
            <p className="mt-1 text-white/55">Password, 2FA, devices.</p>
          </button>
          <button className="rounded-xl bg-black/40 p-3 text-left ring-1 ring-white/10 hover:bg-white/5">
            <p className="font-medium text-white/80">Billing & Subscription</p>
            <p className="mt-1 text-white/55">Plan, invoices, payment.</p>
          </button>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="glass-panel px-4 py-4 sm:px-6 sm:py-5 space-y-4">
          <div>
            <p className="text-sm font-medium text-white/85 mb-2">Profile</p>
            <div className="grid gap-3 sm:grid-cols-2 text-[11px]">
              <input className="h-8 rounded-lg bg-black/60 px-2 text-white/80 border border-white/10" placeholder="Full name" />
              <input className="h-8 rounded-lg bg-black/60 px-2 text-white/80 border border-white/10" placeholder="Job title" />
              <input className="h-8 rounded-lg bg-black/60 px-2 text-white/80 border border-white/10 sm:col-span-2" placeholder="Work email" />
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-white/85 mb-2">Notification Settings</p>
            <div className="space-y-2 text-[11px] text-white/70">
              <label className="flex items-center justify-between rounded-lg bg-black/40 px-3 py-2">
                <span>Email summaries</span>
                <input type="checkbox" defaultChecked className="h-3 w-3" />
              </label>
              <label className="flex items-center justify-between rounded-lg bg-black/40 px-3 py-2">
                <span>Mobile push</span>
                <input type="checkbox" defaultChecked className="h-3 w-3" />
              </label>
              <label className="flex items-center justify-between rounded-lg bg-black/40 px-3 py-2">
                <span>Desktop alerts</span>
                <input type="checkbox" className="h-3 w-3" />
              </label>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="glass-panel px-4 py-4 sm:px-6 sm:py-5 text-[11px]">
            <p className="text-sm font-medium text-white/85 mb-2">Security</p>
            <div className="space-y-2 text-white/70">
              <button className="w-full rounded-lg bg-black/50 px-3 py-2 text-left hover:bg-white/5">
                Enable Two-Factor Authentication
              </button>
              <button className="w-full rounded-lg bg-black/50 px-3 py-2 text-left hover:bg-white/5">
                Change password
              </button>
            </div>
          </div>
          <div className="glass-panel px-4 py-4 sm:px-6 sm:py-5 text-[11px]">
            <p className="text-sm font-medium text-white/85 mb-2">Billing & Subscription</p>
            <p className="text-white/65 mb-2">Current plan: <span className="text-crm-gold-soft">Growth · 25 seats</span></p>
            <button className="w-full rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-2 text-xs font-semibold text-black shadow-crm-soft">
              Update payment method
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
