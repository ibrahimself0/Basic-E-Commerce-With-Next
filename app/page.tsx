import {stripe} from "@/lib/stripe";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Carousel from "@/components/carousel";
export default async function Home() {

  const products =await stripe.products.list({
      expand: ["data.default_price"],
      limit: 5,
    });

  const bannerImage =
      products?.data[3]?.images?.[0] || "/airpods.jpg";
  return (
    <div>
      <section
          className="
    flex
    flex-row
    items-center
    justify-evenly
  "
      >
        <div className="max-w-md space-y-4 ">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Welcome to IBRA STORE
          </h2>

          <p className="text-neutral-600">
            Discover the latest products at the best prices
          </p>

          <Button className="rounded-full px-6 py-3">
            <Link href="/products">
              Browse All The Products
            </Link>
          </Button>
        </div>

        <Image
            alt="Banner Image"
            src={bannerImage}
            width={450}
            height={450}
        />
      </section>
        <Carousel products={products.data} />
    </div>
  );
}
