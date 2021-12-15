
export interface IProduct {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    quantity: number;
    rating: IRating
    }

interface IRating {
    rate: number,
    count: number
}

export const InitalProduct: IProduct = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    quantity: 0,
    rating: {
        rate: 0,
        count: 0
    }
}

