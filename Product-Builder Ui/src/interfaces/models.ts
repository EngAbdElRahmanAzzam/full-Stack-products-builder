export interface IBrand{
    name:string;
    imgUrl:string;
}

export interface ICategory{
    name:string;
    imgUrl:string;
}
export interface IProduct{
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