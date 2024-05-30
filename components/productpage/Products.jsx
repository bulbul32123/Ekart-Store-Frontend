import BrandFilterOptions from '@/components/BrandFilterOptions';
import ColorFilterOptions from '@/components/ColorFilterOptions';
import FilterNav from '@/components/FilterNav';
import MobileFilter from '@/components/MobileFilter';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

export default function Products({ data, searchParams, allFilterList, categoryList, allBrandList }) {
    const { category, brand, color, feature, condition, sort_by } = searchParams;

    const filteredData = () => {
        let tempData = data;

        // Filter by Category
        if (category && category !== 'all') {
            tempData = tempData.filter(i => i.attributes.category === category);
        }

        // Filter by Brand
        if (brand && brand !== 'all') {
            const normalizedBrand = brand === 'brilliant house' ? 'brillianthouse' : brand;
            tempData = tempData.filter(i => i.attributes.brand === normalizedBrand);
        }

        // Filter by Color
        if (color && color !== 'all') {
            tempData = tempData.filter(i => {
                const colors = i.attributes.colors.colors;
                const uniqueColors = [...new Set(colors.flat())];
                return uniqueColors.includes(color);
            });
        }

        // Filter by Feature
        if (feature && feature !== 'all') {
            tempData = tempData.filter(i => i.attributes.feature === feature);
        }

        // Filter by Condition
        if (condition && condition !== 'all') {
            tempData = tempData.filter(i => i.attributes.condition === condition);
        }

        // Sort data
        if (sort_by) {
            switch (sort_by) {
                case 'p-lth':
                    tempData = tempData.sort((a, b) => a.attributes.price - b.attributes.price);
                    break;
                case 'p-htl':
                    tempData = tempData.sort((a, b) => b.attributes.price - a.attributes.price);
                    break;
                case 'asc':
                    tempData = tempData.sort((a, b) => a.attributes.title.localeCompare(b.attributes.title));
                    break;
                case 'desc':
                    tempData = tempData.sort((a, b) => b.attributes.title.localeCompare(a.attributes.title));
                    break;
                default:
                    break;
            }
        }

        return tempData;
    };

    const filterData = filteredData();

    return (
        <div className="products-container">
            <div className="filter-section">
                <MobileFilter
                    searchParams={searchParams}
                    allFilterList={allFilterList}
                    all={allBrandList}
                    watches={allFilterList.watches.watches}
                    headphones={allFilterList.headphones.headphones}
                    earbuds={allFilterList.earbuds.earbuds}
                    categoryList={categoryList}
                />
            </div>

            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-10">
                    <h1 className="text-base sm:text-xl md:text-4xl font-bold tracking-tight text-gray-900 pr-1">
                        Products
                    </h1>
                    <FilterNav searchParams={searchParams} />
                </div>

                <section className="pb-24 pt-6">
                    <div className="grid md:grid-cols-4">
                        <form className="md:block hidden">
                            <div className="border-b border-gray-200 py-6">
                                <h3 className="-my-3 flow-root">Category</h3>
                                <div className="pt-6" id="filter-section-0">
                                    <div className="space-y-4">
                                        {categoryList.map(cat => (
                                            <Link
                                                scroll={false}
                                                href={`/products?category=${cat}&brand=all&color=${color}&feature=${feature}&condition=${condition}&sort_by=${sort_by}`}
                                                className="flex items-center"
                                                key={cat}
                                            >
                                                <input
                                                    value={cat}
                                                    type="radio"
                                                    readOnly
                                                    checked={cat === category}
                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                />
                                                <label className="ml-3 text-sm text-gray-600 capitalize">{cat}</label>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="border-b border-gray-200 py-6">
                                <BrandFilterOptions
                                    searchParams={searchParams}
                                    data={
                                        category === 'headphone'
                                            ? allFilterList.headphones.headphones
                                            : category === 'earbud'
                                                ? allFilterList.earbuds.earbuds
                                                : category === 'watch'
                                                    ? allFilterList.watches.watches
                                                    : allBrandList
                                    }
                                />
                            </div>
                            <div className="border-b border-gray-200 py-6">
                                <h3 className="-my-3 flow-root">Colors</h3>
                                <div className="pt-6">
                                    <ColorFilterOptions
                                        colors={
                                            category === 'headphone'
                                                ? allFilterList.headphones.headphonesColor
                                                : category === 'earbud'
                                                    ? allFilterList.earbuds.earbudsColor
                                                    : category === 'watch'
                                                        ? allFilterList.watches.watchesColor
                                                        : allFilterList.allColors.allColors
                                        }
                                        searchParams={searchParams}
                                    />
                                </div>
                            </div>
                        </form>

                        <div className="col-span-3 flex flex-wrap gap-1.5 pl-3 h-full w-full">
                            {filterData.map(item => (
                                <ProductCard key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
