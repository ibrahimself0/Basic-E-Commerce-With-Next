import Link from "next/link";

function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-black shadow backdrop-blur-md ">
            <div className="container mx-auto flex items-center justify-between px-4 py-4">
                <Link href="/" className="hover:text-blue-600 text-white">
                    IBRA Store
                </Link>
                <div className="hidden md:flex space-x-6 ml-300 md:ml-auto">
                    <Link href="/" className="hover:text-blue-600 text-white">
                        Home
                    </Link>
                    <Link href="/products" className="hover:text-blue-600 text-white">
                        Products
                    </Link>
                    <Link href="/checkout" className="hover:text-blue-600 text-white">
                        Checkout
                    </Link>
                </div>
                <div className="flex items-center space-x-4"></div>
            </div>

        </nav>
    );
}

export default Navbar;