import categories from "@/utils/categoriesList";
import Link from "next/link";
import Image from "next/image";

export default function CategoryList() {
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-gray-600 font-open-sans text-lg mb-4">
                دسته بندی ها
            </h2>
            <div className="flex flex-wrap justify-start md:flex  lg:flex-col items-start gap-4">
                {categories.map((category) => (
                    <Link
                        key={category.id}
                        href={`/categories/${category.name}`}
                        className="flex p-1.5 lg:w-full w-40 items-center gap-x-1  rounded-lg transition-all hover:bg-gray-100 duration-200 hover:transform hover:-translate-y-1 hover:shadow-md cursor-pointer"
                    >
                        <Image
                            src={category.image_url}
                            alt={category.name}
                            width={48}
                            height={48}
                            className="mb-2"
                        />
                        <span className="text-sm font-medium text-gray-700 text-center">
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}