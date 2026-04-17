"use client";
import React, { useState, useEffect } from "react";
import { 
  Building2, Languages, BookOpen, Settings, 
  Plus, Pencil, Trash2, Save, X, ChevronUp, ChevronDown, FolderPlus, Code, Monitor,
  LayoutDashboard, Image as ImageIcon, FileText, Menu, Newspaper, GraduationCap, Briefcase, MessageCircle, Play, Star,
  Globe, Activity, TrendingUp, Users
} from "lucide-react";
import { API, authFetch } from "../types"; // We will create this
import { FormField, SectionDivider, CrudTable, ExtendedFieldsForm, TextAreaField } from "./shared";
import type { University, LanguageCenter, Course, Testimonial, BlogPost, SiteSettings } from "../types";

function LanguageCentersManager() {
  return (
    <CrudTable<LanguageCenter>
      title="Language Centers"
      apiPath="/language-centers"
      columns={[
        { key: "name", label: "Name (EN)" },
        { key: "nameAr", label: "Name (AR)" },
        { key: "location", label: "City" },
        { key: "state", label: "State" },
      ]}
      emptyRow={{ id: 0, name: "", nameAr: "", nameZh: "", nameMs: "", location: "", locationAr: "", locationZh: "", locationMs: "", state: "", logoUrl: "", aboutEn: "", aboutAr: "", aboutZh: "", aboutMs: "", heroImage: "", videoUrl: "", videoUrlAr: "", videoUrlZh: "", videoUrlMs: "", galleryUrl1: "", galleryUrl2: "", galleryUrl3: "", galleryUrl4: "", bannerUrl: "", locationMapUrl: "", scholarshipDescEn: "", scholarshipDescAr: "", scholarshipDescZh: "", scholarshipDescMs: "", scholarshipDiscount: "", scholarshipCriteria: "", admissionUndergradEn: "", admissionUndergradAr: "", admissionUndergradZh: "", admissionUndergradMs: "", admissionPostgradEn: "", admissionPostgradAr: "", admissionPostgradZh: "", admissionPostgradMs: "", registrationFeeMyr: 0, visaFeeMyr: 0, insuranceFeeMyr: 0, depositFeeMyr: 0, nextIntakeMonths: "", registrationDeadline: "" }}
      renderForm={(item, setItem) => (
        <>
          <SectionDivider label="Basic Information" />
          <FormField label="Name (English)" value={item.name} onChange={v => setItem({ ...item, name: v })} />
          <FormField label="Name (Arabic)" value={item.nameAr} onChange={v => setItem({ ...item, nameAr: v })} />
          <FormField label="Name (Chinese)" value={item.nameZh} onChange={v => setItem({ ...item, nameZh: v })} />
          <FormField label="Name (Malay)" value={item.nameMs} onChange={v => setItem({ ...item, nameMs: v })} />
          <FormField label="City (English)" value={item.location} onChange={v => setItem({ ...item, location: v })} />
          <FormField label="City (Arabic)" value={item.locationAr} onChange={v => setItem({ ...item, locationAr: v })} />
          <FormField label="City (Chinese)" value={item.locationZh} onChange={v => setItem({ ...item, locationZh: v })} />
          <FormField label="City (Malay)" value={item.locationMs} onChange={v => setItem({ ...item, locationMs: v })} />
          <FormField label="State" value={item.state} onChange={v => setItem({ ...item, state: v })} />
          <FormField label="Logo Code / URL" value={item.logoUrl} onChange={v => setItem({ ...item, logoUrl: v })} />

          <SectionDivider label="Description (shown on detail page)" />
          <TextAreaField label="About (English)" value={item.aboutEn} onChange={v => setItem({ ...item, aboutEn: v })} rows={4} />
          <TextAreaField label="About (Arabic)" value={item.aboutAr} onChange={v => setItem({ ...item, aboutAr: v })} rows={4} />
          <TextAreaField label="About (Chinese)" value={item.aboutZh} onChange={v => setItem({ ...item, aboutZh: v })} rows={4} />
          <TextAreaField label="About (Malay)" value={item.aboutMs} onChange={v => setItem({ ...item, aboutMs: v })} rows={4} />

          <SectionDivider label="Media (Hero, Video, Gallery)" />
          <FormField label="Hero Image URL" value={item.heroImage} onChange={v => setItem({ ...item, heroImage: v })} />
          <FormField label="YouTube Video ID (EN)" value={item.videoUrl} onChange={v => setItem({ ...item, videoUrl: v })} />
          <FormField label="YouTube Video ID (AR)" value={item.videoUrlAr} onChange={v => setItem({ ...item, videoUrlAr: v })} />
          <FormField label="YouTube Video ID (ZH)" value={item.videoUrlZh} onChange={v => setItem({ ...item, videoUrlZh: v })} />
          <FormField label="YouTube Video ID (MS)" value={item.videoUrlMs} onChange={v => setItem({ ...item, videoUrlMs: v })} />
          <FormField label="Gallery Image 1 URL" value={item.galleryUrl1} onChange={v => setItem({ ...item, galleryUrl1: v })} />
          <FormField label="Gallery Image 2 URL" value={item.galleryUrl2} onChange={v => setItem({ ...item, galleryUrl2: v })} />
          <FormField label="Gallery Image 3 URL" value={item.galleryUrl3} onChange={v => setItem({ ...item, galleryUrl3: v })} />
          
          <ExtendedFieldsForm item={item} setItem={setItem} type="languageCenter" />
          
          <SectionDivider label="Financial Fees (MYR)" />
          <FormField label="Registration Fee (MYR)" value={String(item.registrationFeeMyr || 0)} onChange={v => setItem({ ...item, registrationFeeMyr: parseInt(v) || 0 })} />
          <FormField label="Visa Fee (MYR)" value={String(item.visaFeeMyr || 0)} onChange={v => setItem({ ...item, visaFeeMyr: parseInt(v) || 0 })} />
          <FormField label="Insurance Fee (MYR)" value={String(item.insuranceFeeMyr || 0)} onChange={v => setItem({ ...item, insuranceFeeMyr: parseInt(v) || 0 })} />
          <FormField label="Deposit Fee (MYR)" value={String(item.depositFeeMyr || 0)} onChange={v => setItem({ ...item, depositFeeMyr: parseInt(v) || 0 })} />
          <SectionDivider label="Important Dates" />
          <FormField label="Next Intake Months (Comma separated: Apr,Jul,Oct)" value={item.nextIntakeMonths || ''} onChange={v => setItem({ ...item, nextIntakeMonths: v })} />
          <FormField label="Registration Deadline (YYYY-MM-DD)" value={item.registrationDeadline || ''} onChange={v => setItem({ ...item, registrationDeadline: v })} />
        </>
      )}
    />
  );
}

export default LanguageCentersManager;
