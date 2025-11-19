"use client";

import { useState } from "react";

const categories = ["All", "Follow-up", "Meeting", "Demo", "Call"];

export function CalendarSection() {
  const [view, setView] = useState<"Month" | "Week" | "Day">("Week");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const events = [
    {
      title: "Discovery call - Aurora",
      type: "Call",
      time: "09:30",
      color: "from-sky-500 to-cyan-400",
    },
    {
      title: "Product demo - Nimbus",
      type: "Demo",
      time: "11:00",
      color: "from-violet-500 to-indigo-400",
    },
    {
      title: "Quarterly check-in",
      type: "Meeting",
      time: "15:00",
      color: "from-emerald-500 to-teal-400",
    },
  ];

  const filtered = events.filter((e) => {
    const matchesSearch = search
      ? e.title.toLowerCase().includes(search.toLowerCase())
      : true;
    const matchesCategory = category === "All" ? true : e.type === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex-1 space-y-4 xl:space-y-6 text-xs">
      <div className="glass-panel px-4 py-4 sm:px-6 sm:py-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white/90">Calendar</h2>
            <p className="mt-1 text-xs text-white/60">
              Schedule follow-ups, demos and calls across your accounts.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {(["Month", "Week", "Day"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`h-8 rounded-lg px-3 text-[11px] transition ${
                  view === v
                    ? "bg-white text-black"
                    : "bg-black/60 text-white/70 border border-white/15 hover:bg-white/5"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,2.8fr)]">
        <div className="space-y-4">
          <div className="glass-panel px-4 py-4 text-[11px]">
            <p className="text-sm font-medium text-white/85 mb-2">Mini calendar</p>
            <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-white/60">
              {"SMTWTFS".split("").map((d) => (
                <div key={d} className="py-1 text-white/50">
                  {d}
                </div>
              ))}
              {Array.from({ length: 28 }).map((_, i) => (
                <button
                  key={i}
                  className={`h-7 rounded-full text-[10px] hover:bg-white/10 ${
                    i === 10 ? "bg-white text-black font-semibold" : "text-white/70"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="glass-panel px-4 py-4 text-[11px] space-y-2">
            <p className="text-sm font-medium text-white/85 mb-1">Filters</p>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by event title"
              className="h-8 w-full rounded-lg bg-black/60 px-2 text-white/80 placeholder:text-white/40 border border-white/10"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-8 w-full rounded-lg bg-black/60 px-2 text-white/80 border border-white/10"
            >
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <div className="mt-2 flex flex-col gap-2 text-[11px] text-white/70">
              <button className="w-full rounded-lg bg-emerald-500/80 px-3 py-2 text-center text-[11px] font-semibold text-white shadow-crm-soft">
                Add Event
              </button>
              <button className="w-full rounded-lg border border-white/20 px-3 py-2 hover:bg-white/5">
                Sync · Google Calendar
              </button>
              <button className="w-full rounded-lg border border-white/20 px-3 py-2 hover:bg-white/5">
                Sync · Outlook
              </button>
            </div>
          </div>
        </div>

        <div className="glass-panel px-3 py-3 sm:px-4 sm:py-4 text-[11px]">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-sm font-medium text-white/85">{view} view</p>
            <span className="text-[10px] text-white/50">Drag blocks to reschedule</span>
          </div>
          <div className="grid gap-px rounded-xl bg-white/10 p-px text-[10px] text-white/50">
            <div className="grid grid-cols-7 rounded-t-xl bg-black/60">
              {"Mon Tue Wed Thu Fri Sat Sun".split(" ").map((d) => (
                <div key={d} className="px-2 py-1 text-center">
                  {d}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-px rounded-b-xl bg-black/60 p-2 min-h-[180px]">
              <div className="space-y-2">
                {filtered.slice(0, 1).map((e) => (
                  <div
                    key={e.title}
                    className={`cursor-pointer rounded-md bg-gradient-to-r ${e.color} px-2 py-1 text-[10px] text-white shadow-crm-soft`}
                    title={`Click to view details · ${e.type} at ${e.time}`}
                  >
                    <p className="truncate">{e.title}</p>
                    <p className="text-[9px] opacity-80">{e.time}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {filtered.slice(1, 2).map((e) => (
                  <div
                    key={e.title}
                    className={`cursor-pointer rounded-md bg-gradient-to-r ${e.color} px-2 py-1 text-[10px] text-white shadow-crm-soft`}
                    title={`Click to view details · ${e.type} at ${e.time}`}
                  >
                    <p className="truncate">{e.title}</p>
                    <p className="text-[9px] opacity-80">{e.time}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {filtered.slice(2, 3).map((e) => (
                  <div
                    key={e.title}
                    className={`cursor-pointer rounded-md bg-gradient-to-r ${e.color} px-2 py-1 text-[10px] text-white shadow-crm-soft`}
                    title={`Click to view details · ${e.type} at ${e.time}`}
                  >
                    <p className="truncate">{e.title}</p>
                    <p className="text-[9px] opacity-80">{e.time}</p>
                  </div>
                ))}
              </div>
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="rounded-md border border-dashed border-white/10" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
