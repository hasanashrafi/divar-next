import categories from "@/utils/categoriesList";

export default function CategoryList() {

    return (
        <div className="bg-white rounded-lg shadow">
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-4">دسته‌بندی‌ها</h2>
                <div className="space-y-2">
                    {categories.map((category) => (
                        <a
                            key={category.name}
                            href="#"
                            className="flex items-center p-2 hover:bg-gray-50 rounded-md"
                        >
                            <span className="ml-2">{category.icon}</span>
                            <span>{category.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
} 