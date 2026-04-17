"use client";
import React, { useState, useEffect } from "react";
import { authFetch } from "../types";
import { FormField, SectionDivider, CrudTable } from "./shared";
import type { LanguageCenter } from "../types";

function LanguageProgramsManager() {
  const [centers, setCenters] = useState<LanguageCenter[]>([]);
  const [selectedCenterId, setSelectedCenterId] = useState<number | "all">("all");

  useEffect(() => {
    authFetch(`${process.env.NEXT_PUBLIC_API_URL || "https://yaalmalegacy.com/api"}/language-centers`)
      .then(r => r.json())
      .then(data => setCenters(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <CrudTable<any>
      title="Language Programs"
      apiPath="/language-programs"
      itemsFilter={(items) => selectedCenterId === "all" ? items : items.filter(i => i.languageCenterId === selectedCenterId)}
      headerActions={
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <label className="text-sm font-bold text-gray-500 uppercase tracking-widest hidden sm:block">Filter:</label>
          <select
            value={selectedCenterId}
            onChange={(e) => setSelectedCenterId(e.target.value === "all" ? "all" : parseInt(e.target.value))}
            className="w-full sm:w-[250px] bg-white dark:bg-[#11192d] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 text-sm font-bold outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-gray-200 shadow-sm"
          >
            <option value="all">-- Show All Institutes --</option>
            {centers.map(c => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>
      }
      columns={[
        { key: "titleEn", label: "Program Name" },
        { key: "levelEn", label: "Level" },
        { key: "durationEn", label: "Duration" },
        { key: "languageCenterId", label: "Assigned Center", render: (p) => {
          const center = centers.find(c => c.id === p.languageCenterId);
          return center ? center.name : "Not Assigned";
        }},
        { key: "feeMyr", label: "Fee (MYR)", render: (p) => `RM ${p.feeMyr}` },
      ]}
      emptyRow={{ id: 0, titleEn: "", titleAr: "", titleZh: "", titleMs: "", durationEn: "4 Weeks", durationAr: "4 أسابيع", durationZh: "4周", durationMs: "4周", levelEn: "All Levels", levelAr: "جميع المستويات", levelZh: "所有级别", levelMs: "所有级别", intakesEn: "Every Monday", intakesAr: "كل يوم إثنين", intakesZh: "每周一", intakesMs: "每周一", feeMyr: 0, languageCenterId: selectedCenterId !== "all" ? selectedCenterId : 0 }}
      renderForm={(item, setItem) => (
        <>
          <SectionDivider label="Basic Information (Categorization)" />
          <FormField label="Program Name (EN)" value={item.titleEn} onChange={v => setItem({ ...item, titleEn: v })} />
          <FormField label="Program Name (AR)" value={item.titleAr} onChange={v => setItem({ ...item, titleAr: v })} />
          <FormField label="Program Name (ZH)" value={item.titleZh} onChange={v => setItem({ ...item, titleZh: v })} />
          <FormField label="Program Name (MS)" value={item.titleMs} onChange={v => setItem({ ...item, titleMs: v })} />

          <SectionDivider label="Degree Matrix" />
          <FormField label="Proficiency Level (EN)" value={item.levelEn} onChange={v => setItem({ ...item, levelEn: v })} />
          <FormField label="Proficiency Level (AR)" value={item.levelAr} onChange={v => setItem({ ...item, levelAr: v })} />
          <FormField label="Proficiency Level (ZH)" value={item.levelZh} onChange={v => setItem({ ...item, levelZh: v })} />
          <FormField label="Proficiency Level (MS)" value={item.levelMs} onChange={v => setItem({ ...item, levelMs: v })} />

          <FormField label="Duration (EN)" value={item.durationEn} onChange={v => setItem({ ...item, durationEn: v })} />
          <FormField label="Duration (AR)" value={item.durationAr} onChange={v => setItem({ ...item, durationAr: v })} />
          <FormField label="Duration (ZH)" value={item.durationZh} onChange={v => setItem({ ...item, durationZh: v })} />
          <FormField label="Duration (MS)" value={item.durationMs} onChange={v => setItem({ ...item, durationMs: v })} />

          <SectionDivider label="Financials & Logistics" />
          <FormField label="Tuition Fee (MYR)" value={String(item.feeMyr || 0)} onChange={v => setItem({ ...item, feeMyr: parseInt(v) || 0 })} />
          <FormField label="Intake Months EN (Comma separated)" value={item.intakesEn} onChange={v => setItem({ ...item, intakesEn: v })} />
          <FormField label="Intake Months (AR)" value={item.intakesAr} onChange={v => setItem({ ...item, intakesAr: v })} />
          <FormField label="Intake Months (ZH)" value={item.intakesZh} onChange={v => setItem({ ...item, intakesZh: v })} />
          <FormField label="Intake Months (MS)" value={item.intakesMs} onChange={v => setItem({ ...item, intakesMs: v })} />
          
          <SectionDivider label="Language Center Binding" />
          <div className="col-span-1 md:col-span-2">
            <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Assigned Language Center</label>
            <select
              value={item.languageCenterId || ""}
              onChange={(e) => {
                setItem({ ...item, languageCenterId: parseInt(e.target.value) || 0 });
              }}
              className="w-full bg-gray-50 dark:bg-[#11192d] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-gray-200"
            >
              <option value="">-- Select an Institute --</option>
              {centers.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
        </>
      )}
    />
  );
}

export default LanguageProgramsManager;
