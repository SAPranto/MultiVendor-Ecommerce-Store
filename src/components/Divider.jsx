import React from 'react'
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const Divider = ({ title, seeAllText }) => {
  return (
    <div className="container mx-auto flex justify-between my-4">
      <div className='bg-green-900 text-xl pl-4 ml-3 pt-1 pb-2 pr-16 style-border border-l-4 border-l-green-300'>
        <h4 className=''>{title}</h4>
      </div>
      <div className='bg-green-900 rounded-full px-2 pt-1 flex justify-between gap-3'>
        <h5 className='pl-1 pt-[3px]'>{seeAllText}</h5>
        <span>
        <BsFillArrowDownCircleFill size={30}/>
        </span>
      </div>
    </div>
  )
}

export default Divider
