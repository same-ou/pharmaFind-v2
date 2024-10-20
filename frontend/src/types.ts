import { Image } from "./services/ProductService";

export type CartProductItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
    images?: Image[];
};

export type OrderProductItem = {
    productId: number;
    pharmacyId: number;
    price: number;
    quantity: number;
};
export type Address = {
    street: string;
    city: string;
    postalCode: string;
}

export type OrderRequest = {
    products: OrderProductItem[];
    address: Address;
};

export type OrderResponseDTO = {
    id: number;
    status: string;
};