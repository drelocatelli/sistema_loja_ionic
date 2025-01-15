import { Client } from "./Client"
import { Colaborator } from "./Colaborator"
import { Product } from "./Product"

export interface Sale {
    id: string,
    serial: string,
    client: Client,
    colaborator: Colaborator,
    product: Product,
    description?: string,
    total: number,
    created_at: string,
    updated_at: string
    deleted_at: string
}