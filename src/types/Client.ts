export interface Client {
    id: string
    name: string,
    email?: string,
    rg?: string,
    cpf?: string,
    phone?: string,
    address?: string,
    cep?: string,
    city?: string,
    state?: string,
    country?: string,
    created_at: string,
    updated_at: string
    deleted_at: string
}