import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import PharmacyCard from "@/components/pharmacy/PharmacyCard";
import { useLoaderData } from "react-router-dom";
import { LoaderFunctionArgs } from "react-router-dom";
import { getPharmacies } from "@/services/PharmacyService";

export async function loader ({request}: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get('page') || '0', 10);
  const size = parseInt(url.searchParams.get('size') || '10', 10);
  try {
    const data = await getPharmacies(page, size);
    return data;
  } catch (error: any) {
    throw new Response(error.message, { status: error.response?.status || 500 });
  }
}

interface AddressDTO {
  street: string;
  city: string;
  zip: string;
}

interface PharmacyResponse {
  id: number;
  name: string;
  telephone: string;
  address: AddressDTO;
}

interface PageResponse<T> {
  content: T[];
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
}
function Pharmacies() {

  const pharmacies = useLoaderData() as PageResponse<PharmacyResponse>;
  
  return (
    <MaxWidthWrapper>
      <section className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:p-6">
        {pharmacies.content.map((pharmacy) => (
          <PharmacyCard key={pharmacy.id} {...pharmacy} />
        ))}
    </section>
   </MaxWidthWrapper>
  )
}

export default Pharmacies