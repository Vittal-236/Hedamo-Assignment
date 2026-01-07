
"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Inbox } from "lucide-react";
import { products, Product, ProductStatus } from "@/data/mock";
import { ProductCard } from "./ProductCard";
import { ProductDetail } from "./ProductDetail";
import { FilterToolbar } from "./FilterToolbar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Dashboard() {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState<ProductStatus | "All">("All");
    const [categoryFilter, setCategoryFilter] = useState<string>("All");
    const [sortKey, setSortKey] = useState<"date" | "name">("date");
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<Product[]>([]);

    // Simulate data fetching
    useEffect(() => {
        const timer = setTimeout(() => {
            setData(products);
            setIsLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    // Get unique categories
    const categories = useMemo(() => {
        const cats = new Set(data.map(p => p.category));
        return Array.from(cats).sort();
    }, [data]);

    // Filter and Sort Logic
    const filteredProducts = useMemo(() => {
        return data
            .filter((p) => {
                const matchesSearch =
                    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    p.producer.toLowerCase().includes(searchTerm.toLowerCase());
                const matchesStatus = statusFilter === "All" || p.status === statusFilter;
                const matchesCategory = categoryFilter === "All" || p.category === categoryFilter;
                return matchesSearch && matchesStatus && matchesCategory;
            })
            .sort((a, b) => {
                if (sortKey === "date") {
                    return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
                } else {
                    return a.name.localeCompare(b.name);
                }
            });
    }, [data, searchTerm, statusFilter, categoryFilter, sortKey]);

    return (
        <div className="min-h-screen p-8 max-w-7xl mx-auto font-sans text-stone-900 bg-stone-50/30">
            {/* Header */}
            <header className="mb-10 max-w-2xl">
                <h1 className="text-3xl font-bold tracking-tight text-stone-900">Product Disclosure Registry</h1>
                <p className="text-stone-500 mt-2 text-lg leading-relaxed">
                    Access transparent, producer-declared information about product origins and certifications.
                </p>
            </header>

            {/* Controls */}
            <FilterToolbar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                categoryFilter={categoryFilter}
                onCategoryChange={setCategoryFilter}
                statusFilter={statusFilter}
                onStatusChange={setStatusFilter}
                sortKey={sortKey}
                onSortChange={() => setSortKey(prev => prev === "date" ? "name" : "date")}
                categories={categories}
            />

            {/* Product Grid */}
            <div className="min-h-[400px]">
                {isLoading ? (
                    // Skeleton Grid
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Array.from({ length: 9 }).map((_, i) => (
                            <div key={i} className="h-[200px] bg-white rounded-lg border border-stone-200 p-6 flex flex-col justify-between">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div className="h-6 bg-stone-100 rounded w-3/4 animate-pulse" />
                                        <div className="h-5 bg-stone-100 rounded w-16 animate-pulse" />
                                    </div>
                                    <div className="h-4 bg-stone-100 rounded w-1/3 animate-pulse" />
                                    <div className="h-4 bg-stone-100 rounded w-1/2 animate-pulse" />
                                </div>
                                <div className="pt-4 border-t border-stone-100 flex justify-between items-center">
                                    <div className="h-3 bg-stone-100 rounded w-24 animate-pulse" />
                                    <div className="h-3 bg-stone-100 rounded w-20 animate-pulse" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.map((product, index) => (
                            <div
                                key={product.id}
                                className={cn("animate-fade-in")}
                                style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'both' }}
                            >
                                <ProductCard
                                    product={product}
                                    onClick={setSelectedProduct}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    // Empty State
                    <div className="flex flex-col items-center justify-center py-24 bg-white rounded-2xl border border-dashed border-stone-300">
                        <div className="bg-stone-50 p-4 rounded-full mb-4 ring-1 ring-stone-900/5">
                            <Inbox className="h-8 w-8 text-stone-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-stone-900">No products found</h3>
                        <p className="text-stone-500 mt-1 max-w-sm text-center">
                            We couldn't find any products matching your current filters.
                        </p>
                        <Button
                            variant="link"
                            className="mt-4 text-stone-900 underline-offset-4"
                            onClick={() => {
                                setSearchTerm("");
                                setStatusFilter("All");
                                setCategoryFilter("All");
                            }}
                        >
                            Clear all filters
                        </Button>
                    </div>
                )}
            </div>

            {/* Detail Panel */}
            <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${selectedProduct ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                {selectedProduct && (
                    <ProductDetail
                        product={selectedProduct}
                        onClose={() => setSelectedProduct(null)}
                    />
                )}
            </div>
        </div>
    );
}
