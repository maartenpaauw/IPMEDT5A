import {Shelf} from "./shelf.interface";
import {Tag} from "./tag.interface";
import {Size} from "./size.interface";

export interface Notification {
    shelf: Shelf,
    tag: Tag,
    sizes: Array<Size>
    size?: number
}