
import React, { useEffect, useRef } from "react";
import { Product } from "@/data/mock";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, AlertTriangle, CheckCircle, FileText, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductDetailProps {
    product: Product;
    onClose: () => void;
}

export const ProductDetail = ({ product, onClose }: ProductDetailProps) => {
    const panelRef = useRef<HTMLDivElement>(null);

    // Focus trap and escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKeyDown);
        panelRef.current?.focus();
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-end sm:items-center" role="dialog" aria-modal="true" aria-labelledby="detail-title">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-stone-900/40 backdrop-blur-[2px] transition-opacity duration-300"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Panel */}
            <div
                ref={panelRef}
                className="relative w-full sm:w-[600px] bg-white shadow-2xl h-full overflow-y-auto transform transition-transform duration-300 ease-in-out border-l border-stone-200 flex flex-col focus:outline-none"
                tabIndex={-1}
            >
                {/* Mandatory Disclaimer Banner */}
                <div className="bg-amber-50 border-b border-amber-200/60 px-6 py-4 flex items-start gap-4">
                    <AlertTriangle className="h-5 w-5 text-amber-700 mt-0.5 shrink-0" aria-hidden="true" />
                    <div>
                        <h4 className="text-sm font-bold text-amber-900 uppercase tracking-wide text-[11px] mb-1">Important Notice</h4>
                        <p className="text-sm text-amber-800 leading-snug font-medium">
                            "This page presents producer-declared information; it is not certification or verification."
                        </p>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                    <div className="p-8">
                        {/* Header */}
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h2 id="detail-title" className="text-2xl font-bold text-stone-900 tracking-tight leading-tight">{product.name}</h2>
                                <p className="text-stone-500 mt-2 flex items-center gap-2 text-sm">
                                    <span className="font-mono bg-stone-100 px-2 py-0.5 rounded text-stone-600 border border-stone-200">{product.id}</span>
                                </p>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={onClose}
                                className="rounded-full hover:bg-stone-100 -mr-2"
                                aria-label="Close details"
                            >
                                <X className="h-5 w-5" />
                            </Button>
                        </div>

                        {/* Status Line */}
                        <div className="mb-8 flex flex-wrap items-center gap-4 border-b border-stone-100 pb-6">
                            <Badge variant={product.status.toLowerCase() as any} className="text-sm px-3 py-1">
                                {product.status}
                            </Badge>
                            <span className="text-sm text-stone-400 flex items-center gap-1">
                                Last updated: <span className="font-mono text-stone-600">{product.lastUpdated}</span>
                            </span>
                        </div>

                        {/* Disclosure Summary */}
                        <div className="mb-8 rounded-xl border border-stone-200 bg-stone-50/80 p-6">
                            <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-5 flex items-center gap-2">
                                <CheckCircle className="h-3.5 w-3.5 text-stone-500" />
                                Disclosure Summary
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                                <div>
                                    <label className="text-[11px] font-semibold uppercase tracking-wide text-stone-500 block mb-1">Declared By</label>
                                    <div className="text-sm font-medium text-stone-900">{product.producer}</div>
                                </div>
                                <div>
                                    <label className="text-[11px] font-semibold uppercase tracking-wide text-stone-500 block mb-1">Origin</label>
                                    <div className="text-sm text-stone-900">{product.origin}</div>
                                </div>
                                <div>
                                    <label className="text-[11px] font-semibold uppercase tracking-wide text-stone-500 block mb-1">Declaration Date</label>
                                    <div className="text-sm text-stone-900 tabular-nums">{product.declaredDate}</div>
                                </div>
                                <div>
                                    <label className="text-[11px] font-semibold uppercase tracking-wide text-stone-500 block mb-1">Evidence</label>
                                    <div className="text-sm text-stone-900 flex items-center gap-2">
                                        {product.evidenceCount > 0 ? (
                                            <div className="flex items-center gap-2 text-stone-900 font-medium">
                                                <FileText className="h-4 w-4 text-stone-400" />
                                                <span>{product.evidenceCount} Documents attached</span>
                                            </div>
                                        ) : (
                                            <span className="text-stone-400 italic">No public evidence attached</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-stone-900 mb-3 tracking-tight">Product Description</h3>
                            <p className="text-stone-600 leading-relaxed text-[15px]">
                                {product.description}
                            </p>
                        </div>

                        {/* Version History */}
                        <div className="pt-6 border-t border-stone-200">
                            <h3 className="text-lg font-bold text-stone-900 mb-6 tracking-tight">Version History</h3>
                            <div className="relative border-l-2 border-stone-100 ml-3 space-y-8 pb-4">
                                {product.history.map((event, i) => (
                                    <div key={i} className="ml-8 relative group">
                                        {/* Dot */}
                                        <div className={cn(
                                            "absolute -left-[39px] top-1.5 h-3.5 w-3.5 rounded-full border-[3px] bg-white transition-colors duration-200 z-10",
                                            i === 0 ? "border-stone-900 bg-stone-900" : "border-stone-300 group-hover:border-stone-400"
                                        )}
                                        />
                                        <div className="flex flex-col">
                                            <div className="flex justify-between items-baseline mb-1">
                                                <span className={cn(
                                                    "font-semibold text-sm",
                                                    i === 0 ? "text-stone-900" : "text-stone-600"
                                                )}>{event.action}</span>
                                                <span className="text-xs text-stone-500 font-mono bg-stone-50 px-2 py-0.5 rounded border border-stone-100">{event.date}</span>
                                            </div>
                                            <p className="text-xs text-stone-500">
                                                <span className="text-stone-400">Action performed by:</span> {event.user}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-stone-200 p-6 bg-stone-50 mt-auto">
                    <p className="text-xs text-stone-400 text-center max-w-sm mx-auto leading-relaxed">
                        Data provided for transparency purposes required by Regulation 21.B. Not for commercial warranty.
                    </p>
                </div>
            </div>
        </div>
    );
};
