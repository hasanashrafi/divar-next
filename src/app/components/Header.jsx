export default function Header() {
    return (
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img src="/divar.svg" alt="Divar" className="h-14 w-auto" />
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex space-x-8 space-x-reverse">
                        <a href="#" className="text-gray-700 hover:text-gray-900">ثبت آگهی</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">درباره دیوار</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">دریافت برنامه</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">پشتیبانی</a>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button className="text-gray-500 hover:text-gray-600">
                            <span className="sr-only">منو</span>
                            {/* Add menu icon here */}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
} 