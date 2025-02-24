export interface IBrand{
    id?:string;
    name:string;
    imgUrl:string;
}

export interface ICategory{
    id?:string;
    name:string;
    imgUrl:string;
}
export interface IProduct{
    id?:string;
    name:string;
    imgUrl:string;
    description:string;
    price:number|"";
    colors:string[];
    brand:IBrand;
    category:ICategory;
}

export interface IProductErrorsMsg {
    title:string,
    description:string,
    imgUrl:string,
    price:string
}