import { Client } from "./Client"
import { Colaborator } from "./Colaborator"
import { Product } from "./Product"

export interface Sale {
    id: string,
    product: Product,
    serial: string,
    client: Client,
    colaborator: Colaborator,
    description?: string,
    total: number,
    date: string,
    price: number,
    quantity: number,
    created_at: string,
    updated_at: string
    deleted_at: string
}
