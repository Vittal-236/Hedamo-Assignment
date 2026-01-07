
import React from "react";
import { Search, ChevronDown, ArrowUpDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ProductStatus } from "@/data/mock";

interface FilterToolbarProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
    categoryFilter: string;
    onCategoryChange: (value: string) => void;
    statusFilter: ProductStatus | "All";
    onStatusChange: (value: ProductStatus | "All") => void;
    sortKey: "date" | "name";
    onSortChange: () => void;
    categories: string[];
}

export const FilterToolbar = ({
    searchTerm,
    onSearchChange,
    categoryFilter,
    onCategoryChange,
    statusFilter,
    onStatusChange,
    sortKey,
    onSortChange,
    categories
}: FilterToolbarProps) => {
    return (
        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-between items-start sm:items-center bg-stone-50/50 p-4 rounded-xl border border-stone-200/60">
            <div className="relative w-full sm:w-96 group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400 group-focus-within:text-stone-600 transition-colors" />
                <Input
                    placeholder="Search products or producers..."
                    className="pl-9 bg-white transition-shadow duration-200 focus-visible:ring-2 focus-visible:ring-stone-400/50 border-stone-200"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    aria-label="Search filter"
                />
            </div>

            <div className="flex flex-wrap gap-3 w-full sm:w-auto">
                <div className="relative">
                    <select
                        className="h-10 rounded-md border border-stone-200 bg-white pl-3 pr-8 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400 transition-all duration-200 appearance-none cursor-pointer hover:bg-stone-50 hover:border-stone-300 w-full sm:w-auto min-w-[140px]"
                        value={categoryFilter}
                        onChange={(e) => onCategoryChange(e.target.value)}
                        aria-label="Filter by Category"
                    >
                        <option value="All">All Categories</option>
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400 pointer-events-none" />
                </div>

                <div className="relative">
                    <select
                        className="h-10 rounded-md border border-stone-200 bg-white pl-3 pr-8 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400 transition-all duration-200 appearance-none cursor-pointer hover:bg-stone-50 hover:border-stone-300 w-full sm:w-auto min-w-[140px]"
                        value={statusFilter}
                        onChange={(e) => onStatusChange(e.target.value as ProductStatus | "All")}
                        aria-label="Filter by Status"
                    >
                        <option value="All">All Statuses</option>
                        <option value="Published">Published</option>
                        <option value="Submitted">Submitted</option>
                        <option value="Draft">Draft</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400 pointer-events-none" />
                </div>

                <Button
                    variant="outline"
                    onClick={onSortChange}
                    className="flex items-center gap-2 transition-all duration-200 hover:bg-stone-50 bg-white border-stone-200 text-stone-700 min-w-[140px]"
                >
                    <ArrowUpDown className="h-4 w-4" />
                    Sort: {sortKey === "date" ? "Date" : "Name"}
                </Button>
            </div>
        </div>
    );
};
