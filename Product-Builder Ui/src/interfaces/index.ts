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

export interface IFormInput {
    label:string;
    id: "title" | "imgUrl" | "description" | "price";
    type:string;
}

export interface IProductErrorsMsg {
    title:string,
    description:string,
    imgUrl:string,
    price:string
}