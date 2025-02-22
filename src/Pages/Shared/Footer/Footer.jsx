import React from "react";
import Image from "next/image";
import Link from "next/link";

const navigation = [
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Portfolios", href: "#" },
    { name: "Contact", href: "#" },
];

export default function Footer() {
    return (
        <footer className="bg-[#0F0A1F] py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center space-y-8">
                    {/* Logo */}
                    <Link href="/" className="block">
                        <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-22%20211653-zrNIw1tKbupil0XxC2YAE1P0AA21dr.png"
                            alt="Logo"
                            width={60}
                            height={60}
                            className="w-12 h-12"
                        />
                    </Link>

                    {/* Navigation */}
                    <nav>
                        <ul className="flex flex-wrap justify-center gap-8">
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-white hover:text-purple-400 transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Copyright */}
                    <div className="text-gray-400 text-sm">
                        © 2024 All rights reserved by{" "}
                        <Link href="#" className="text-white hover:text-purple-400 transition-colors">
                            ThemeJunction
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
