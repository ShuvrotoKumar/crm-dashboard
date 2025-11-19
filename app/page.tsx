"use client";

import {
  Bell,
  Plus,
  Search,
  Users,
  LineChart,
  Calendar,
  Megaphone,
  FileText,
  BadgeDollarSign,
  MessagesSquare,
  Database,
  Brain,
  Settings,
  Crown,
  Phone,
  Filter,
  Download,
  Target,
  Clock3,
  Sparkles,
  Mail,
  MessageCircle,
  CheckCircle2,
  ArrowUpRight,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { ContactsSection } from "@/components/ContactsSection";
import { AnalyticsSection } from "@/components/AnalyticsSection";
import { SalesPipelineSection } from "@/components/SalesPipelineSection";
import { CalendarSection } from "@/components/CalendarSection";
import { CampaignsSection } from "@/components/CampaignsSection";
import { ReportsSection } from "@/components/ReportsSection";
import { DealsSection } from "@/components/DealsSection";
import { MessagesSection } from "@/components/MessagesSection";
import { DataImportSection } from "@/components/DataImportSection";
import { ForecastingSection } from "@/components/ForecastingSection";
import { SettingsSection } from "@/components/SettingsSection";
import { AutomationsSection } from "@/components/AutomationsSection";
import { SupportSection } from "@/components/SupportSection";
import { LogoutSection } from "@/components/LogoutSection";

const sidebarIconMap: Record<string, LucideIcon> = {
  Contacts: Users,
  Analytics: LineChart,
  "Sales Pipeline": LineChart,
  Calendar,
  Campaigns: Megaphone,
  Reports: FileText,
  Deals: BadgeDollarSign,
  Messages: MessagesSquare,
  "Data Import": Database,
  Forecasting: Brain,
  Settings,
  Automations: Settings,
  "Contact Support": Phone,
  Logout: ArrowRight,
};

const sidebarSections = [
  {
    title: "Main Menu",
    items: [
      { label: "Contacts" },
      { label: "Analytics" },
      { label: "Sales Pipeline" },
      { label: "Calendar" },
      { label: "Campaigns" },
    ],
  },
  {
    title: "CRM Tools",
    items: [
      { label: "Reports" },
      { label: "Deals" },
      { label: "Messages" },
      { label: "Data Import" },
      { label: "Forecasting" },
    ],
  },
  {
    title: "Administration",
    items: [
      { label: "Settings" },
      { label: "Automations" },
      { label: "Contact Support" },
      { label: "Logout" },
    ],
  },
];

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

const contacts = [
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

const activities = [
  {
    icon: Mail,
    label: "Campaign \"Q4 Nurture\" sent",
    time: "12 min ago",
  },
  {
    icon: Phone,
    label: "Call logged with Nimbus Retail",
    time: "38 min ago",
  },
  {
    icon: Calendar,
    label: "Demo booked with Aurora Labs",
    time: "1 hr ago",
  },
  {
    icon: MessageCircle,
    label: "New inbound chat from Silverline",
    time: "2 hr ago",
  },
];

const performers = [
  { name: "Evelyn Shaw", metric: "$182k", role: "Enterprise" },
  { name: "Mason Lee", metric: "$156k", role: "Mid-Market" },
  { name: "Isabella Stone", metric: "$141k", role: "SMB" },
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

export default function Page() {
  const [activeSection, setActiveSection] = useState<string>("Analytics");

  return (
    <main className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <div className="mx-auto flex w-full gap-6 xl:gap-8">
        {/* Left Sidebar */}
        <motion.aside
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="hidden w-64 shrink-0 flex-col justify-between lg:flex"
        >
          <div className="sidebar-glass flex h-[calc(100vh-5rem)] flex-col overflow-hidden p-4">
            {/* Brand */}
            <div className="flex items-center justify-between pb-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-xl bg-crm-gold/90 shadow-[0_0_25px_rgba(246,196,83,0.9)] flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-black" />
                </div>
                <div>
                  <p className="text-sm font-medium tracking-wide text-white/80">
                    LUX CRM
                  </p>
                  <p className="text-[11px] text-white/40">Revenue Workspace</p>
                </div>
              </div>
              <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] uppercase tracking-wide text-white/60">
                v2.4
              </span>
            </div>

            {/* Nav */}
            <div className="mt-1 flex-1 space-y-6 overflow-y-auto pr-1 scrollbar-thin">
              {sidebarSections.map((section) => (
                <div key={section.title} className="space-y-2">
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/40">
                    {section.title}
                  </p>
                  <div className="space-y-1">
                    {section.items.map((item) => {
                      const Icon = sidebarIconMap[item.label] ?? Users;
                      const isActive = activeSection === item.label;
                      return (
                        <button
                          key={item.label}
                          onClick={() => setActiveSection(item.label)}
                          className={`group flex w-full items-center justify-between rounded-xl px-2.5 py-2 text-sm transition-all duration-200 ease-out ${
                            isActive
                              ? "bg-white/15 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
                              : "text-white/60 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          <span className="flex items-center gap-2.5">
                            <span
                              className={`flex h-7 w-7 items-center justify-center rounded-lg border text-[13px] transition-all duration-200 ease-out ${
                                isActive
                                  ? "border-white/20 bg-black/40"
                                  : "border-white/10 bg-black/20 group-hover:border-white/20 group-hover:-translate-y-0.5"
                              }`}
                            >
                              <Icon className="h-3.5 w-3.5" />
                            </span>
                            <span>{item.label}</span>
                          </span>
                          {isActive && (
                            <span className="rounded-full bg-black/40 px-2 py-0.5 text-[10px] text-white/60">
                              Active
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* Premium card */}
              <div className="mt-4 rounded-2xl bg-crm-gold bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.4),transparent_55%)] p-[1px] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-crm-soft">
                <div className="flex h-full flex-col justify-between rounded-2xl bg-black/90 px-3.5 py-3.5">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-300 to-amber-500 shadow-[0_0_25px_rgba(246,196,83,0.9)]">
                      <Crown className="h-4 w-4 text-black" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-wide text-white">
                        Upgrade to Elite
                      </p>
                      <p className="mt-1 text-[11px] leading-snug text-white/70">
                        Unlock AI forecasting, team leaderboards and predictive pipeline.
                      </p>
                    </div>
                  </div>
                  <button className="mt-3 inline-flex items-center justify-between rounded-xl bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-400 px-3 py-2 text-[11px] font-semibold text-black shadow-[0_10px_28px_rgba(0,0,0,0.75)]">
                    <span>Upgrade workspace</span>
                    <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                  </button>
                  <p className="mt-1.5 text-[10px] text-white/55">
                    Starting from <span className="font-semibold">$39</span>/seat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.aside>

        {/* Main + Right column */}
        <div className="flex flex-1 flex-col gap-6 xl:gap-8">
          {/* Top bar */}
          <motion.header
            initial={{ y: -14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="glass-panel flex items-center justify-between px-4 py-3 sm:px-5 sm:py-4 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-crm-soft"
          >
            <div>
              <p className="flex items-center gap-2 text-xs font-medium tracking-wide text-white/50">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/5">
                  <span className="text-sm">🚀</span>
                </span>
                Welcome back, <span className="text-white/80">Revenue Ops</span>
              </p>
              <p className="mt-1 text-sm text-white/60">
                Here’s a snapshot of your pipeline and customer health today.
              </p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="hidden items-center gap-2 rounded-2xl border border-white/10 bg-black/40 px-2 py-1.5 text-xs text-white/60 shadow-inner sm:flex sm:px-3">
                <Search className="mr-1.5 h-3.5 w-3.5 text-white/40" />
                <input
                  placeholder="Search contacts, deals, meetings..."
                  className="w-40 bg-transparent text-xs text-white placeholder:text-white/35 focus:outline-none md:w-56"
                />
                <span className="ml-2 hidden rounded-md bg-white/10 px-1.5 py-0.5 text-[10px] text-white/55 md:inline">
                  /
                </span>
              </div>
              <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white/70 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/5">
                <Bell className="h-4 w-4" />
              </button>
              <button className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-3.5 py-2 text-xs font-semibold shadow-[0_10px_30px_rgba(15,23,42,0.85)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:from-sky-400 hover:to-indigo-400 sm:inline-flex">
                <Plus className="h-3.5 w-3.5" />
                <span>Add contact</span>
              </button>
            </div>
          </motion.header>

          <div className="flex flex-col gap-6 lg:flex-row xl:gap-8">
            {/* Main dashboard area */}
            <motion.section
              key={activeSection}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
              className="flex-1 space-y-6 xl:space-y-8"
            >
              {activeSection === "Contacts" && <ContactsSection />}
              {activeSection === "Analytics" && <AnalyticsSection />}
              {activeSection === "Sales Pipeline" && <SalesPipelineSection />}
              {activeSection === "Calendar" && <CalendarSection />}
              {activeSection === "Campaigns" && <CampaignsSection />}
              {activeSection === "Reports" && <ReportsSection />}
              {activeSection === "Deals" && <DealsSection />}
              {activeSection === "Messages" && <MessagesSection />}
              {activeSection === "Data Import" && <DataImportSection />}
              {activeSection === "Forecasting" && <ForecastingSection />}
              {activeSection === "Settings" && <SettingsSection />}
              {activeSection === "Automations" && <AutomationsSection />}
              {activeSection === "Contact Support" && <SupportSection />}
              {activeSection === "Logout" && <LogoutSection />}
            </motion.section>

            {/* Right sidebar */}
            <motion.aside
              initial={{ x: 18, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
              className="w-full shrink-0 space-y-4 sm:space-y-5 lg:w-80 xl:w-96"
            >
              {/* Quick actions */}
              <section className="glass-panel px-4 py-4 sm:px-5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-crm-soft">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-white/90">
                    Quick actions
                  </p>
                  <span className="text-[11px] text-white/50">
                    Today
                  </span>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2.5 text-xs">
                  <button className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-left text-white/80 ring-1 ring-white/15 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/10">
                    <Calendar className="h-3.5 w-3.5 text-sky-300" />
                    <span>Schedule</span>
                  </button>
                  <button className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-left text-white/80 ring-1 ring-white/15 hover:bg-white/10">
                    <Mail className="h-3.5 w-3.5 text-emerald-300" />
                    <span>Send email</span>
                  </button>
                  <button className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-left text-white/80 ring-1 ring-white/15 hover:bg-white/10">
                    <MessagesSquare className="h-3.5 w-3.5 text-purple-300" />
                    <span>Book meeting</span>
                  </button>
                  <button className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-left text-white/80 ring-1 ring-white/15 hover:bg-white/10">
                    <FileText className="h-3.5 w-3.5 text-amber-300" />
                    <span>Add note</span>
                  </button>
                </div>
              </section>

              {/* AI Chat */}
              <section className="glass-panel overflow-hidden px-4 py-4 sm:px-5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-crm-soft">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.4),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.4),transparent_55%)] opacity-70" />
                  <div className="relative flex items-start justify-between gap-3">
                    <div>
                      <p className="flex items-center gap-2 text-sm font-semibold text-white">
                        <Sparkles className="h-4 w-4 text-crm-gold-soft" />
                        AI Revenue Copilot
                      </p>
                      <p className="mt-1.5 text-xs text-white/85">
                        Ask anything about your pipeline, forecast, or next best action.
                      </p>
                    </div>
                  </div>
                  <div className="relative mt-3 rounded-2xl bg-black/40 p-3 text-[11px] text-white/75 ring-1 ring-white/10">
                    <p>
                      "Surface at-risk deals above $50k closing this month and suggest 3
                      actions to recover them."
                    </p>
                  </div>
                  <button className="relative mt-3 inline-flex items-center rounded-xl bg-white px-3.5 py-2 text-xs font-semibold text-black shadow-[0_14px_35px_rgba(0,0,0,0.9)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(0,0,0,0.95)]">
                    Open AI workspace
                    <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                  </button>
                </div>
              </section>

              {/* Recent activity */}
              <section className="glass-panel px-4 py-4 sm:px-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-white/90">
                    Recent activity
                  </p>
                  <span className="text-[11px] text-white/50">
                    Live sync
                  </span>
                </div>
                <div className="mt-3 space-y-2.5 text-xs">
                  {activities.map((activity, index) => (
                    <motion.div
                      key={activity.label}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.05 * index, ease: "easeOut" }}
                      whileHover={{ y: -2 }}
                      className="flex items-start gap-2.5 rounded-xl bg-black/40 px-3 py-2 ring-1 ring-white/8 transition-all duration-200 ease-out hover:bg-white/5"
                    >
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/5">
                        <activity.icon className="h-3.5 w-3.5 text-white/75" />
                      </div>
                      <div>
                        <p className="text-[11px] text-white/85">
                          {activity.label}
                        </p>
                        <p className="mt-0.5 text-[10px] text-white/45">
                          {activity.time}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Top performers */}
              <section className="glass-panel px-4 py-4 sm:px-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-white/90">
                    Top performers
                  </p>
                  <span className="text-[11px] text-emerald-300/85">
                    +18% vs last Q
                  </span>
                </div>
                <div className="mt-3 space-y-2 text-xs">
                  {performers.map((p, index) => (
                    <motion.div
                      key={p.name}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.05 * index, ease: "easeOut" }}
                      whileHover={{ y: -2 }}
                      className="flex items-center justify-between rounded-xl bg-black/40 px-3 py-2 ring-1 ring-white/10 transition-all duration-200 ease-out hover:bg-white/5"
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-semibold ${
                            index === 0
                              ? "bg-gradient-to-br from-yellow-300 to-amber-400 text-black"
                              : index === 1
                              ? "bg-white/15 text-white"
                              : "bg-white/5 text-white/70"
                          }`}
                        >
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-[11px] text-white/85">{p.name}</p>
                          <p className="text-[10px] text-white/45">{p.role}</p>
                        </div>
                      </div>
                      <div className="text-right text-[11px] text-white/80">
                        <p>{p.metric}</p>
                        <p className="mt-0.5 flex items-center justify-end gap-1 text-[10px] text-emerald-300/80">
                          <CheckCircle2 className="h-3 w-3" />
                          <span>Quota</span>
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            </motion.aside>
          </div>
        </div>
      </div>
    </main>
  );
}
