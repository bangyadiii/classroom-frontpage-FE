import React from "react";
import CategoryCard from "src/components/CategoryCard";

function Category() {
    return (
        <div className="">
            <div>
                <span className="text-gray-400 text-sm">Category</span>
                <h4 className="text-2xl font-medium">
                    Explore & <span className="text-teal-500">Learn</span>
                </h4>
            </div>
            <div className="mt-8 flex flex-wrap gap-7 justify-center sm:justify-between items-center">
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
            </div>
        </div>
    );
}

export default Category;
