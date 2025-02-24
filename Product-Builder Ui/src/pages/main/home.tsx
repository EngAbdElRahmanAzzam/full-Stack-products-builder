import { useState , ChangeEvent , Fragment , FocusEvent } from 'react'
import { ICategory, IProduct, IProductErrorsMsg } from '../../interfaces/models'
import { productValidation } from '../../validation'
import { productFrom } from '../../utils/data'
import { Button } from '@headlessui/react'
import InputWrapper from '../../compontents/common/input'
import ProductCard from '../../compontents/common/productsCard'
import Model from '../../compontents/common/model'
import { cat, products } from '../../data/static'
import MenuList from '../../compontents/common/menuList'


function HomePage() {
    let isSubmited:boolean = false
    const productObjInit:IProduct =   
    {
        name:"",
        imgUrl:"",
        description:"",
        price:"",
        colors:[],
        category:{name:"", imgUrl:""}
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

    const setErrorByValidation =() =>  setErrorMsg(productValidation({title:product.name, description:product.description, imgUrl:product.imgUrl , price:product.price}))


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
    const productList = products.map((curr , index)=>(
      <Fragment key={index}>

        <ProductCard product={curr} />

      </Fragment>
    ))

    return (
      <>
        <button onClick={openModel}> model</button>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
          {productList}
            
        </div>

        <Model isOpen={isOpen}  openModel={openModel} closeModel={closeModel} title="Add New Product">

          <form onSubmit={(e)=>e.preventDefault()}>

              {productForm}
              <MenuList categories={cat}/>
              <Button  className={`bg-sky-500 w-full mb-2 py-1 px-2 rounded-lg transition hover:bg-sky-300 hover:text-black`} type='submit' onClick={onAddProductHandler}>Add</Button>
              <Button className={`bg-gray-500 w-full py-1 px-2 rounded-lg transition hover:bg-gray-300 hover:text-black`} type='reset' onClick={onCancelFormHandler}>Delete</Button>
          </form>

        </Model>
      </>
    )
    }
export default HomePage