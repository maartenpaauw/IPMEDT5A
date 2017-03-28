import {Product} from "./product.interface";

export interface Demo {
    id: number;
    product_id: number;
    uuid: string;
    created_at: string;
    updated_at: string;
    product: Product;
}