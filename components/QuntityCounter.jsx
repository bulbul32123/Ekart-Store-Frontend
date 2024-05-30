'use client'
import { IoIosAdd, IoIosRemove } from 'react-icons/io';

export default function QuntityCounter({ quantity, setQuantity, stocks }) {
  return (
    <>
      <div className="flex justify-between mx-2 items-center  border py-1 px-2 bg-white rounded-full">
        {quantity === 0 ? (
          <>
            <p className='cursor-pointer select-none'>Add </p>
            <button onClick={() => {
              if (quantity < stocks) {
                setQuantity(quantity + 1);
              }
            }} className='p-1.5 rounded-full hover:bg-green-500 text-green-500 bg-slate-100 hover:text-white'><span><IoIosAdd size={20} /></span> </button>
          </>
        ) : (
          <>
            <button className='p-1.5 rounded-full hover:bg-green-500 text-green-500  bg-slate-100 hover:text-white' onClick={() => {
              if (quantity > 0) {
                setQuantity(quantity - 1)
              }
            }}><span><IoIosRemove size={20} /></span> </button>
            <input type="number" value={quantity} readOnly className='inline w-10 h-5' />
            <button onClick={() => {
              if (quantity < stocks) {
                setQuantity(quantity + 1);
              }
            }} className='p-1.5 rounded-full hover:bg-green-500 text-green-500  bg-slate-100 hover:text-white'><span><IoIosAdd size={20} /></span> </button>
          </>
        )
        }
      </div >
    </>
  )
}
