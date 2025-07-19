
import HeroBanner from "@/components/HeroBanner";
import CardCarousel from "@/components/CardCarousel";
import Link from "next/link";
import ShopBanner from "@/components/ShopBanner";
import { apiFetcher } from "@/utils/api";
import { categoryList } from "@/constants/contant";
import Image from "next/image";

export default async function Home() {
  const { data } = await apiFetcher('/api/products?populate=*&pagination[page]=1&pagination[pageSize]=40')
  console.log(data)


  const newProducts = data?.filter((item) => (item?.attributes?.condition === 'new'))
  const popularProducts = data?.filter((item) => (item?.attributes?.condition === 'popular'))
  const trenddingProducts = data?.filter((item) => (item?.attributes?.condition === 'tredding'))
  return (
    <main className="mt-3">
      <HeroBanner data={data} />


      {/* Browse by Category start */}

      <div className="w-full my-[50px] md:my-[70px]">
        <h1 className="text-xl">Browse By Category</h1>
        <p className="border-b-4 border-green-500  w-28 pt-2" />
        <div className="flex justify-center items-center h-full w-full flex-wrap pt-6 gap-4">
          {categoryList?.map((cat, index) => (
            <Link href={`/products?category=${cat?.category}&brand=all&color=all&feature=all&condition=all&sort_by=desc`} key={index} className="bg-slate-100 rounded-md p-5 flex justify-center  items-center flex-col gap-3 w-40 ">
              <Image height={100} width={100} src={cat?.img} alt={cat?.name} className="h-24 w-24 rounded-full object-cover 
               object-center" />
              <h2 className="capitalize">{cat?.name}</h2>
            </Link>
          ))
          }
        </div>
      </div>

      {/* Browse by Category end */}

      {/* Popular Products Cards Start */}
      <div className="my-32">

        <CardCarousel title='New Products' data={newProducts} />
      </div>
      {/* Shop Banner Start */}
      <ShopBanner />
      {/* Shop Banner end */}
      <div className="my-32">
        <CardCarousel title='Popular Products' data={popularProducts} />
      </div>
      <div className="my-32">
        <CardCarousel title='Trendding Products' data={trenddingProducts} />
      </div>
      {/* Products Cards end */}
    </main>
  );
}
