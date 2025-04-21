import cities from "@/utils/citiesList";
import Link from "next/link";

export default function CitiesList() {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg text-gray-600 mb-4">شهرهای پربازدید</h2>
            <div className="flex flex-wrap gap-2">
                {cities.map((city) => (
                    <Link
                        key={city}
                        href="/"
                        className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-sm transition-all duration-200 hover:bg-red-500 hover:text-white"
                    >
                        {city}
                    </Link>
                ))}
            </div>
        </div>
    );
} 