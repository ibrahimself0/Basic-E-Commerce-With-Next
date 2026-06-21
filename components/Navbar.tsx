"use client";

import Link from "next/link";
import {
    ShoppingCartIcon,
    Bars3Icon,
    XMarkIcon,
    MapPinIcon,
    MagnifyingGlassIcon,
    ChevronDownIcon,

} from "@heroicons/react/24/outline";
import { useCartStore } from "@/store/cart-store";
import { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";



export const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);
    const { items } = useCartStore();

    const handleResize = useCallback(() => {
        if (window.innerWidth >= 768) {
            setMobileOpen(false);
        }
    }, []);


    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [handleResize]);

    const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);
    return (
        <nav className="sticky top-0 z-50 bg-background shadow">
            <div className="container mx-auto flex items-center py-4 ">
                <Link href="/" className="hover:text-blue-600 shrink-0">
                    <Image
                        src="/logo-removebg-preview.png"
                        alt="logo"
                        width={70}
                        height={50}
                    />
                </Link>
                <div className="flex items-center justify-between ml-10">
                    <MapPinIcon className="h-7 w-7"/>
                    <div className="flex-col">
                        <h2 className="text-xs">Deliver to</h2>
                        <h2>Damascus</h2>
                    </div>
                </div>

                <div className="relative w-full max-w-3xl ml-10 mr-10">

                    <input
                        type="text"
                        placeholder="Search Amazoon.sy"
                        className="w-full rounded px-4 pl-24 pr-14 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <div className="absolute left-0 top-0 h-full flex items-center px-4 bg-[#F3F3F3] rounded-l">
                        <h2>All</h2>
                        <ChevronDownIcon className="h-5 w-5 text-black" />
                    </div>
                    <div className="absolute right-0 top-0 h-full flex items-center px-4 bg-[#F4BF76] rounded-r">
                        <MagnifyingGlassIcon className="h-5 w-5 text-black" />
                    </div>

                </div>

                <div className="flex items-center cursor-pointer mr-10">
                    <Image
                        src="/Flag_of_Syria_(2025-).svg"
                        alt="flag"
                        width={50}
                        height={50}
                    />
                    <ChevronDownIcon className="h-6 w-6"/>
                </div>
                <div className="flex-col">
                    <h2>Hello, sign in</h2>
                    <div className="flex items-center justify-between cursor-pointer">
                        <h2>Accounts&Lists</h2>
                        <ChevronDownIcon className="h-6 w-6"/>
                    </div>
                </div>
                <h2 className="mr-12 ml-12">Orders</h2>

                <div className="flex items-center space-x-4">
                    <Link href="/checkout" className="relative">
                        <ShoppingCartIcon className="h-6 w-6" />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                    <Button
                        variant="ghost"
                        className="md:hidden"
                        onClick={() => setMobileOpen((prev) => !prev)}
                    >
                        {mobileOpen ? (
                            <XMarkIcon className="h-6 w-6" />
                        ) : (
                            <Bars3Icon className="h-6 w-6" />
                        )}
                    </Button>
                </div>
            </div>
            {mobileOpen && (
                <nav className="md:hidden bg-white shadow-md">
                    <ul className="flex flex-col p-4 space-y-2">
                        <li>
                            <Link href="/" className="block hover:text-blue-600">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/products" className="block hover:text-blue-600">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link href="/checkout" className="block hover:text-blue-600">
                                Checkout
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </nav>
    );
};