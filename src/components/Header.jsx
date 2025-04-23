"use client"
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white border-b-2 border-gray-200 px-1 ">
            <div className=" mx-auto px-4 sm:px-6 lg:px-4 py-2">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img src="/divar.svg" alt="Divar" className="h-14 w-auto" />
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                       
                        <div className="flex space-x-2">
                            <Link
                                href="/create-ad"
                                className="text-white bg-red-800 p-2 rounded-md hover:bg-red-900 transition-all ease-in-out text-sm"
                            >
                                ثبت آگهی
                            </Link>

                            <Link
                                href="/login"
                                className="text-white bg-red-800 p-2 rounded-md hover:bg-red-900 transition-all ease-in-out text-sm"
                            >
                                ورود | ثبت نام
                            </Link>
                        </div>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden p-1">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 hover:text-gray-700 rounded-lg shadow-md py-2 px-4"
                        >
                            <RxHamburgerMenu className="text-3xl" />
                        </button>
                    </div>

                    {/* side menu */}
                    <div className={`fixed top-0 flex p-2 flex-col gap-y-2 min-h-screen bg-gray-100 right-0 w-1/2 h-full shadow-lg transition-all duration-300 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
                        <button
                            onClick={() => toggleMenu()}
                            className="self-end text-gray-700 hover:text-gray-900 mb-4"
                        >
                            ✕
                        </button>
                        <Link href="/" className="text-gray-700 hover:text-gray-900 p-2">
                            ثبت آگهی
                        </Link>
                        <Link href="/" className="text-gray-700 hover:text-gray-900 p-2">
                            ورود | ثبت نام
                        </Link>
                    </div>
                    {/* Overlay */}
                    {isMenuOpen && (
                        <div
                            className="fixed inset-0  z-40"
                            onClick={() => toggleMenu()}
                        />
                    )}
                </div>
            </div>
        </header>
    );
}