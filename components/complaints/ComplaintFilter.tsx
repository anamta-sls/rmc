"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import { SearchIcon } from "@/components/ui/Icons";
import type { ComplaintFilter as FilterType } from "@/types/complaint";

interface ComplaintFilterProps {
  onFilter: (filter: FilterType) => void;
}

const statusOptions = [
  { value: "", label: "All Statuses" },
  { value: "pending", label: "Pending" },
  { value: "in_progress", label: "In Progress" },
  { value: "resolved", label: "Resolved" },
  { value: "closed", label: "Closed" },
];

const categoryOptions = [
  { value: "", label: "All Categories" },
  { value: "road", label: "Road & Infrastructure" },
  { value: "water", label: "Water Supply" },
  { value: "sanitation", label: "Sanitation" },
  { value: "garbage", label: "Garbage & Waste" },
  { value: "streetlight", label: "Street Lights" },
  { value: "other", label: "Other" },
];

export default function ComplaintFilter({ onFilter }: ComplaintFilterProps) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState("");

  const handleFilter = () => {
    onFilter({
      search: search || undefined,
      status: (status as FilterType["status"]) || undefined,
      category: (category as FilterType["category"]) || undefined,
    });
  };

  const handleReset = () => {
    setSearch("");
    setStatus("");
    setCategory("");
    onFilter({});
  };

  return (
    <div className="bg-white rounded-2xl border border-[#EEF2F7] shadow-sm p-4 mb-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          placeholder="Search by complaint number or description…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          leftIcon={<SearchIcon size={16} />}
          className="flex-1"
          onKeyDown={(e) => e.key === "Enter" && handleFilter()}
        />
        <Select
          options={statusOptions}
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="sm:w-44"
        />
        <Select
          options={categoryOptions}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="sm:w-44"
        />
        <div className="flex gap-2">
          <Button onClick={handleFilter} size="md">Filter</Button>
          <Button onClick={handleReset} variant="ghost" size="md">Reset</Button>
        </div>
      </div>
    </div>
  );
}
