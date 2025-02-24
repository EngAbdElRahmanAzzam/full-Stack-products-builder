import { IBrand, ICategory, IProduct } from "../interfaces/models"

export let cat:ICategory[] =[
{
    id:"1",
    name:"Phones",
    imgUrl:"img.jpeg"
},
{
  id:"2",
  name:"Phones",
  imgUrl:"img.jpeg"
},
{
  id:"3",
  name:"Phones",
  imgUrl:"img.jpeg"
},
{
  id:"4",
  name:"Phones",
  imgUrl:"img.jpeg"
}
]

export const brands :IBrand[]=[
    {
        name:'samasung',
        imgUrl:"https://static.vecteezy.com/system/resources/previews/020/336/289/original/samsung-logo-samsung-icon-free-free-vector.jpg"
    }
]

export const products:IProduct[] = [
    {
        name:"Iphone 12",
        imgUrl:"img.jpeg",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quisquam dolore asperiores et mollitia. Minima sapiente reprehenderit corrupti doloremque eveniet.",
        price: 1000,
        colors:["#bd6b6b", "#ad5858 ", "#7a7a7a"],
        brand:brands[0],
        category:cat[0]
      },
      {
        name:"Iphone 12",
        imgUrl:"img.jpeg",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quisquam dolore asperiores et mollitia. Minima sapiente reprehenderit corrupti doloremque eveniet.",
        price: 1000,
        colors:["#bd6b6b", "#ad5858 ", "#7a7a7a"],
        brand:brands[0],
        category:cat[0]
      }
      ,
      {
        name:"Iphone 12",
        imgUrl:"img.jpeg",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quisquam dolore asperiores et mollitia. Minima sapiente reprehenderit corrupti doloremque eveniet.",
        price: 1000,
        colors:["#bd6b6b", "#ad5858 ", "#7a7a7a"],
        brand:brands[0],
        category:cat[0]
      }
      ,
      {
        name:"Iphone 12",
        imgUrl:"img.jpeg",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quisquam dolore asperiores et mollitia. Minima sapiente reprehenderit corrupti doloremque eveniet.",
        price: 1000,
        colors:["#bd6b6b", "#ad5858 ", "#7a7a7a"],
        brand:brands[0],
        category:cat[0]
      }
      ,
      {
        name:"Iphone 12",
        imgUrl:"img.jpeg",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quisquam dolore asperiores et mollitia. Minima sapiente reprehenderit corrupti doloremque eveniet.",
        price: 1000,
        colors:["#bd6b6b", "#ad5858 ", "#7a7a7a"],
        brand:brands[0],
        category:cat[0]
      }
]