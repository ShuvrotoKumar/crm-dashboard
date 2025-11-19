"use client";

import { useState } from "react";

type StoredReport = {
  id: string;
  name: string;
  category: string;
  lastRun: string;
  owner: string;
};

const initialReports: StoredReport[] = [
  {
    id: "1",
    name: "Q4 Pipeline Health",
    category: "Sales",
    lastRun: "Today, 10:24",
    owner: "Revenue Ops",
  },
  {
    id: "2",
    name: "Lead Source Performance",
    category: "Leads",
    lastRun: "Yesterday",
    owner: "Marketing",
  },
  {
    id: "3",
    name: "Rep Performance",
    category: "Performance",
    lastRun: "Mon",
    owner: "Sales Ops",
  },
];

export function ReportsSection() {
  const [reports, setReports] = useState<StoredReport[]>(initialReports);
  const [showNewReport, setShowNewReport] = useState(false);
  const [newName, setNewName] = useState("");
  const [newCategory, setNewCategory] = useState("Sales");
  const [newOwner, setNewOwner] = useState("Revenue Ops");

  function handleCreateReport() {
    if (!newName.trim()) return;
    const id = Date.now().toString();
    const report: StoredReport = {
      id,
      name: newName,
      category: newCategory,
      lastRun: "Never",
      owner: newOwner,
    };
    setReports((prev) => [...prev, report]);
    setShowNewReport(false);
    setNewName("");
    setNewCategory("Sales");
    setNewOwner("Revenue Ops");
  }

  return (
    <div className="flex-1 space-y-4 xl:space-y-6">
      <div className="glass-panel px-4 py-4 sm:px-6 sm:py-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold text-white/90">Reports Center</h2>
            <p className="mt-1 text-xs text-white/60">
              Browse, build and export CRM analytics reports.
            </p>
          </div>
          <button
            onClick={() => setShowNewReport(true)}
            className="rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-3 py-2 text-xs font-semibold text-white shadow-crm-soft transition hover:-translate-y-0.5"
          >
            Create new report
          </button>
        </div>

        {showNewReport && (
          <div className="mt-3 rounded-2xl bg-black/60 p-4 ring-1 ring-sky-500/40 text-xs">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-medium text-white/85">New report</p>
              <button
                onClick={() => setShowNewReport(false)}
                className="text-[11px] text-white/60 hover:text-white/80"
              >
                Close
              </button>
            </div>
            <div className="grid gap-2 sm:grid-cols-2 text-[11px]">
              <input
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Report name"
                className="h-8 rounded-lg bg-black/70 px-2 text-white/80 placeholder:text-white/40 border border-white/10"
              />
              <select
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="h-8 rounded-lg bg-black/70 px-2 text-white/80 border border-white/10"
              >
                <option>Sales</option>
                <option>Leads</option>
                <option>Performance</option>
                <option>Financial</option>
              </select>
              <input
                value={newOwner}
                onChange={(e) => setNewOwner(e.target.value)}
                placeholder="Owner"
                className="h-8 rounded-lg bg-black/70 px-2 text-white/80 placeholder:text-white/40 border border-white/10 sm:col-span-2"
              />
            </div>
            <div className="mt-3 flex justify-end gap-2 text-[11px]">
              <button
                onClick={() => setShowNewReport(false)}
                className="rounded-lg border border-white/20 px-3 py-1 text-white/70 hover:bg-white/5"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateReport}
                className="rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 px-3 py-1 font-semibold text-white shadow-crm-soft"
              >
                Save report
              </button>
            </div>
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-4 text-xs">
          <div className="rounded-xl bg-black/40 p-3 ring-1 ring-white/10 hover:bg-white/5 transition">
            <p className="font-medium text-white/80">Sales Reports</p>
            <p className="mt-1 text-[11px] text-white/60">Pipeline, revenue, win rate.</p>
          </div>
          <div className="rounded-xl bg-black/40 p-3 ring-1 ring-white/10 hover:bg-white/5 transition">
            <p className="font-medium text-white/80">Lead Reports</p>
            <p className="mt-1 text-[11px] text-white/60">Lead sources and funnels.</p>
          </div>
          <div className="rounded-xl bg-black/40 p-3 ring-1 ring-white/10 hover:bg-white/5 transition">
            <p className="font-medium text-white/80">Performance Reports</p>
            <p className="mt-1 text-[11px] text-white/60">Team and rep metrics.</p>
          </div>
          <div className="rounded-xl bg-black/40 p-3 ring-1 ring-white/10 hover:bg-white/5 transition">
            <p className="font-medium text-white/80">Financial Reports</p>
            <p className="mt-1 text-[11px] text-white/60">Revenue, margin and ROI.</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="glass-panel px-4 py-4 sm:px-6 sm:py-5 text-xs">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-medium text-white/85">Stored Reports</p>
            <div className="flex gap-2">
              <button className="rounded-lg border border-white/15 px-2 py-1 text-[11px] text-white/70 hover:bg-white/5">
                Export PDF
              </button>
              <button className="rounded-lg border border-white/15 px-2 py-1 text-[11px] text-white/70 hover:bg-white/5">
                Export Excel
              </button>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30">
            <table className="min-w-full text-left text-[11px] text-white/70">
              <thead className="bg-white/5 text-[10px] uppercase tracking-wide text-white/50">
                <tr>
                  <th className="px-3 py-2">Name</th>
                  <th className="px-3 py-2">Category</th>
                  <th className="px-3 py-2">Last Run</th>
                  <th className="px-3 py-2">Owner</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report) => (
                  <tr key={report.id} className="hover:bg-white/5">
                    <td className="px-3 py-2 text-white/85">{report.name}</td>
                    <td className="px-3 py-2">{report.category}</td>
                    <td className="px-3 py-2">{report.lastRun}</td>
                    <td className="px-3 py-2">{report.owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="glass-panel px-4 py-4 sm:px-6 sm:py-5 text-xs">
          <p className="text-sm font-medium text-white/85 mb-2">Report Builder</p>
          <p className="text-[11px] text-white/60 mb-3">
            Configure fields and preview the chart before saving your template.
          </p>
          <div className="space-y-2 mb-4">
            <div className="grid grid-cols-2 gap-2">
              <select className="h-8 rounded-lg bg-black/50 px-2 text-[11px] text-white/80 border border-white/10">
                <option>Sales Reports</option>
                <option>Lead Reports</option>
                <option>Performance Reports</option>
              </select>
              <select className="h-8 rounded-lg bg-black/50 px-2 text-[11px] text-white/80 border border-white/10">
                <option>This Quarter</option>
                <option>Last Quarter</option>
                <option>This Year</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <select className="h-8 rounded-lg bg-black/50 px-2 text-[11px] text-white/80 border border-white/10">
                <option>Bar</option>
                <option>Line</option>
                <option>Pie</option>
              </select>
              <select className="h-8 rounded-lg bg-black/50 px-2 text-[11px] text-white/80 border border-white/10">
                <option>Group by Owner</option>
                <option>Group by Stage</option>
                <option>Group by Region</option>
              </select>
            </div>
          </div>
          <div className="mb-3 h-40 rounded-xl bg-gradient-to-br from-sky-500/15 via-emerald-500/10 to-indigo-500/10 p-3 ring-1 ring-white/10">
            <div className="flex h-full items-end gap-1">
              <div className="flex-1 rounded-t-lg bg-sky-400/70 hover:bg-sky-300/80 transition-all h-10" />
              <div className="flex-1 rounded-t-lg bg-emerald-400/70 hover:bg-emerald-300/80 transition-all h-16" />
              <div className="flex-1 rounded-t-lg bg-indigo-400/70 hover:bg-indigo-300/80 transition-all h-20" />
              <div className="flex-1 rounded-t-lg bg-purple-400/70 hover:bg-purple-300/80 transition-all h-14" />
            </div>
          </div>
          <div className="flex justify-between text-[11px] text-white/70">
            <button className="rounded-lg bg-white/10 px-3 py-1 font-medium hover:bg-white/15">
              Save template
            </button>
            <button className="rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 px-3 py-1 font-semibold text-white shadow-crm-soft">
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
