export interface ICategory{
    title:string;
    imgUrl:string;
}

export interface IProduct{
    title:string;
    imgUrl:string;
    description:string;
    price:number|"";
    colors:string[];
    category:ICategory;
}

export interface IProductErrorsMsg {
    title:string,
    description:string,
    imgUrl:string,
    price:string
}