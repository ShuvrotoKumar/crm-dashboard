"use client";

export function ForecastingSection() {
  return (
    <div className="flex-1 space-y-4 xl:space-y-6">
      <div className="glass-panel px-4 py-4 sm:px-6 sm:py-5 text-xs">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white/90">Forecasting</h2>
            <p className="mt-1 text-xs text-white/60">
              Adjust assumptions and compare AI forecast with actuals.
            </p>
          </div>
          <button className="rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-3 py-2 text-[11px] font-semibold text-white shadow-crm-soft">
            Export forecast
          </button>
        </div>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,2fr)]">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <p className="text-sm font-medium text-white/85 mb-3">Variables</p>
            <div className="space-y-3 text-[11px] text-white/70">
              <div>
                <div className="flex justify-between mb-1">
                  <span>Lead count</span>
                  <span className="text-white/80">1,200</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/10">
                  <div className="h-full w-3/4 rounded-full bg-sky-400" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Close rate</span>
                  <span className="text-white/80">21%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/10">
                  <div className="h-full w-1/5 rounded-full bg-emerald-400" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Avg. deal size</span>
                  <span className="text-white/80">$24k</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/10">
                  <div className="h-full w-2/5 rounded-full bg-indigo-400" />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <p className="text-sm font-medium text-white/85 mb-2">Forecast Summary</p>
            <div className="grid grid-cols-2 gap-2 text-[11px] text-white/70">
              <div className="rounded-xl bg-white/5 p-3">
                <p className="text-[11px] text-white/60">AI forecast</p>
                <p className="mt-1 text-lg font-semibold text-white/90">$6.1M</p>
              </div>
              <div className="rounded-xl bg-white/5 p-3">
                <p className="text-[11px] text-white/60">Pipeline coverage</p>
                <p className="mt-1 text-lg font-semibold text-emerald-300">3.4x</p>
              </div>
              <div className="rounded-xl bg-white/5 p-3">
                <p className="text-[11px] text-white/60">Risk-adjusted</p>
                <p className="mt-1 text-lg font-semibold text-amber-300">$4.7M</p>
              </div>
              <div className="rounded-xl bg-white/5 p-3">
                <p className="text-[11px] text-white/60">Actual to date</p>
                <p className="mt-1 text-lg font-semibold text-sky-300">$2.3M</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] text-xs">
        <div className="glass-panel px-4 py-4 sm:px-6 sm:py-5">
          <p className="text-sm font-medium text-white/85 mb-2">Trend Projection</p>
          <div className="h-40 rounded-xl bg-gradient-to-br from-sky-500/15 via-emerald-500/10 to-indigo-500/10 p-3 ring-1 ring-white/10">
            <div className="flex h-full items-end justify-between gap-1">
              <div className="h-6 w-full rounded-t-lg bg-sky-400/70" />
              <div className="h-10 w-full rounded-t-lg bg-emerald-400/70" />
              <div className="h-16 w-full rounded-t-lg bg-indigo-400/70" />
              <div className="h-24 w-full rounded-t-lg bg-purple-400/70" />
              <div className="h-28 w-full rounded-t-lg bg-sky-400/70" />
            </div>
          </div>
        </div>

        <div className="glass-panel px-4 py-4 sm:px-6 sm:py-5">
          <p className="text-sm font-medium text-white/85 mb-2">Team Forecast</p>
          <div className="space-y-2 text-[11px] text-white/70">
            <div className="flex items-center justify-between rounded-xl bg-black/40 px-3 py-2 ring-1 ring-white/10">
              <span>Evelyn Shaw</span>
              <span className="text-emerald-300">$1.8M</span>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-black/40 px-3 py-2 ring-1 ring-white/10">
              <span>Mason Lee</span>
              <span className="text-emerald-300">$1.4M</span>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-black/40 px-3 py-2 ring-1 ring-white/10">
              <span>Isabella Stone</span>
              <span className="text-emerald-300">$1.1M</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
