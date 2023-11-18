import { MenuItem } from "primeng/api";

export interface AppMenuItem extends MenuItem {
    content?: MenuItemImage[];
    isOverview?: boolean;
    overview?: MenuItemOverview;
    items?: AppMenuItem[] | MenuItem[];
}

export interface MenuItemImage {
    header?:string;
    imageSrc?: string;
    content?: string;
}

export interface MenuItemOverview {
    header?: string;
    content?: string;
    buttonName?: string;
}