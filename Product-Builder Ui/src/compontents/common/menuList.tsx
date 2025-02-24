import { useState , MouseEvent} from "react"
import InputWrapper from "./input"
import { ICategory } from "../../interfaces/models"
interface IProps{
    categories:ICategory[];
}

const MenuList = ({categories}:IProps) => {
    const categoryInit:ICategory = {
        id : "", 
        imgUrl : "",
        name : "select category"
     }
    //states
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [selectedCateory , setSelectedCateory] = useState<ICategory>(categoryInit)
    //handlers 
    const toggleIsOpen = ()=> setIsOpen(!isOpen)
    const onSelectCategory = (e:MouseEvent, newCateory:ICategory)=>{
        setSelectedCateory(newCateory)
    }

    //renders
    const categoriesList = categories.map((curr)=>(
        <li
        onClick={(e)=>onSelectCategory(e, curr)}
        className={`${(curr.id == selectedCateory.id)?"bg-sky-400":""}`} 
        key={curr.id}>
            {curr.name}
        </li>
    ))

    return (
        <div>
            <button id="category" onClick={toggleIsOpen}>
                {selectedCateory.name}
            </button>

            { 
                isOpen &&

                <ul className="max-h-16 border-2 border-sky-400 rounded-lg overflow-y-scroll" >
                    {
                        categoriesList
                    }
                </ul> 
            }

        </div>
    )
}

export default MenuList