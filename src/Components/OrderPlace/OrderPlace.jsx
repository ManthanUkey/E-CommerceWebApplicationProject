import React from 'react'

const OrderPlace = ({setOrderPlaced}) => {
  return (
    <section className="flex justify-center items-center bg-black/95 fixed inset-0 z-40">
        <div className="bg-zinc-100 p-8 w-[400px] text-center rounded-lg border-1 border-zinc-300">
    <h2 className='text-3xl text-green-700 font-bold'>Order Placed!</h2>
    <p className='text-zinc-800 my-4'>Thanks for your purchase!</p>
    <button className='px-6 py-3 text-white bg-blue-600 rounded-lg active:bg-blue-700' onClick={()=>setOrderPlaced(false)}>Close</button>
        </div>
    </section>

  )
}

export default OrderPlace