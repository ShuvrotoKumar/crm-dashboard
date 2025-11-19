"use client";

export function DataImportSection() {
  return (
    <div className="flex-1 space-y-4 xl:space-y-6">
      <div className="glass-panel px-4 py-4 sm:px-6 sm:py-5 text-xs">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white/90">Data Import</h2>
            <p className="mt-1 text-xs text-white/60">
              Upload CSV or XLSX files, map fields and validate before import.
            </p>
          </div>
          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] text-emerald-300 ring-1 ring-emerald-500/40">
            Stepper: Upload → Map → Review → Import
          </span>
        </div>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,2fr)]">
          <div className="space-y-4">
            <div className="rounded-2xl border border-dashed border-white/20 bg-black/40 p-6 text-center hover:border-sky-400/60 hover:bg-black/30 transition">
              <p className="text-sm font-medium text-white/85">Drag & drop your file</p>
              <p className="mt-1 text-[11px] text-white/60">CSV, XLSX up to 50MB</p>
              <button className="mt-3 rounded-xl bg-white/10 px-3 py-2 text-[11px] text-white/80 hover:bg-white/15">
                Browse files
              </button>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <p className="text-sm font-medium text-white/85 mb-2">Field Mapping</p>
              <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30">
                <table className="min-w-full text-left text-[11px] text-white/70">
                  <thead className="bg-white/5 text-[10px] uppercase tracking-wide text-white/50">
                    <tr>
                      <th className="px-3 py-2">File Column</th>
                      <th className="px-3 py-2">CRM Field</th>
                      <th className="px-3 py-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-white/5">
                      <td className="px-3 py-2 text-white/85">Email</td>
                      <td className="px-3 py-2">Contact Email</td>
                      <td className="px-3 py-2 text-emerald-300">Auto-matched</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="px-3 py-2 text-white/85">Company</td>
                      <td className="px-3 py-2">Account Name</td>
                      <td className="px-3 py-2 text-emerald-300">Auto-matched</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="px-3 py-2 text-white/85">Owner</td>
                      <td className="px-3 py-2">Assign To</td>
                      <td className="px-3 py-2 text-amber-300">Review</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <p className="text-sm font-medium text-white/85 mb-2">Import Results</p>
            <div className="space-y-2 text-[11px] text-white/70">
              <div className="flex items-center justify-between rounded-lg bg-emerald-500/10 px-3 py-2 ring-1 ring-emerald-500/30">
                <span>Valid rows</span>
                <span className="font-semibold text-emerald-300">1,248</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-amber-500/10 px-3 py-2 ring-1 ring-amber-500/30">
                <span>Rows with warnings</span>
                <span className="font-semibold text-amber-300">47</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-rose-500/10 px-3 py-2 ring-1 ring-rose-500/30">
                <span>Error rows</span>
                <span className="font-semibold text-rose-300">12</span>
              </div>
            </div>
            <button className="mt-3 w-full rounded-lg border border-white/20 px-3 py-2 text-[11px] text-white/75 hover:bg-white/5">
              Download error report
            </button>
            <button className="mt-2 w-full rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 px-3 py-2 text-[11px] font-semibold text-white shadow-crm-soft">
              Validate & Import
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
