import {Action} from "./action.interface";
import {Shelf} from "./shelf.interface";
import {Tag} from "./tag.interface";

export interface Statistic {
    id: number;
    action_id: number;
    shelf_id: number;
    tag_id?: number;
    created_at: string;
    updated_at: string;
    action: Action;
    shelf: Shelf;
    tag: Tag;
}
