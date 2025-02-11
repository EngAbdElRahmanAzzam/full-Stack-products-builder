import { IProduct } from "../../../interfaces";
import { textSlicer } from "../../../utils";
import Button from "../../common/button";


interface IProps{
    product:IProduct;
}

const  ProductCard = ({product}:IProps) => {

    const cardStyles = {
        margin:2
    }
    
    return (
        <div className="max-w-80 bg-black-50 text-white text-lg text-center my-2 pb-2 flex flex-col border rounded">
            <img src={product.imgUrl}/>

            {/* title */}
            <p className={`text-xl w-fit m-${cardStyles.margin}`}>{product.title}</p>

            {/* price and categroy icon */}
            <div className={`flex justify-between items-center m-${cardStyles.margin} my-0`}>
                <p className="text-lg">${product.price}</p>
                <div className="flex justify-between items-center gap-1">
                    <img className="w-8 rounded-full"  src={product.category.imgUrl}/>
                    <p>{product.category.title}</p>
                </div>
            </div>

            {/*  disctiption */}
            <p className={`text-zinc-500 text-sm m-${cardStyles.margin}`}>{textSlicer(product.description)}</p>

            <Button  className={`bg-green-500 m-${cardStyles.margin} my-1`}>Edit</Button>
            <Button className={`bg-red-500 m-${cardStyles.margin}`}>Delete</Button>

        </div>
    )
}

export default ProductCard