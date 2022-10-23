import BusinessIcon from "public/images/business-dev-icon.svg";
import Link from "next/link";

function CategoryCard() {
    return (
        <>
            <div className="category-card w-full sm:w-[172px] min-h-[219px] max-h-56 border-[1px] px-4 py-6 border-gray-200 hover:border-0 relative">
                <div className="w-full mb-10">
                    <BusinessIcon className="w-[46px] h-[46px] category-icon fill-slate-500" />
                </div>
                <h4 className="category-name text-lg">Businness Development</h4>
                <span className="category-courses mt-3 text-sm text-gray-400">
                    12,493 Courses
                </span>
                <Link href="/">
                    <a className="link-wrapped"></a>
                </Link>
            </div>
        </>
    );
}

export default CategoryCard;
