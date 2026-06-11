"use client";
import Stripe from "stripe";
import {useEffect, useState} from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

import Link from "next/link";




interface Props {
    products:Stripe.Product[]
}
function Carousel({products}:Props) {
    const [current, setCurrent] = useState<number>(0);
    useEffect(() => {
        const interval = setInterval(()=>{
            setCurrent((prevState) => (prevState + 1)%products.length);
        },3000)
        return () => clearInterval(interval)
    },[products])
    const currentProduct = products[current];
    const price = currentProduct.default_price as Stripe.Price;

    return  (
        <Link href={`products/${currentProduct.id}`} className="group grid rounded-md border md:grid-cols-2">
            <figure className="relative aspect-square w-120 overflow-hidden rounded-tl-md rounded-bl-md object-cover">
                <Image
                    fill
                    className="object-cover transition-all duration-300 group-hover:opacity-80"
                    src={currentProduct.images[0]}
                    alt={currentProduct.name}
                />
            </figure>
            <div className="flex flex-col justify-evenly">
                <div className="space-y-2">
                    <Badge variant="secondary" className="text-xl">{currentProduct.type}</Badge>
                    <p className="text-3xl font-semibold">{currentProduct.name}</p>
                    <div className="flex items-center justify-center bg-neutral-100 w-40">
                        {price.unit_amount && <p className="lg:text-xl text-black">${price.unit_amount/100}</p>}
                    </div>
                </div>

                <div className="flex space-y-2">
                    <p className="text-xl font-semibold">{currentProduct.description}</p>
                </div>
            </div>
        </Link>
    );
}

export default Carousel;