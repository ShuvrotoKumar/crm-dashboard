"use client";

import { useState } from "react";

type TableDeal = {
  id: string;
  name: string;
  client: string;
  value: string;
  expectedClose: string;
  stage: string;
};

const initialDeals: TableDeal[] = [
  {
    id: "1",
    name: "Global Expansion Suite",
    client: "Aurora Labs",
    value: "$95k",
    expectedClose: "Nov 22",
    stage: "Negotiation",
  },
  {
    id: "2",
    name: "CX Automation Rollout",
    client: "Nimbus Retail",
    value: "$42k",
    expectedClose: "Dec 4",
    stage: "Proposal",
  },
  {
    id: "3",
    name: "Insight Revamp",
    client: "Silverline Corp",
    value: "$23k",
    expectedClose: "Nov 29",
    stage: "Closed Lost",
  },
];

export function DealsSection() {
  const [deals, setDeals] = useState<TableDeal[]>(initialDeals);
  const [showNewDeal, setShowNewDeal] = useState(false);
  const [newName, setNewName] = useState("");
  const [newClient, setNewClient] = useState("");
  const [newValue, setNewValue] = useState("");
  const [newExpectedClose, setNewExpectedClose] = useState("");
  const [newStage, setNewStage] = useState("Qualified");

  function handleCreateDeal() {
    if (!newName.trim() || !newClient.trim()) return;
    const id = Date.now().toString();
    const deal: TableDeal = {
      id,
      name: newName,
      client: newClient,
      value: newValue || "$0",
      expectedClose: newExpectedClose || "TBD",
      stage: newStage,
    };
    setDeals((prev) => [...prev, deal]);
    setShowNewDeal(false);
    setNewName("");
    setNewClient("");
    setNewValue("");
    setNewExpectedClose("");
    setNewStage("Qualified");
  }

  return (
    <div className="flex-1 space-y-4 xl:space-y-6">
      <div className="glass-panel px-4 py-4 sm:px-6 sm:py-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold text-white/90">Deals Overview</h2>
            <p className="mt-1 text-xs text-white/60">
              Track open deals, funnel performance and quick stats.
            </p>
          </div>
          <button
            onClick={() => setShowNewDeal(true)}
            className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-3 py-2 text-xs font-semibold text-white shadow-crm-soft transition hover:-translate-y-0.5"
          >
            Add new deal
          </button>
        </div>

        <div className="mb-4 grid gap-3 text-xs sm:grid-cols-4">
          <div className="rounded-xl bg-black/40 p-3 ring-1 ring-white/10">
            <p className="text-[11px] text-white/60">Total deals</p>
            <p className="mt-1 text-lg font-semibold text-white/90">184</p>
          </div>
          <div className="rounded-xl bg-black/40 p-3 ring-1 ring-white/10">
            <p className="text-[11px] text-white/60">Won</p>
            <p className="mt-1 text-lg font-semibold text-emerald-300">92</p>
          </div>
          <div className="rounded-xl bg-black/40 p-3 ring-1 ring-white/10">
            <p className="text-[11px] text-white/60">Lost</p>
            <p className="mt-1 text-lg font-semibold text-rose-300">37</p>
          </div>
          <div className="rounded-xl bg-black/40 p-3 ring-1 ring-white/10">
            <p className="text-[11px] text-white/60">Avg. value</p>
            <p className="mt-1 text-lg font-semibold text-white/90">$18.4k</p>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] text-xs">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
            <table className="min-w-full text-left text-[11px] text-white/70">
              <thead className="bg-white/5 text-[10px] uppercase tracking-wide text-white/50">
                <tr>
                  <th className="px-3 py-2">Deal Name</th>
                  <th className="px-3 py-2">Client</th>
                  <th className="px-3 py-2">Value</th>
                  <th className="px-3 py-2">Expected Close</th>
                  <th className="px-3 py-2">Stage</th>
                </tr>
              </thead>
              <tbody>
                {deals.map((deal) => (
                  <tr key={deal.id} className="hover:bg-white/5">
                    <td className="px-3 py-2 text-white/85">{deal.name}</td>
                    <td className="px-3 py-2">{deal.client}</td>
                    <td className="px-3 py-2">{deal.value}</td>
                    <td className="px-3 py-2">{deal.expectedClose}</td>
                    <td className="px-3 py-2">{deal.stage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="glass-panel px-4 py-4 sm:px-5 sm:py-5">
            <p className="text-sm font-medium text-white/85 mb-2">Funnel</p>
            <div className="space-y-2 text-[11px] text-white/70">
              <div className="flex items-center gap-2">
                <span className="w-20 text-white/60">Leads</span>
                <div className="h-4 flex-1 rounded-full bg-white/5">
                  <div className="h-full rounded-full bg-sky-400/80 w-11/12" />
                </div>
                <span>1,240</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-20 text-white/60">Qualified</span>
                <div className="h-4 flex-1 rounded-full bg-white/5">
                  <div className="h-full rounded-full bg-indigo-400/80 w-3/4" />
                </div>
                <span>620</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-20 text-white/60">Proposal</span>
                <div className="h-4 flex-1 rounded-full bg-white/5">
                  <div className="h-full rounded-full bg-violet-400/80 w-1/2" />
                </div>
                <span>310</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-20 text-white/60">Won</span>
                <div className="h-4 flex-1 rounded-full bg-white/5">
                  <div className="h-full rounded-full bg-emerald-400/80 w-1/3" />
                </div>
                <span>92</span>
              </div>
            </div>
            <button className="mt-4 w-full rounded-lg border border-white/15 px-3 py-2 text-[11px] text-white/75 hover:bg-white/5">
              Convert lost deals &rarr; reopen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
