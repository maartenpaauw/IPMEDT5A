import {Size} from "./size.interface";

export interface Tag {
    id: number;
    size_id: number;
    uuid: string;
    created_at: string;
    updated_at: string;
    size: Size;
}