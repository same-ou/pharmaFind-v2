import { Check } from "lucide-react";
import { Link, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import AddToCartButton from "@/components/cart/AddToCartButton";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductImageSlider from "@/components/product/ProductImageSlider";
import { Product } from "@/services/ProductService";
import { getProduct } from "@/services/ProductService";

export async function loader({params}: LoaderFunctionArgs) {
  try {
    const { id } = params;
    const data = await getProduct(id as string);
    return data;
  } catch (error: any) {
    throw new Response(error.message, { status: error.response?.status || 500 });
  }
}

const BREADCRUMBS = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Products", href: "/products" },
];

const ProductDetails =  () => {
  const product = useLoaderData() as Product;
  const urls = product?.images?.map((image) => image.imageUrl);

  return (
    <MaxWidthWrapper>
      <div className="bg-background">
        <div className="max-w-2xl px-4 py-4 mx-auto sm:px-6 sm:py-10 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          {/* Product Detail*/}
          <div className="lg:max-w-lg lg:self-end">
            <ol className="flex items-center space-x-2">
              {BREADCRUMBS.map((breadcrumb, i) => (
                <li key={breadcrumb.href}>
                  <div className="flex items-center text-sm">
                    <Link
                      to={breadcrumb.href}
                      className="text-sm font-medium text-muted-foreground hover:text-foreground/80"
                    >
                      {breadcrumb.name}
                    </Link>
                    {i !== BREADCRUMBS.length - 1 ? (
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="flex-shrink-0 w-5 h-5 ml-2 text-gray-300"
                      >
                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                      </svg>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-4">
              <h1 className="text-3xl font-bold tracking-tight text-foreground/80 sm:text-4xl">
                {product.name}
              </h1>
            </div>

            <section className="mt-4">
              <div className="flex items-center">
                <p className="font-medium text-foreground/80">
                  {product.price}
                </p>

                <div className="pl-4 ml-4 border-l border-gray-300 text-muted-foreground">
                  {product?.categories?.map((category) => category).join(", ")}
                </div>
              </div>

              <div className="mt-4 space-y-6">
                <p className="text-base text-muted-foreground">
                  {product.description}
                </p>
              </div>

              <div className="flex items-center mt-6">
                <Check
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-green-500"
                />
                <p className="ml-2 text-sm text-muted-foreground">
                  Eligible for Instant Delivery
                </p>
              </div>
            </section>
          </div>
          {/* Product Image */}
          <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
            <div className="rounded-lg aspect-square">
              <ProductImageSlider urls={urls as string[]} />
            </div>
          </div>

          {/* Add to Cart */}
          <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
            <div>
              <div className="mt-10">
                <AddToCartButton product={product}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ProductDetails;
