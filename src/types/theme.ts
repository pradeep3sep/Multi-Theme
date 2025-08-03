export const ThemeOptions = ["Light", "Dark", "Colorful"] as const;
export type Theme = (typeof ThemeOptions)[number];

export type Category  = string[]

export type CategoryResult = {
    categories : Category,
    message: string,
    status: string
}

export type Product = {
    id: number,
    title: string,
    image: string,
    price: number,
    description: string,
    brand: string,
    model: string,
    color: string,
    category: string,
    discount: number
}

export type ProductListResult = {
    products : Product[],
    message: string,
    status: string
}