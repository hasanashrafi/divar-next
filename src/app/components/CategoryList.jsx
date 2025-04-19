import categories from "@/utils/categoriesList";
import Link from "next/link";
import Image from "next/image";

export default function CategoryList() {
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-gray-600 font-open-sans text-lg mb-4">
                دسته بندی ها
            </h2>
            <div className="space-y-2">
                {categories.map((category) => (
                    <Link
                        key={category.name}
                        href="#"
                        className="flex items-center p-2 hover:bg-gray-100 rounded-md transition duration-200 ease-in-out"
                    >
                        {category.icon && category.icon.startsWith("http") ? (
                            <Image
                                src={category.icon}
                                alt={category.name}
                                width={24}
                                height={24}
                                className="ml-2"
                            />
                        ) : (
                            <span className="ml-2">{category.icon}</span>
                        )}
                        <span className="text-gray-600 font-open-sans ">
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}