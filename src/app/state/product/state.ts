export type Product = {
    id: any,
    name: string
};

export type ProductState = {
    products: Product[],
    editForm: Product | null
}