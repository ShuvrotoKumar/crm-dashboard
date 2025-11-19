"use client";

export function AutomationsSection() {
  return (
    <div className="flex-1 space-y-4 xl:space-y-6 text-xs">
      <div className="glass-panel px-4 py-4 sm:px-6 sm:py-5 mb-1">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h2 className="text-lg font-semibold text-white/90">Automation Builder</h2>
            <p className="mt-1 text-xs text-white/60">
              Drag triggers, actions and conditions onto the workflow canvas.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="rounded-lg border border-white/15 px-3 py-1 text-[11px] text-white/70 hover:bg-white/5">
              Test automation
            </button>
            <button className="rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 px-3 py-1 text-[11px] font-semibold text-white shadow-crm-soft">
              Save & Enable
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,2.4fr)_minmax(0,1.5fr)]">
        <div className="glass-panel px-3 py-3 sm:px-4 sm:py-4 text-[11px]">
          <p className="text-sm font-medium text-white/85 mb-2">Toolbox</p>
          <div className="space-y-2">
            <div className="rounded-lg bg-black/40 px-3 py-2 text-white/80 ring-1 ring-white/10">
              Trigger: Lead Created
            </div>
            <div className="rounded-lg bg-black/40 px-3 py-2 text-white/80 ring-1 ring-white/10">
              Trigger: Deal Won
            </div>
            <div className="rounded-lg bg-black/40 px-3 py-2 text-white/80 ring-1 ring-white/10">
              Action: Send Email
            </div>
            <div className="rounded-lg bg-black/40 px-3 py-2 text-white/80 ring-1 ring-white/10">
              Action: Add Tag
            </div>
            <div className="rounded-lg bg-black/40 px-3 py-2 text-white/80 ring-1 ring-white/10">
              Action: Assign User
            </div>
            <div className="rounded-lg bg-black/40 px-3 py-2 text-white/80 ring-1 ring-white/10">
              Condition: Deal value &gt; 50k
            </div>
          </div>
        </div>

        <div className="glass-panel px-3 py-3 sm:px-4 sm:py-4">
          <p className="text-sm font-medium text-white/85 mb-2">Workflow Canvas</p>
          <div className="h-64 rounded-2xl border border-dashed border-white/20 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.2),transparent_55%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.2),transparent_55%)] p-4 text-[11px] text-white/80">
            <div className="inline-flex flex-col gap-2">
              <div className="rounded-xl bg-black/60 px-3 py-2 ring-1 ring-sky-400/50">
                Trigger · Lead Created
              </div>
              <div className="ml-6 rounded-xl bg-black/60 px-3 py-2 ring-1 ring-emerald-400/50">
                Condition · Deal value &gt; 50k
              </div>
              <div className="ml-12 rounded-xl bg-black/60 px-3 py-2 ring-1 ring-amber-400/50">
                Action · Assign to Enterprise Pod
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel px-3 py-3 sm:px-4 sm:py-4 text-[11px]">
          <p className="text-sm font-medium text-white/85 mb-2">Properties</p>
          <div className="space-y-3 text-white/70">
            <div>
              <p className="mb-1 text-white/80">Selected node</p>
              <input className="h-8 w-full rounded-lg bg-black/60 px-2 border border-white/10" defaultValue="Lead Created" />
            </div>
            <div>
              <p className="mb-1 text-white/80">Description</p>
              <textarea className="min-h-[60px] w-full rounded-lg bg-black/60 px-2 py-1 border border-white/10" defaultValue="Enroll new inbound leads into 3-step nurture." />
            </div>
            <button className="w-full rounded-lg border border-white/20 px-3 py-2 text-white/80 hover:bg-white/5">
              Disable workflow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
