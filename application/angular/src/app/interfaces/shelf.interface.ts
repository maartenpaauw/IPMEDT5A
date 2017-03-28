import {Demo} from "./demo.interface";

export interface Shelf {
    id: number;
    demo_id?: number;
    mac_address: string;
    created_at: string;
    updated_at: string;
    demo: Demo;
}