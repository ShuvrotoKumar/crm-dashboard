"use client";

import { useState } from "react";

type Campaign = {
  id: string;
  name: string;
  type: "Email" | "SMS" | "Ads";
  status: "Active" | "Paused" | "Completed";
  budget: string;
  leads: number;
  roi: string;
};

const initialCampaigns: Campaign[] = [
  {
    id: "1",
    name: "Q4 Nurture - Enterprise",
    type: "Email",
    status: "Active",
    budget: "$18,000",
    leads: 420,
    roi: "214%",
  },
  {
    id: "2",
    name: "Holiday SMS Blitz",
    type: "SMS",
    status: "Paused",
    budget: "$7,500",
    leads: 182,
    roi: "148%",
  },
  {
    id: "3",
    name: "Brand Awareness - Paid Social",
    type: "Ads",
    status: "Completed",
    budget: "$25,000",
    leads: 520,
    roi: "172%",
  },
];

export function CampaignsSection() {
  const [campaigns, setCampaigns] = useState<Campaign[]>(initialCampaigns);
  const [statusFilter, setStatusFilter] = useState("All statuses");
  const [typeFilter, setTypeFilter] = useState("All types");
  const [selectedId, setSelectedId] = useState<string | null>(initialCampaigns[0]?.id ?? null);
  const [showNewCampaign, setShowNewCampaign] = useState(false);
  const [newName, setNewName] = useState("");
  const [newType, setNewType] = useState<Campaign["type"]>("Email");
  const [newStatus, setNewStatus] = useState<Campaign["status"]>("Active");
  const [newBudget, setNewBudget] = useState("");
  const [newLeads, setNewLeads] = useState("0");
  const [newRoi, setNewRoi] = useState("100%");

  const filtered = campaigns.filter((c) => {
    const byStatus =
      statusFilter === "All statuses" ? true : c.status === statusFilter;
    const byType = typeFilter === "All types" ? true : c.type === typeFilter;
    return byStatus && byType;
  });

  const selected = campaigns.find((c) => c.id === selectedId) ?? campaigns[0];

  function handleCreateCampaign() {
    if (!newName.trim()) return;
    const id = Date.now().toString();
    const leads = Number.parseInt(newLeads || "0", 10) || 0;
    const campaign: Campaign = {
      id,
      name: newName,
      type: newType,
      status: newStatus,
      budget: newBudget || "$0",
      leads,
      roi: newRoi || "100%",
    };
    setCampaigns((prev) => [...prev, campaign]);
    setSelectedId(id);
    setShowNewCampaign(false);
    setNewName("");
    setNewType("Email");
    setNewStatus("Active");
    setNewBudget("");
    setNewLeads("0");
    setNewRoi("100%");
  }

  return (
    <div className="flex-1 space-y-4 xl:space-y-6 text-xs">
      <div className="glass-panel px-4 py-4 sm:px-6 sm:py-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white/90">All Marketing Campaigns</h2>
            <p className="mt-1 text-xs text-white/60">
              Monitor performance across email, SMS and paid channels.
            </p>
          </div>
          <button
            onClick={() => setShowNewCampaign(true)}
            className="rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2 text-[11px] font-semibold text-white shadow-crm-soft"
          >
            Create Campaign
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="h-8 rounded-lg bg-black/60 px-2 text-white/80 border border-white/10"
          >
            <option>All statuses</option>
            <option>Active</option>
            <option>Paused</option>
            <option>Completed</option>
          </select>
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="h-8 rounded-lg bg-black/60 px-2 text-white/80 border border-white/10"
          >
            <option>All types</option>
            <option>Email</option>
            <option>SMS</option>
            <option>Ads</option>
          </select>
        </div>

        {showNewCampaign && (
          <div className="mt-4 rounded-2xl bg-black/60 p-4 ring-1 ring-sky-500/40 text-[11px]">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-medium text-white/85">New campaign</p>
              <button
                onClick={() => setShowNewCampaign(false)}
                className="text-[11px] text-white/60 hover:text-white/80"
              >
                Close
              </button>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              <input
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Campaign name"
                className="h-8 rounded-lg bg-black/70 px-2 text-white/80 placeholder:text-white/40 border border-white/10"
              />
              <select
                value={newType}
                onChange={(e) => setNewType(e.target.value as Campaign["type"])}
                className="h-8 rounded-lg bg-black/70 px-2 text-white/80 border border-white/10"
              >
                <option value="Email">Email</option>
                <option value="SMS">SMS</option>
                <option value="Ads">Ads</option>
              </select>
              <select
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value as Campaign["status"])}
                className="h-8 rounded-lg bg-black/70 px-2 text-white/80 border border-white/10"
              >
                <option value="Active">Active</option>
                <option value="Paused">Paused</option>
                <option value="Completed">Completed</option>
              </select>
              <input
                value={newBudget}
                onChange={(e) => setNewBudget(e.target.value)}
                placeholder="Budget (e.g. $10,000)"
                className="h-8 rounded-lg bg-black/70 px-2 text-white/80 placeholder:text-white/40 border border-white/10"
              />
              <input
                value={newLeads}
                onChange={(e) => setNewLeads(e.target.value)}
                placeholder="Leads goal"
                className="h-8 rounded-lg bg-black/70 px-2 text-white/80 placeholder:text-white/40 border border-white/10"
              />
              <input
                value={newRoi}
                onChange={(e) => setNewRoi(e.target.value)}
                placeholder="Target ROI (e.g. 150%)"
                className="h-8 rounded-lg bg-black/70 px-2 text-white/80 placeholder:text-white/40 border border-white/10"
              />
            </div>
            <div className="mt-3 flex justify-end gap-2">
              <button
                onClick={() => setShowNewCampaign(false)}
                className="rounded-lg border border-white/20 px-3 py-1 text-white/70 hover:bg-white/5"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateCampaign}
                className="rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 px-3 py-1 text-xs font-semibold text-white shadow-crm-soft"
              >
                Save campaign
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="glass-panel px-3 py-3 sm:px-4 sm:py-4 text-[11px]">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-sm font-medium text-white/85">Campaigns</p>
            <span className="text-[10px] text-white/50">Click a row to open details</span>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30">
            <table className="min-w-full text-left text-[11px] text-white/70">
              <thead className="bg-white/5 text-[10px] uppercase tracking-wide text-white/50">
                <tr>
                  <th className="px-3 py-2">Campaign Name</th>
                  <th className="px-3 py-2">Type</th>
                  <th className="px-3 py-2">Status</th>
                  <th className="px-3 py-2">Budget</th>
                  <th className="px-3 py-2">Leads</th>
                  <th className="px-3 py-2">ROI</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((c) => (
                  <tr
                    key={c.id}
                    onClick={() => setSelectedId(c.id)}
                    className={`cursor-pointer hover:bg-white/5 ${
                      c.id === selected?.id ? "bg-white/5" : ""
                    }`}
                  >
                    <td className="px-3 py-2 text-white/85">{c.name}</td>
                    <td className="px-3 py-2">{c.type}</td>
                    <td className="px-3 py-2">{c.status}</td>
                    <td className="px-3 py-2">{c.budget}</td>
                    <td className="px-3 py-2">{c.leads}</td>
                    <td className="px-3 py-2">{c.roi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="glass-panel px-3 py-3 sm:px-4 sm:py-4 text-[11px]">
          <p className="text-sm font-medium text-white/85 mb-2">Campaign performance</p>
          <p className="text-[11px] text-white/60 mb-3">
            Showing metrics for: <span className="text-white/85">{selected?.name}</span>
          </p>
          <div className="mb-4 h-32 rounded-xl bg-gradient-to-br from-sky-500/15 via-emerald-500/10 to-indigo-500/10 p-3 ring-1 ring-white/10">
            <div className="flex h-full items-end justify-between gap-1">
              <div className="h-6 w-full rounded-t-lg bg-sky-400/80" />
              <div className="h-10 w-full rounded-t-lg bg-emerald-400/80" />
              <div className="h-16 w-full rounded-t-lg bg-indigo-400/80" />
              <div className="h-12 w-full rounded-t-lg bg-violet-400/80" />
            </div>
          </div>
          <div className="space-y-2 text-white/70">
            <p>Type: <span className="text-white/85">{selected?.type}</span></p>
            <p>Status: <span className="text-white/85">{selected?.status}</span></p>
            <p>Budget: <span className="text-white/85">{selected?.budget}</span></p>
            <p>Leads generated: <span className="text-white/85">{selected?.leads}</span></p>
            <p>ROI: <span className="text-white/85">{selected?.roi}</span></p>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <button className="rounded-lg border border-white/20 px-3 py-1 text-[11px] text-white/75 hover:bg-white/5">
              Edit campaign
            </button>
            <button className="rounded-lg border border-amber-400/40 px-3 py-1 text-[11px] text-amber-300 hover:bg-amber-500/10">
              {selected?.status === "Paused" ? "Resume" : "Pause"} campaign
            </button>
            <button className="rounded-lg border border-white/20 px-3 py-1 text-[11px] text-white/75 hover:bg-white/5">
              Duplicate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
