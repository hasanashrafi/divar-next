export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/divar.svg" alt="Divar" className="h-14 w-auto" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-2 ">
            <a
              href="#"
              className="text-white bg-red-800 p-2 rounded-md hover:bg-red-900 transition-all ease-in-out text-sm"
            >
              ثبت آگهی
            </a>
           
            <a
              href="#"
              className="text-white bg-red-800 p-2 rounded-md hover:bg-red-900 transition-all ease-in-out text-sm"
            >
               ورود | ثبت نام
            </a>

          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-gray-600 rounded-lg shadow-md py-2 px-4"
            >
              <span className="sr-only">منو</span>
              {/* Add menu icon here */}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}