import { useState , ChangeEvent , Fragment , FocusEvent } from 'react'
import { ICategory, IProduct, IProductErrorsMsg } from '../../interfaces/models'
import { productValidation } from '../../validation'
import { productFrom } from '../../utils/data'
import { Button } from '@headlessui/react'
import InputWrapper from '../../compontents/common/input'
import ProductCard from '../../compontents/common/productsCard'
import Model from '../../compontents/common/model'


let cat:ICategory ={
  title:"Phones",
  imgUrl:"img.jpeg"
}
let product_:IProduct={
  title:"Iphone 12",
  imgUrl:"img.jpeg",
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quisquam dolore asperiores et mollitia. Minima sapiente reprehenderit corrupti doloremque eveniet.",
  price: 1000,
  colors:["red", "blue ", "green"],
  category:cat
}

function HomePage() {
    let isSubmited:boolean = false
    const productObjInit:IProduct =   
    {
        title:"",
        imgUrl:"",
        description:"",
        price:"",
        colors:[],
        category:{title:"", imgUrl:""}
    }

/* _________states__________ */
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [product, setProduct] = useState<IProduct>(productObjInit)
    const [errorsMsg, setErrorMsg] = useState<IProductErrorsMsg>(
      {
      title:"",
      description:"",
      imgUrl:"",
      price:""
    })


// handlers
    const openModel = () =>  setIsOpen(true)
    const closeModel = () => setIsOpen(false)

    const setErrorByValidation =() =>  setErrorMsg(productValidation({title:product.title, description:product.description, imgUrl:product.imgUrl , price:product.price}))


    const onChangeInputHandler = (e:ChangeEvent<HTMLInputElement>)=>{
      setProduct({...product , [e.target.id]:e.target.value})
    }

    const onFoucsInputHandler = (e:FocusEvent) => setErrorMsg({...errorsMsg, [e.target.id]:''})

    const onCancelFormHandler = ()=>{
        setProduct(productObjInit)
        closeModel()
    }

    const onAddProductHandler = ()=>{
      isSubmited = true
      setErrorByValidation()
      product_.title = "rerender"    
    }
/* _________Render__________ */
    const productForm = productFrom.map(({id, label ,type} , index)=>(
        <Fragment key={index}>

            <InputWrapper 
            id={id} 
            type={type} 
            value={product[id]!} 
            errorMsg={errorsMsg[id]} 
            onChange={onChangeInputHandler} 
            onFocus={onFoucsInputHandler}>
                {label}
            </InputWrapper>

        </Fragment>
      ))

    return (
      <>
        <button onClick={openModel}> model</button>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
          this is card
            <ProductCard product={product_} />
        </div>

        <Model isOpen={isOpen}  openModel={openModel} closeModel={closeModel} title="Add New Product">

          <form onSubmit={(e)=>e.preventDefault()}>

              {productForm}
              <Button  className={`bg-sky-500 w-full mb-2 py-1 px-2 rounded-lg transition hover:bg-sky-300 hover:text-black`} type='submit' onClick={onAddProductHandler}>Add</Button>
              <Button className={`bg-gray-500 w-full py-1 px-2 rounded-lg transition hover:bg-gray-300 hover:text-black`} type='reset' onClick={onCancelFormHandler}>Delete</Button>

          </form>

        </Model>
        <input className='w-7 cursor-pointer bg-white rounded-full outline-none border-none' type='color' onChange={(e)=>{console.log(e.target.value)}} />
      </>
    )
    }
export default HomePage