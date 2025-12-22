"use client";

import { motion } from "framer-motion";
import {
  Users,
  BadgeDollarSign,
  LineChart,
  Calendar,
  Filter,
  Download,
  Target,
  Clock3,
  Crown,
  ArrowUpRight,
} from "lucide-react";

const kpis = [
  {
    label: "Total Contacts",
    value: "12,482",
    change: "+8.4%",
    icon: Users,
  },
  {
    label: "Active Deals",
    value: "238",
    change: "+3.1%",
    icon: BadgeDollarSign,
  },
  {
    label: "Revenue",
    value: "$842k",
    change: "+18.9%",
    icon: LineChart,
  },
  {
    label: "Meetings",
    value: "47",
    change: "Today",
    icon: Calendar,
  },
];

const defaultContacts = [
  {
    name: "Sophia Carter",
    company: "Aurora Labs",
    phone: "+1 (929) 443-1190",
    status: "Active",
  },
  {
    name: "Liam Johnson",
    company: "Vertex Media",
    phone: "+1 (415) 322-9981",
    status: "Prospect",
  },
  {
    name: "Ava Martinez",
    company: "Nimbus Retail",
    phone: "+1 (213) 555-9077",
    status: "Active",
  },
  {
    name: "Noah Wilson",
    company: "Silverline Corp",
    phone: "+1 (646) 901-1223",
    status: "Inactive",
  },
];

function statusColor(status: string) {
  switch (status) {
    case "Active":
      return "bg-emerald-500/10 text-emerald-300 border-emerald-500/30";
    case "Prospect":
      return "bg-sky-500/10 text-sky-300 border-sky-500/30";
    default:
      return "bg-slate-500/10 text-slate-300 border-slate-500/30";
  }
}

type Contact = {
  name: string;
  company?: string;
  phone?: string;
  status?: string;
};

export function ContactsSection({ contacts }: { contacts?: Contact[] }) {
  const list = contacts ?? defaultContacts;

  return (
    <div className="flex-1 space-y-6 xl:space-y-8">
      {/* KPIs */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi, index) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.08 * index, ease: "easeOut" }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="glass-panel relative overflow-hidden px-4 py-3.5 sm:px-4 sm:py-4 transition-all duration-300 ease-out hover:shadow-crm-soft"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(148,163,253,0.5),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.28),transparent_60%)] opacity-60" />
            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
                  {kpi.label}
                </p>
                <p className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                  {kpi.value}
                </p>
                <p className="mt-1 text-[11px] text-emerald-300/80">
                  {kpi.change} vs last period
                </p>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black/40 ring-1 ring-white/15">
                <kpi.icon className="h-4 w-4 text-white/80" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent contacts */}
      <section className="glass-panel">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5 sm:py-4">
          <div>
            <p className="text-sm font-medium text-white/90">Recent contacts</p>
            <p className="text-xs text-white/50">
              High-intent accounts engaged in the last 24 hours.
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-white/60">
            <button className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/40 text-xs hover:bg-white/10">
              <Filter className="h-3.5 w-3.5" />
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/40 text-xs hover:bg-white/10">
              <Download className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
        <div className="divide-y divide-white/5 px-4 py-2 sm:px-5 sm:py-3">
          {list.map((contact, index) => (
            <motion.div
              key={contact.name}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.04 * index, ease: "easeOut" }}
              whileHover={{ y: -2 }}
              className="flex items-center justify-between py-3 text-sm transition-all duration-200 ease-out hover:bg-white/5/50"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-slate-700 to-slate-900 text-xs font-semibold text-white/90 ring-1 ring-white/15">
                  {contact.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm text-white/90">{contact.name}</p>
                  <p className="text-xs text-white/50">
                    {contact.company} • {contact.phone}
                  </p>
                </div>
              </div>
              <span
                className={`rounded-full border px-2.5 py-1 text-[11px] font-medium transition-colors duration-200 ease-out ${statusColor(
                  contact.status ?? ""
                )}`}
              >
                {contact.status}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sales target */}
      <section className="glass-panel px-4 py-4 sm:px-5 sm:py-5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-crm-soft">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="flex items-center gap-2 text-sm font-medium text-white/90">
              <Target className="h-4 w-4 text-crm-gold-soft" />
              Sales targets
            </p>
            <p className="text-xs text-white/50">
              Track attainment across monthly and quarterly goals.
            </p>
          </div>
          <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] text-emerald-300 ring-1 ring-emerald-500/35">
            112% of monthly target
          </span>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>Monthly target</span>
                <span className="font-medium text-white/80">
                  $280k <span className="text-emerald-300/80">(124%)</span>
                </span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/5">
                <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-emerald-400 via-emerald-300 to-crm-gold-soft shadow-[0_0_18px_rgba(16,185,129,0.9)]" />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>Quarterly target</span>
                <span className="font-medium text-white/80">
                  $780k <span className="text-sky-300/85">(76%)</span>
                </span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/5">
                <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 shadow-[0_0_18px_rgba(56,189,248,0.9)]" />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/45">
              Team performance
            </p>
            <div className="space-y-2.5 text-xs">
              <div>
                <div className="flex items-center justify-between text-white/60">
                  <span>Enterprise</span>
                  <span className="text-white/80">$412k</span>
                </div>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/5">
                  <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-amber-400 via-crm-gold-soft to-orange-500" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-white/60">
                  <span>Mid-Market</span>
                  <span className="text-white/80">$261k</span>
                </div>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/5">
                  <div className="h-full w-[64%] rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-white/60">
                  <span>SMB</span>
                  <span className="text-white/80">$147k</span>
                </div>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/5">
                  <div className="h-full w-[49%] rounded-full bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400" />
                </div>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between rounded-xl bg-black/40 px-3 py-2 text-xs text-white/60 ring-1 ring-white/10">
              <span className="flex items-center gap-2">
                <Clock3 className="h-3.5 w-3.5 text-white/45" />
                <span>
                  Days left in month: <span className="font-semibold text-white/90">9</span>
                </span>
              </span>
              <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] text-emerald-300">
                +$38k to stretch goal
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer premium banner */}
      <section className="glass-panel border border-yellow-300/25 bg-gradient-to-r from-yellow-400/10 via-amber-400/5 to-emerald-300/10 px-4 py-4 sm:px-5 sm:py-5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-crm-soft">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-crm-gold shadow-[0_0_30px_rgba(246,196,83,0.95)]">
              <Crown className="h-5 w-5 text-black" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-white">
                Unlock Lux CRM Premium
              </p>
              <p className="mt-1 text-xs text-white/70">
                AI-powered playbooks, advanced attribution and real-time forecasting
                across your entire revenue org.
              </p>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-3 md:flex-row md:items-center md:justify-end">
            <div className="flex items-center gap-2 rounded-2xl bg-black/40 px-2 py-1.5 text-[11px] text-white/70 ring-1 ring-white/15">
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wide text-white/70">
                Monthly
              </span>
              <span className="px-2 text-white/50">/</span>
              <button className="rounded-full bg-white text-[10px] font-semibold text-black px-2 py-0.5">
                Annual <span className="text-[9px] text-emerald-600">-18%</span>
              </button>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right text-xs">
                <p className="text-[11px] text-white/60">From</p>
                <p className="text-sm font-semibold text-white">
                  $39 <span className="text-[11px] text-white/60">/ seat</span>
                </p>
              </div>
              <button className="inline-flex items-center rounded-xl bg-white px-3.5 py-2 text-xs font-semibold text-black shadow-[0_14px_35px_rgba(0,0,0,0.85)]">
                Talk to sales
                <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

