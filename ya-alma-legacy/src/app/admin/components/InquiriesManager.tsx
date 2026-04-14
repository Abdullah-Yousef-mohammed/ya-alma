"use client";
import React, { useState, useEffect } from "react";
import { 
  Building2, Languages, BookOpen, Settings, 
  Plus, Pencil, Trash2, Save, X, ChevronUp, ChevronDown, FolderPlus, Code, Monitor,
  LayoutDashboard, Image as ImageIcon, FileText, Menu, Newspaper, GraduationCap, Briefcase, MessageCircle, Play, Star,
  Globe, Activity, TrendingUp, Users
} from "lucide-react";
import { API, authFetch } from "../types"; // We will create this
import { FormField, SectionDivider, CrudTable, TextAreaField } from "./shared";
import type { University, LanguageCenter, Course, Testimonial, BlogPost, SiteSettings } from "../types";

function InquiriesManager() {
  return (
    <CrudTable<any>
      title="Contact Inquiries"
      apiPath="/contact-submissions"
      columns={[
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "interest", label: "Interest" },
        { key: "submittedAt", label: "Submitted At", render: (p) => new Date(p.submittedAt).toLocaleDateString() },
      ]}
      emptyRow={{ id: 0, name: "", email: "", phone: "", country: "", interest: "degree", message: "", submittedAt: new Date().toISOString() }}
      renderForm={(item, setItem) => (
        <>
          <SectionDivider label="User Info" />
          <FormField label="Name" value={item.name} onChange={v => setItem({ ...item, name: v })} />
          <FormField label="Email" value={item.email} onChange={v => setItem({ ...item, email: v })} />
          <FormField label="Phone" value={item.phone} onChange={v => setItem({ ...item, phone: v })} />
          <FormField label="Country" value={item.country} onChange={v => setItem({ ...item, country: v })} />
          <SectionDivider label="Inquiry Details" />
          <FormField label="Interest" value={item.interest} onChange={v => setItem({ ...item, interest: v })} />
          <TextAreaField label="Message" value={item.message} onChange={v => setItem({ ...item, message: v })} rows={4} />
        </>
      )}
    />
  );
}

export default InquiriesManager;
