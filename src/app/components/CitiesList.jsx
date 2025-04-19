import cities from "@/utils/citiesList";
import Link from "next/link";

export default function CitiesList() {


    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg text-gray-600  mb-4">شهرهای پربازدید</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {cities.map((city) => (
                    <Link
                        key={city}
                        href="/"
                        className="text-gray-700 hover:text-gray-900 hover:bg-gray-300 p-2 rounded-md ease-in-out transition-all text-center"
                    >
                        {city}
                    </Link>
                ))}
            </div>
        </div>
    );
} 