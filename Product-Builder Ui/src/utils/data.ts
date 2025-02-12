import { IFormInput } from "../interfaces";

export const productFrom: IFormInput[]= [
    {
        label:"Product Name",
        id:'title',
        type:"text"
    }
    ,
    {
        label:"Product Image Url",
        id:"imgUrl",
        type:"text"
    }
    ,
    {
        label:"Product Price",
        id:"price",
        type:"number"
    }
    ,
    {
        label:"Product Description",
        id:"description",
        type:"textarea"
    }

] 