import cities from "@/utils/citiesList";

export default function CitiesList() {


    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">شهرهای پربازدید</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {cities.map((city) => (
                    <a
                        key={city}
                        href="#"
                        className="text-gray-700 hover:text-gray-900 text-center"
                    >
                        {city}
                    </a>
                ))}
            </div>
        </div>
    );
} 