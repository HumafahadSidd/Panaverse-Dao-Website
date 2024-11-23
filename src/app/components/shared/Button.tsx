import React ,{FC} from 'react'

const Button :FC<{text:string}>= (props) => {
  const {text} = props
    return (
    <div>

      <button className=' bg-[#00616C] rounded-full  px-7 py-4 text-white text:lg font-medium hover:bg-teal-900 scale-105 duration-500 shadow-sm'>{text}</button>
    </div>
  )
}

export default Button
