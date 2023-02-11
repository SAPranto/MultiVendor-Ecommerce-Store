import React from 'react'
import { IoMdArrowDropright } from "react-icons/io"

const Category = (props) => {
  return (
    <div className="bg-green-900 h-full pb-24 pt-3 mx-3 mt-1 w-64">
    <ul className="px-6 flex flex-col gap-2 text-lg font-semibold cursor-pointer">
      <li classNa className="flex justify-between"me="flex justify-between">
        <a href="">Fashions</a>
        <IoMdArrowDropright className="text-2xl"/>     
      </li>
      <li className="flex justify-between">
        <a href="">Electronics</a>
        <IoMdArrowDropright className="text-2xl"/>    
      </li>
      <li className="flex justify-between">
        <a href="">Sports</a> 
      </li>
      <li className="flex justify-between">
        <a href="">Home Apperal</a>
        <IoMdArrowDropright className="text-2xl"/>    
      </li>
      <li className="flex justify-between">
        <a href="">Accessories</a>
      </li>
      <li className="flex justify-between">
        <a href="">Home & Garden</a>
        <IoMdArrowDropright className="text-2xl"/>    
      </li>
      <li className="flex justify-between">
        <a href="">Beauty & Personal</a>
        <IoMdArrowDropright className="text-2xl"/>    
      </li>
      <li className="flex justify-between">
        <a href="">Tools & Hardware</a>
        <IoMdArrowDropright className="text-2xl"/>    
      </li>
      <li className="flex justify-between">
        <a href="">Baby Products</a>
      </li>
      <li className="flex justify-between">
        <a href="">Google & Sunglasses</a>
      </li>
      <li className="flex justify-between">
        <a href="">Food Items</a>
        <IoMdArrowDropright className="text-2xl"/>    
      </li>
    </ul>
  </div>
  )
}

export default Category