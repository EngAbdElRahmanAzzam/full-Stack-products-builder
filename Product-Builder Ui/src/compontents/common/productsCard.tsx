import { Button } from "@headlessui/react";
import { IProduct } from "../../interfaces/models";
import { textSlicer } from "../../utils";
import ColorCircle from "./colorItem";
import {useState} from 'react';
import MenuList from "./menuList";


interface IProps{
    product:IProduct;
}

const  ProductCard = ({product}:IProps) => {
    const [color, setColor] = useState<string>("");
    const [colors, setColors] = useState<string[]>([])
    const cardStyles = {
        margin:2
    }
    //handlers 
    const addColor = ()=>{
        setColors([...colors, color])
    }
    return (
        <div className="max-w-80 bg-black-50 text-white text-lg text-center my-2 pb-2 flex flex-col border rounded">
            <img src={product.imgUrl}/>

            {/* title */}
            <p className={`text-xl w-fit m-${cardStyles.margin}`}>{product.name}</p>

            {/* price and categroy icon */}
            <div className={`flex justify-between items-center m-${cardStyles.margin} my-0`}>
                <p className="text-lg">${product.price}</p>
                <div className="flex justify-between items-center gap-1">
                    <img className="w-8 rounded-full"  src={product.category.imgUrl}/>
                    <p>{product.category.name}</p>
                </div>
            </div>

            {/*  disctiption */}
            <p className={`text-zinc-500 text-sm m-${cardStyles.margin}`}>
                {textSlicer(product.description)}
            </p>

            <div>
                <ColorCircle color="red"/>
            </div>
            <div className="flex justify-between">

                <input className='w-6 h-6 color-picker cursor-pointer rounded-full' 
                type='color'
                value={color}
                onChange={(e)=>setColor(e.target.value)} />

                <Button 
                className="bg-indigo-600"
                onClick={addColor}
                >set color</Button>
            </div>
            <Button  className={`bg-green-500 m-${cardStyles.margin} my-1`}>Edit</Button>
            <Button className={`bg-red-500 m-${cardStyles.margin}`}>Delete</Button>

        </div>
    )
}

export default ProductCard