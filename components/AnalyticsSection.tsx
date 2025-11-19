"use client";

import { useState } from "react";

export function AnalyticsSection() {
  const [dateRange, setDateRange] = useState("Last 30 days");
  const [region, setRegion] = useState("All regions");
  const [product, setProduct] = useState("All products");

  return (
    <div className="flex-1 space-y-4 xl:space-y-6 text-xs">
      <div className="glass-panel px-4 py-4 sm:px-6 sm:py-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white/90">Analytics Overview</h2>
            <p className="mt-1 text-xs text-white/60">
              High-level snapshot of revenue, leads and conversion performance.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="h-8 rounded-lg bg-black/60 px-2 text-[11px] text-white/80 border border-white/10"
            >
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last quarter</option>
              <option>This year</option>
            </select>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="h-8 rounded-lg bg-black/60 px-2 text-[11px] text-white/80 border border-white/10"
            >
              <option>All regions</option>
              <option>North America</option>
              <option>EMEA</option>
              <option>APAC</option>
            </select>
            <select
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="h-8 rounded-lg bg-black/60 px-2 text-[11px] text-white/80 border border-white/10"
            >
              <option>All products</option>
              <option>Core CRM</option>
              <option>Messaging Suite</option>
              <option>Forecasting AI</option>
            </select>
          </div>
        </div>

        <div className="mt-4 grid gap-3 text-xs sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-black/40 p-3 ring-1 ring-white/10 hover:bg-white/5 transition">
            <p className="text-[11px] text-white/60">Total Sales</p>
            <p className="mt-1 text-lg font-semibold text-white/90">$842,000</p>
            <p className="mt-1 text-[11px] text-emerald-300">+18.9% vs prev. period</p>
          </div>
          <div className="rounded-2xl bg-black/40 p-3 ring-1 ring-white/10 hover:bg-white/5 transition">
            <p className="text-[11px] text-white/60">New Leads</p>
            <p className="mt-1 text-lg font-semibold text-white/90">1,248</p>
            <p className="mt-1 text-[11px] text-sky-300">+12.4% vs prev. period</p>
          </div>
          <div className="rounded-2xl bg-black/40 p-3 ring-1 ring-white/10 hover:bg-white/5 transition">
            <p className="text-[11px] text-white/60">Conversion Rate</p>
            <p className="mt-1 text-lg font-semibold text-white/90">21.3%</p>
            <p className="mt-1 text-[11px] text-emerald-300">+2.1 pts</p>
          </div>
          <div className="rounded-2xl bg-black/40 p-3 ring-1 ring-white/10 hover:bg-white/5 transition">
            <p className="text-[11px] text-white/60">Monthly Revenue</p>
            <p className="mt-1 text-lg font-semibold text-white/90">$192,400</p>
            <p className="mt-1 text-[11px] text-amber-300">96% of target</p>
          </div>
        </div>

        <p className="mt-3 text-[11px] text-white/50">
          Filters applied: <span className="text-white/80">{dateRange}</span> · <span className="text-white/80">{region}</span> · <span className="text-white/80">{product}</span>
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,2.1fr)_minmax(0,1.4fr)]">
        <div className="glass-panel px-4 py-4 sm:px-6 sm:py-5">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-sm font-medium text-white/85">Sales Trend</p>
            <button className="rounded-lg border border-white/15 px-3 py-1 text-[11px] text-white/70 hover:bg-white/5">
              Download CSV
            </button>
          </div>
          <div className="h-40 rounded-xl bg-gradient-to-br from-sky-500/15 via-emerald-500/10 to-indigo-500/10 p-3 ring-1 ring-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.25),transparent_55%)] opacity-60" />
            <div className="relative flex h-full items-end justify-between gap-1">
              <div className="h-6 w-full rounded-t-lg bg-sky-400/70 hover:bg-sky-300/80 transition-all" title="Week 1 · $120k" />
              <div className="h-10 w-full rounded-t-lg bg-sky-400/70 hover:bg-sky-300/80 transition-all" title="Week 2 · $160k" />
              <div className="h-14 w-full rounded-t-lg bg-sky-400/70 hover:bg-sky-300/80 transition-all" title="Week 3 · $210k" />
              <div className="h-20 w-full rounded-t-lg bg-sky-400/70 hover:bg-sky-300/80 transition-all" title="Week 4 · $260k" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="glass-panel px-4 py-4 sm:px-6 sm:py-5">
            <p className="text-sm font-medium text-white/85 mb-2">Leads Source</p>
            <div className="flex items-center gap-4">
              <div className="relative h-28 w-28 rounded-full bg-gradient-to-br from-sky-400 via-emerald-400 to-violet-400">
                <div className="absolute inset-3 rounded-full bg-slate-950" />
                <div className="absolute right-0 top-2 h-10 w-10 rounded-full bg-emerald-400/90" title="Paid · 38%" />
                <div className="absolute left-1 bottom-1 h-8 w-8 rounded-full bg-sky-400/90" title="Organic · 27%" />
                <div className="absolute top-6 left-2 h-6 w-6 rounded-full bg-violet-400/90" title="Partners · 19%" />
              </div>
              <div className="space-y-1 text-[11px] text-white/70">
                <p><span className="inline-block h-2 w-2 rounded-full bg-emerald-400 mr-1" />Paid · 38%</p>
                <p><span className="inline-block h-2 w-2 rounded-full bg-sky-400 mr-1" />Organic · 27%</p>
                <p><span className="inline-block h-2 w-2 rounded-full bg-violet-400 mr-1" />Partners · 19%</p>
                <p><span className="inline-block h-2 w-2 rounded-full bg-amber-400 mr-1" />Events · 16%</p>
              </div>
            </div>
          </div>

          <div className="glass-panel px-4 py-4 sm:px-6 sm:py-5">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-medium text-white/85">Revenue vs Target</p>
              <button className="rounded-lg border border-white/15 px-3 py-1 text-[11px] text-white/70 hover:bg-white/5">
                Download PDF
              </button>
            </div>
            <div className="space-y-2 text-[11px] text-white/70">
              <div>
                <p className="mb-1 flex justify-between"><span>Current month</span><span>$192k / $200k</span></p>
                <div className="h-3 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full w-[96%] rounded-full bg-emerald-400/90" />
                </div>
              </div>
              <div>
                <p className="mb-1 flex justify-between"><span>Quarter</span><span>$540k / $600k</span></p>
                <div className="h-3 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full w-[90%] rounded-full bg-sky-400/90" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
