"use client";

import { useState } from "react";

type DealCard = {
  id: string;
  name: string;
  company: string;
  value: string;
  priority: "Low" | "Medium" | "High";
  status: string;
};

const initialColumns: Record<string, DealCard[]> = {
  Lead: [
    {
      id: "1",
      name: "Marketing automation rollout",
      company: "Aurora Labs",
      value: "$45k",
      priority: "High",
      status: "New lead",
    },
  ],
  Qualified: [
    {
      id: "2",
      name: "Omnichannel CX pilot",
      company: "Nimbus Retail",
      value: "$32k",
      priority: "Medium",
      status: "Discovery complete",
    },
  ],
  "Proposal Sent": [
    {
      id: "3",
      name: "Enterprise renewal",
      company: "Silverline Corp",
      value: "$120k",
      priority: "High",
      status: "Proposal shared",
    },
  ],
  Negotiation: [],
  "Closed Won": [],
  "Closed Lost": [],
};

type StageKey = keyof typeof initialColumns;

export function SalesPipelineSection() {
  const [columns, setColumns] = useState(initialColumns);
  const [search, setSearch] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("All priorities");
  const [showNewDeal, setShowNewDeal] = useState(false);
  const [newName, setNewName] = useState("");
  const [newCompany, setNewCompany] = useState("");
  const [newValue, setNewValue] = useState("");
  const [newPriority, setNewPriority] = useState<DealCard["priority"]>("Medium");
  const [newStage, setNewStage] = useState<StageKey>("Lead");

  const columnNames = [
    "Lead",
    "Qualified",
    "Proposal Sent",
    "Negotiation",
    "Closed Won",
    "Closed Lost",
  ];

  function priorityColor(priority: DealCard["priority"]) {
    if (priority === "High") return "bg-rose-500/15 text-rose-300";
    if (priority === "Medium") return "bg-amber-500/15 text-amber-300";
    return "bg-sky-500/15 text-sky-300";
  }

  function handleCreateDeal() {
    if (!newName.trim() || !newCompany.trim()) return;
    const id = Date.now().toString();
    const card: DealCard = {
      id,
      name: newName,
      company: newCompany,
      value: newValue || "$0",
      priority: newPriority,
      status: "New",
    };
    setColumns((prev) => ({
      ...prev,
      [newStage]: [...(prev[newStage] ?? []), card],
    }));
    setShowNewDeal(false);
    setNewName("");
    setNewCompany("");
    setNewValue("");
    setNewPriority("Medium");
    setNewStage("Lead");
  }

  return (
    <div className="flex-1 space-y-4 xl:space-y-6 text-xs">
      <div className="glass-panel px-4 py-4 sm:px-6 sm:py-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white/90">Sales Pipeline</h2>
            <p className="mt-1 text-xs text-white/60">
              Drag opportunities across stages to keep pipeline healthy.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search deals..."
              className="h-8 rounded-lg bg-black/60 px-2 text-[11px] text-white/80 placeholder:text-white/40 border border-white/10"
            />
            <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
              className="h-8 rounded-lg bg-black/60 px-2 text-[11px] text-white/80 border border-white/10"
            >
              <option>All priorities</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
            <button
              onClick={() => setShowNewDeal(true)}
              className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-3 py-2 text-[11px] font-semibold text-white shadow-crm-soft"
            >
              Add new deal
            </button>
          </div>
        </div>

        <div className="mt-4 grid gap-3 text-[11px] sm:grid-cols-3 lg:grid-cols-6">
          <div className="rounded-xl bg-black/40 p-3 ring-1 ring-white/10">
            <p className="text-white/60">Open pipeline</p>
            <p className="mt-1 text-lg font-semibold text-white/90">$297k</p>
          </div>
          <div className="rounded-xl bg-black/40 p-3 ring-1 ring-white/10">
            <p className="text-white/60">Win rate</p>
            <p className="mt-1 text-lg font-semibold text-emerald-300">23%</p>
          </div>
          <div className="rounded-xl bg-black/40 p-3 ring-1 ring-white/10">
            <p className="text-white/60">Cycle length</p>
            <p className="mt-1 text-lg font-semibold text-white/90">32 days</p>
          </div>
          <div className="rounded-xl bg-black/40 p-3 ring-1 ring-white/10">
            <p className="text-white/60">New leads</p>
            <p className="mt-1 text-lg font-semibold text-white/90">54</p>
          </div>
          <div className="rounded-xl bg-black/40 p-3 ring-1 ring-white/10">
            <p className="text-white/60">Stalled deals</p>
            <p className="mt-1 text-lg font-semibold text-amber-300">11</p>
          </div>
          <div className="rounded-xl bg-black/40 p-3 ring-1 ring-white/10">
            <p className="text-white/60">At risk</p>
            <p className="mt-1 text-lg font-semibold text-rose-300">6</p>
          </div>
        </div>

        {showNewDeal && (
          <div className="mt-4 rounded-2xl bg-black/60 p-4 ring-1 ring-emerald-500/40">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-medium text-white/85">New deal</p>
              <button
                onClick={() => setShowNewDeal(false)}
                className="text-[11px] text-white/60 hover:text-white/80"
              >
                Close
              </button>
            </div>
            <div className="grid gap-2 text-[11px] sm:grid-cols-2">
              <input
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Deal name"
                className="h-8 rounded-lg bg-black/70 px-2 text-white/80 placeholder:text-white/40 border border-white/10"
              />
              <input
                value={newCompany}
                onChange={(e) => setNewCompany(e.target.value)}
                placeholder="Company"
                className="h-8 rounded-lg bg-black/70 px-2 text-white/80 placeholder:text-white/40 border border-white/10"
              />
              <input
                value={newValue}
                onChange={(e) => setNewValue(e.target.value)}
                placeholder="Deal value (e.g. $25k)"
                className="h-8 rounded-lg bg-black/70 px-2 text-white/80 placeholder:text-white/40 border border-white/10"
              />
              <select
                value={newPriority}
                onChange={(e) => setNewPriority(e.target.value as DealCard["priority"])}
                className="h-8 rounded-lg bg-black/70 px-2 text-white/80 border border-white/10"
              >
                <option value="High">High priority</option>
                <option value="Medium">Medium priority</option>
                <option value="Low">Low priority</option>
              </select>
              <select
                value={newStage}
                onChange={(e) => setNewStage(e.target.value as StageKey)}
                className="h-8 rounded-lg bg-black/70 px-2 text-white/80 border border-white/10 sm:col-span-2"
              >
                {columnNames.map((stage) => (
                  <option key={stage} value={stage}>
                    {stage}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-3 flex justify-end gap-2 text-[11px]">
              <button
                onClick={() => setShowNewDeal(false)}
                className="rounded-lg border border-white/20 px-3 py-1 text-white/70 hover:bg-white/5"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateDeal}
                className="rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 px-3 py-1 font-semibold text-white shadow-crm-soft"
              >
                Save deal
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="glass-panel px-2 py-3 sm:px-3 sm:py-4 lg:px-4">
        <div className="grid gap-3 overflow-x-auto text-[11px] sm:grid-cols-3 lg:grid-cols-6">
          {columnNames.map((column) => (
            <div key={column} className="flex min-w-[180px] flex-col rounded-2xl bg-black/40 p-2 ring-1 ring-white/10">
              <div className="mb-2 flex items-center justify-between px-1">
                <p className="text-xs font-medium text-white/80">{column}</p>
                <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-white/55">
                  {columns[column]?.length ?? 0}
                </span>
              </div>
              <div className="flex-1 space-y-2">
                {columns[column]
                  ?.filter((deal) =>
                    search
                      ? deal.name.toLowerCase().includes(search.toLowerCase()) ||
                        deal.company.toLowerCase().includes(search.toLowerCase())
                      : true
                  )
                  .filter((deal) =>
                    priorityFilter === "All priorities"
                      ? true
                      : deal.priority === (priorityFilter as DealCard["priority"])
                  )
                  .map((deal) => (
                    <div
                      key={deal.id}
                      className="cursor-move rounded-xl bg-slate-900/80 p-2 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-slate-900"
                      title="Drag to another stage to update the pipeline."
                    >
                      <p className="text-[11px] font-medium text-white/90">{deal.name}</p>
                      <p className="text-[10px] text-white/55">{deal.company}</p>
                      <div className="mt-2 flex items-center justify-between text-[10px] text-white/70">
                        <span>{deal.value}</span>
                        <span
                          className={`rounded-full px-2 py-0.5 ${priorityColor(
                            deal.priority
                          )}`}
                        >
                          {deal.priority}
                        </span>
                      </div>
                      <p className="mt-1 text-[10px] text-white/55">{deal.status}</p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
