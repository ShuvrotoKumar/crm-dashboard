"use client";

export function SupportSection() {
  return (
    <div className="flex-1 space-y-4 xl:space-y-6 text-xs">
      <div className="glass-panel px-4 py-4 sm:px-6 sm:py-5">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="flex-1 space-y-3">
            <div>
              <h2 className="text-lg font-semibold text-white/90 mb-1">Contact Support</h2>
              <p className="text-xs text-white/60">
                Submit a ticket or start a live chat with our support team.
              </p>
            </div>
            <div className="grid gap-3 text-[11px] sm:grid-cols-2">
              <input className="h-8 rounded-lg bg-black/60 px-2 text-white/80 border border-white/10" placeholder="Subject" />
              <select className="h-8 rounded-lg bg-black/60 px-2 text-white/80 border border-white/10">
                <option>Priority: Normal</option>
                <option>Priority: High</option>
                <option>Priority: Urgent</option>
              </select>
              <textarea className="min-h-[80px] rounded-lg bg-black/60 px-2 py-1 text-white/80 border border-white/10 sm:col-span-2" placeholder="Describe the issue" />
            </div>
            <div className="flex items-center justify-between">
              <button className="rounded-lg border border-white/20 px-3 py-2 text-[11px] text-white/75 hover:bg-white/5">
                Attach files
              </button>
              <button className="rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2 text-[11px] font-semibold text-white shadow-crm-soft">
                Submit ticket
              </button>
            </div>
          </div>

          <div className="w-full lg:w-64 space-y-3">
            <div className="rounded-2xl bg-black/40 p-3 ring-1 ring-white/10">
              <p className="text-sm font-medium text-white/85 mb-1">Live chat</p>
              <p className="text-[11px] text-white/60 mb-2">Average response &lt; 2 min.</p>
              <button className="w-full rounded-lg bg-emerald-500/80 px-3 py-2 text-[11px] font-semibold text-white shadow-crm-soft">
                Start live chat
              </button>
            </div>
            <div className="rounded-2xl bg-black/40 p-3 ring-1 ring-white/10">
              <p className="text-sm font-medium text-white/85 mb-1">FAQ</p>
              <ul className="space-y-1 text-[11px] text-white/70">
                <li>· Getting started with LUX CRM</li>
                <li>· Managing users and roles</li>
                <li>· Data import troubleshooting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-panel px-4 py-4 sm:px-6 sm:py-5 text-[11px]">
        <p className="text-sm font-medium text-white/85 mb-2">Ticket History</p>
        <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30">
          <table className="min-w-full text-left text-[11px] text-white/70">
            <thead className="bg-white/5 text-[10px] uppercase tracking-wide text-white/50">
              <tr>
                <th className="px-3 py-2">ID</th>
                <th className="px-3 py-2">Subject</th>
                <th className="px-3 py-2">Status</th>
                <th className="px-3 py-2">Last updated</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-white/5">
                <td className="px-3 py-2">#1247</td>
                <td className="px-3 py-2">Unable to sync calendar</td>
                <td className="px-3 py-2 text-emerald-300">Resolved</td>
                <td className="px-3 py-2">Today</td>
              </tr>
              <tr className="hover:bg-white/5">
                <td className="px-3 py-2">#1239</td>
                <td className="px-3 py-2">Import validation errors</td>
                <td className="px-3 py-2 text-amber-300">Waiting on user</td>
                <td className="px-3 py-2">Yesterday</td>
              </tr>
              <tr className="hover:bg-white/5">
                <td className="px-3 py-2">#1228</td>
                <td className="px-3 py-2">Permissions for reps</td>
                <td className="px-3 py-2 text-sky-300">Open</td>
                <td className="px-3 py-2">Mon</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
