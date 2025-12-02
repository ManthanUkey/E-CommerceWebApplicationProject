import React from "react";

const OrderSummary = ({cart,subTotal,shippingFee,orderTotal,setOrderPlaced,setOrderSummary,setCart }) => {

  const handlePlaceOrder = () =>{
    setOrderSummary(false)
    setOrderPlaced(true)
    setCart([])
  }

  return (
    <section className="flex justify-center items-center bg-black/95 fixed inset-0 z-40">
      <div className="bg-zinc-100 p-8 w-[600px] rounded-lg border-1 border-zinc-300">
        <h2 className="text-3xl text-zinc-800 font-bold mb-5 text-center">
          Order Summary
        </h2>

        <div>

            <div>
                {
                    cart.map(item=>(
                        <div key={item.id} className="flex justify-between items-center border-b-1 border-zinc-300">
                            <span className="text-shadow-zinc-800 py-2">{item.name}(x{item.quantity})</span>
                            <span className="text-shadow-zinc-800 py-2">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>

                        
                    ))
                }
            </div>
        <div>
            <div className="flex justify-between pt-3">
                <span className="text-zinc-800">SubTotal</span>
                <span className="text-zinc-800">${subTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-3">
                <span className="text-zinc-800">Shipping & Handlingl</span>
                <span className="text-zinc-800">${shippingFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between pt-3 border-t-1 border-zinc-300 mb-5">
                <span className="text-blue-600 font-bold text-xl">Order Total</span>
                <span className="text-blue-600">${orderTotal.toFixed(2)}</span>
            </div>
        </div>
        <div className="flex mt-10 gap-x-3 ">
            <button className="bg-zinc-800 flex-1 py-3 text-white rounded-lg active:bg-zinc-900 cursor-pointer" onClick={()=>(setOrderSummary(false))}>Cancel</button>
            <button className="bg-blue-600 flex-1 py-3 text-white rounded-lg  active:bg-blue-700 cursor-pointer"onClick={handlePlaceOrder}>Place Order</button>
        </div>


      </div>
      </div>
    </section>
  );
};

export default OrderSummary;
