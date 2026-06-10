import Link from "next/link";
import Stripe from "stripe";
import { Card, CardContent} from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import {cn} from "@/lib/utils";

interface Props {
    product: Stripe.Product;
}

export const ProductCard = ({ product }: Props) => {
    const price = product.default_price as Stripe.Price;

    return (
        <Link href={`/products/${product.id}`} className="block h-full">
            <div className="flex items-center justify-center">
                <div className="w-67.5 shrink-0">
                    <Card className="p-0 ring-0 gap-0 overflow-hidden border border-border bg-card rounded-2xl">
                        <div className="relative rounded-t-2xl h-55 overflow-hidden flex items-center justify-center">
                            <Image
                                src={product.images[0]}
                                alt={product.name}
                                layout="fill"
                                objectFit="cover"
                                className="group-hover:opacity-90 transition-opacity duration-300 rounded-t-lg"
                            />
                            <Button
                                variant="secondary"
                                size="icon"
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                                className={cn(
                                    "absolute top-3 right-3 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-all"
                                )}
                            >
                            </Button>
                        </div>
                        <CardContent className="p-5 flex flex-col gap-3">
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-normal text-muted-foreground">
                                    {product.type}
                                </p>
                                <p className="text-lg font-medium text-foreground line-clamp-1">
                                    {product.name}
                                </p>

                                <div className="flex items-baseline gap-2">
                                    <span className="text-lg font-medium text-foreground">
                                        {price && price.unit_amount && <p>${price.unit_amount/100}</p>}
                                    </span>

                                </div>
                            </div>
                            <Button
                                variant="outline"
                                className="w-full h-10 rounded-lg font-medium border-border transition-colors duration-300 dark:bg-background dark:border-border cursor-pointer"
                            >
                                View Details
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Link>
    );
};