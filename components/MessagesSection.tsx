"use client";

export function MessagesSection() {
  return (
    <div className="flex-1 space-y-4 xl:space-y-6">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <div className="glass-panel flex flex-col px-3 py-3 sm:px-4 sm:py-4 text-xs">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-white/90">Messages</h2>
              <p className="mt-1 text-[11px] text-white/60">All channels in one inbox.</p>
            </div>
            <select className="h-8 rounded-lg bg-black/60 px-2 text-[11px] text-white/80 border border-white/10">
              <option>All channels</option>
              <option>Email</option>
              <option>SMS</option>
              <option>WhatsApp</option>
            </select>
          </div>
          <div className="mb-2 flex gap-2">
            <input
              className="h-8 flex-1 rounded-lg bg-black/60 px-2 text-[11px] text-white/80 placeholder:text-white/40 border border-white/10"
              placeholder="Search messages"
            />
            <button className="h-8 rounded-lg border border-white/15 px-3 text-[11px] text-white/70 hover:bg-white/5">
              Unread
            </button>
          </div>
          <div className="mt-1 flex-1 space-y-1 overflow-y-auto">
            <button className="flex w-full items-center justify-between rounded-lg bg-white/5 px-3 py-2 text-left text-[11px] text-white/80 hover:bg-white/10">
              <div>
                <p className="font-medium text-white/90">Aurora Labs</p>
                <p className="text-[10px] text-white/60">"Can we bring the demo earlier?"</p>
              </div>
              <span className="text-[10px] text-white/50">2m</span>
            </button>
            <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-[11px] text-white/80 hover:bg-white/10">
              <div>
                <p className="font-medium text-white/90">Nimbus Retail</p>
                <p className="text-[10px] text-white/60">"Sharing the updated brief now."</p>
              </div>
              <span className="text-[10px] text-white/50">18m</span>
            </button>
            <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-[11px] text-white/80 hover:bg-white/10">
              <div>
                <p className="font-medium text-white/90">Silverline Corp</p>
                <p className="text-[10px] text-white/60">"Need clarification on scope."</p>
              </div>
              <span className="text-[10px] text-white/50">1h</span>
            </button>
          </div>
        </div>

        <div className="glass-panel flex h-full flex-col px-3 py-3 sm:px-4 sm:py-4 text-xs">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-white/90">Aurora Labs</p>
              <p className="text-[11px] text-white/60">Owner: Evelyn Shaw · Email</p>
            </div>
            <button className="rounded-lg border border-white/15 px-3 py-1 text-[11px] text-white/70 hover:bg-white/5">
              Mark as unread
            </button>
          </div>
          <div className="flex-1 space-y-2 overflow-y-auto rounded-lg bg-black/40 p-3">
            <div className="max-w-xs rounded-2xl bg-white/10 px-3 py-2 text-[11px] text-white/85">
              "Can we bring the demo earlier to tomorrow afternoon?"
            </div>
            <div className="flex justify-end">
              <div className="max-w-xs rounded-2xl bg-sky-500/80 px-3 py-2 text-[11px] text-white shadow-crm-soft">
                "Yes, tomorrow 3PM works. Sharing an updated invite now."
              </div>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <button className="hidden rounded-lg border border-white/15 px-2 py-1 text-[11px] text-white/60 hover:bg-white/5 sm:inline-flex">
              Templates
            </button>
            <div className="flex-1 rounded-xl bg-black/60 px-3 py-2 text-[11px] text-white/80 border border-white/10 flex items-center gap-2">
              <input
                className="flex-1 bg-transparent text-[11px] text-white/80 placeholder:text-white/40 focus:outline-none"
                placeholder="Type a reply..."
              />
              <button className="text-[14px]">😊</button>
              <button className="text-[11px] text-sky-300">Attach</button>
            </div>
            <button className="rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-3 py-2 text-[11px] font-semibold text-white shadow-crm-soft">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
