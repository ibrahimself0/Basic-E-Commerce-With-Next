"use client";
import Stripe from "stripe";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import { Heart, Minus, Plus} from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator} from "@base-ui/react";

interface Props{
    product: Stripe.Product
}
function ProductDetail({product}: Props) {
    const price = product.default_price as Stripe.Price;
    return (
        <section className="w-full ">
            <div className="mx-auto max-w-7xl px-4 py-16 lg:px-12 lg:py-24 xl:px-16">
                <div className="grid grid-cols-1 items-start justify-center gap-6 lg:grid-cols-12">
                    {/* Image Gallery */}
                    <div className="lg:col-span-7">
                        {/* Desktop: Original Layout */}
                        <div className="hidden md:flex flex-col gap-6 md:flex-row h-full">
                            {/* Main Image */}
                            <div className="bg-muted aspect-3/4 flex-1 overflow-hidden rounded-xl md:aspect-auto">
                                <Image
                                    src={product.images[0]}
                                    alt={product.name}
                                    objectFit="cover"
                                    width={450}
                                    height={450}
                                    className="group-hover:opacity-90 transition-opacity duration-300 rounded-t-lg"
                                />
                            </div>

                        </div>

                    </div>


                    <div className="flex flex-col gap-8 lg:col-span-5 lg:pl-6">
                        <div className="flex flex-col gap-5">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex flex-col gap-3">
                                    <h2 className="text-foreground text-3xl font-semibold leading-tight tracking-tight lg:text-4xl">
                                        {product.name}
                                    </h2>

                                </div>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="size-10 shrink-0 rounded-full border-border cursor-pointer"
                                    onClick={()=>{}}
                                >
                                    <Heart
                                        className={cn(
                                            "size-4 transition-colors",
                                             "fill-destructive text-destructive"
                                        )}
                                    />
                                </Button>
                            </div>

                            <p className="text-muted-foreground text-base leading-relaxed">
                                {product.description}
                            </p>

                            <div className="flex items-center gap-4 py-1">

                                {(
                                    <>
                                    {price && price.unit_amount &&
                                        <span className="text-muted-foreground text-xl font-semibold">
                                            {(price.unit_amount/100).toFixed(2)}
                                        </span>
                                    }
                                    </>
                                )}
                            </div>
                        </div>

                        <Separator className="bg-border" />

                        <div className="flex flex-col gap-5">
                            <div className="flex gap-4">
                                <div className="border-border bg-background flex h-12 items-center overflow-hidden rounded-full border shadow-xs">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="hover:bg-muted h-full shrink-0 rounded-none px-4 cursor-pointer"
                                        onClick={() => {}}
                                    >
                                        <Minus className="size-4" />
                                    </Button>
                                    <div className="border-border flex h-full min-w-14 items-center justify-center border-x text-sm font-medium">
                                        0
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="hover:bg-muted h-full shrink-0 rounded-none px-4 cursor-pointer"
                                        onClick={() => {}}
                                    >
                                        <Plus className="size-4" />
                                    </Button>
                                </div>
                                <Button
                                    variant="outline"
                                    className="border-border hover:bg-muted/50 flex-1 rounded-full h-12 font-medium cursor-pointer dark:bg-background shadow-xs"
                                    size="lg"
                                    onClick={()=>{}}
                                >
                                    Add to cart
                                </Button>
                            </div>
                            {price && price.unit_amount && (
                                <Button
                                className="w-full rounded-full h-12 font-medium cursor-pointer hover:bg-primary/80"
                                size="lg"
                                >
                                Buy at ${(price.unit_amount /100).toFixed(2)}
                            </Button>)}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductDetail;