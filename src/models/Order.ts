import { Product } from './product';
export class Order{
    id:string;
    date: Date;
    discount: string;
    products:Product[];
    total: number;
}