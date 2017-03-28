import {Size} from "./size.interface";
import {Shoe} from "./shoe.interface";

export interface Product {
    id: number;
    shoe_id: number;
    size_id: number;
    sku: string;
    price: string;
    created_at: string;
    updated_at: string;
    shoe: Shoe;
    size: Size;
}