import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-green-600 flex items-center justify-center text-white font-bold">
                        প
                    </div>
                    <span className="font-bold text-lg hidden sm:block">
                        Poster Maker
                    </span>
                </Link>

                {/* Nav Links */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <Link href="/templates" className="hover:text-green-600">
                        টেমপ্লেট
                    </Link>
                    <Link href="/how-it-works" className="hover:text-green-600">
                        কীভাবে কাজ করে
                    </Link>
                    <Link href="/about" className="hover:text-green-600">
                        আমাদের সম্পর্কে
                    </Link>
                </nav>

                {/* Auth Buttons */}
                <div className="flex items-center gap-2">
                    <Button variant="ghost" asChild>
                        <Link href="/login">লগইন</Link>
                    </Button>
                    <Button className="bg-green-600 hover:bg-green-700" asChild>
                        <Link href="/register">রেজিস্টার</Link>
                    </Button>
                </div>
            </div>
        </header>
    );
}
