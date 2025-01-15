import Category from "./Category";

export interface Product {
    id: string,
    photos?: string[],
    name: string,
    description?: string,
    category: Category,
    price: number,
    quantity: number,
    is_published: boolean,
    created_at: string,
    updated_at: string,
    deleted_at: string,
}