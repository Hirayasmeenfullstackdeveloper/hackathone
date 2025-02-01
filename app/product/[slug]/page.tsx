import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { groq } from "next-sanity";
import { Product } from "@/types/product";
import Image from "next/image";

// Define the function to fetch the product
async function getProduct(slug: string): Promise<Product | null> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      image,
      _type,
      price
    }`,
    { slug }
  );
}

interface ProductPageProps {
  params: { slug: string };
}

// Make the ProductPage function async and properly structured
export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = await getProduct(slug);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square">
          {product?.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          )}
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold">{product?.name}</h1>
          <p className="text-2xl font-sans">${product?.price}</p>
        </div>
      </div>
    </div>
  );
}
