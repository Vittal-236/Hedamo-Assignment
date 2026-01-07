
import React from "react";
import { Product } from "@/data/mock";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Clock, User, Tag } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
    product: Product;
    onClick: (product: Product) => void;
}

export const ProductCard = ({ product, onClick }: ProductCardProps) => {
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick(product);
        }
    };

    return (
        <Card
            className="group relative cursor-pointer hover:shadow-md transition-all duration-200 border-stone-200 hover:border-stone-300 active:border-stone-400 focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:outline-none overflow-hidden"
            onClick={() => onClick(product)}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            role="button"
            aria-label={`View details for ${product.name}`}
        >
            <div className="p-6 flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                    <div className="flex-1 pr-4">
                        <h3 className="font-semibold text-lg text-stone-900 leading-tight group-hover:text-stone-700 transition-colors">
                            {product.name}
                        </h3>
                        <div className="mt-2 flex items-center gap-2">
                            <span className="inline-flex items-center rounded-md bg-stone-100 px-2 py-1 text-xs font-medium text-stone-600 ring-1 ring-inset ring-stone-500/10">
                                {product.category}
                            </span>
                        </div>
                    </div>
                    <Badge variant={product.status.toLowerCase() as "published" | "submitted" | "draft"}>
                        {product.status}
                    </Badge>
                </div>

                {/* Content */}
                <div className="mt-auto space-y-3">
                    <div className="flex items-center text-sm text-stone-500">
                        <User className="h-4 w-4 mr-2 text-stone-400" />
                        <span className="truncate">By {product.producer}</span>
                    </div>

                    <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400">
                        <div className="flex items-center">
                            <Clock className="h-3.5 w-3.5 mr-1.5" />
                            Updated {product.lastUpdated}
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};
