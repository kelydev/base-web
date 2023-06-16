export interface productDto {
    id:number,
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
    rating: {
        rate: Float64Array;
        count: number;
    }
}