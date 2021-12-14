import {ThemeProvider} from "react-bootstrap";


export interface IProduct {
    id: string,
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

