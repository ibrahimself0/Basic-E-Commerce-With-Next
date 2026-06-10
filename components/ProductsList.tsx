"use client";

import Stripe from "stripe";

import { useState } from "react";
import {ProductCard} from "@/components/ProductCard";



interface Props {
    products: Stripe.Product[];
}

export const ProductList = ({ products }: Props) => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const filteredProduct = products.filter((product) => {
        const term = searchTerm.toLowerCase();
        const nameMatch = product.name.toLowerCase().includes(term);
        const descriptionMatch = product.description
            ? product.description.toLowerCase().includes(term)
            : false;

        return nameMatch || descriptionMatch;
    });

    return (
        <section className="py-12 md:py-16 lg:py-20">
                <div className="mb-6 flex justify-center">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search products..."
                        className="w-full max-w-md rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex flex-col gap-8">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-2xl font-semibold text-foreground">
                            Featured products
                        </h2>
                        <p className="text-base text-muted-foreground">
                            Handpicked by our team
                        </p>
                    </div>
                </div>

                <div className="w-full overflow-x-auto xl:scrollbar-none xl:[-ms-overflow-style:none] xl:[&::-webkit-scrollbar]:hidden">
                    <div className="flex gap-6">
                        {filteredProduct.map((product, index) => (
                            <div key={index} className="inline-block min-w-67.5 max-w-67.5 w-full whitespace-normal shrink-0">
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};