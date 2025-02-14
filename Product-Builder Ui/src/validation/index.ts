import { IProductErrorsMsg } from "../interfaces/models";


export function productValidation(product:{title:string, description:string, price:number|"", imgUrl:string}){

    let errorsMsg:IProductErrorsMsg={
        title:"",
        description:"",
        imgUrl:"",
        price:""
    };

    if(!product.title.trim() || product.title.length <= 3 || product.title.length > 40)
    {
        errorsMsg.title ="Invalid Name! lenght must be in range 3 - 40"
    }

    if(product.price == "" || +product.price > 1000000)
    {
        errorsMsg.price = "Invalid price value must be in range 1 - 1000000"
    }

    if(!product.description.trim() || product.description.length <= 6 || product.description.length > 300)
    {
        errorsMsg.description = "Invalid lenght! lenght must be in range 6 - 300"
    }

    if(!/\.(jpg|jpeg|png|webp)$/i.test(product.imgUrl) || !product.imgUrl)
    {
        errorsMsg.imgUrl = "Invalid Media type! file must have extention jpg jpeg png webp"
    }

    return errorsMsg
}