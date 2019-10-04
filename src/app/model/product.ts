import { Category } from './category';
import { Supplier } from './supplier';

export class Product {
    public id: number;
    public productName: string;
    public category: Category;
    public fullPrice: number;
    public salePrice: number;
    public availability: boolean;
    public supplier: Supplier;
    public discount: number;

    constructor(
         id: number,
         productName: string,
         category: Category,
         fullPrice: number,
         salePrice: number,
         availability: boolean,
         supplier: Supplier,
         discount: number,
    ){
        this.id=id;
        this.productName=productName;
        this.category=category;
        this.fullPrice=fullPrice;
        this.salePrice=salePrice;
        this.availability=availability;
        this.supplier=supplier;
        this.discount=discount;
    }
    }