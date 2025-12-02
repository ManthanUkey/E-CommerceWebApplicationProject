import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Product from "../Products/Product";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import OrderSummary from "../OrderSummary/OrderSummary";
import OrderPlace from "../OrderPlace/OrderPlace";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePanel, setActivePanel] = useState(null);
  const [orderSummary, setOrderSummary] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [wishlist, setWishlist] = useState(()=>{
    const storeWishlist = localStorage.getItem('wishlist')
    return storeWishlist ? JSON.parse(storeWishlist) : []
  });

  const [cart, setCart] = useState(()=>{
    const storeCart = localStorage.getItem('cart')
    return storeCart ? JSON.parse(storeCart) : []
  });

  useEffect(() => {
    const changeNavBar = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", changeNavBar);
  }, []);

  // Save item in localStorage

  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart))
    localStorage.setItem('wishlist',JSON.stringify(wishlist))
  },[cart, wishlist])

  // handlescroll
  const handleScroll = () => {
    const section = document.getElementById("product-section");

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Cart and Wishlist showpannel function

  const handlePanel = (tabName) => {
    setActivePanel((prev) => (prev === tabName ? null : tabName));
  };

  // closedPanel Function

  const handleClosePanel = () => setActivePanel(null);

  //Removeitem function

  const removeItem = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  //QuantityIncrement

  const quantityIncrement = (product) => {
    setCart(
      cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  //QuantityDecrement

  const quantityDecrement = (product) => {
    setCart(
      cart.map((item) =>
        item.id === product.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  //Total calculations

  const subTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const totalItem = cart.reduce((acc, item) => acc + item.quantity, 0);
  const shippingFee = totalItem * 2;
  const orderTotal = subTotal + shippingFee;

  // AddtoCart Function

  const addToCart = (product) => {
    const alreadyAdded = cart.find((item) => item.id === product.id);
    if (alreadyAdded) {
      alert("Item already in your cart");
      return;
    }
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  //Add to wishlist function

  const addToWishlist = (product) => {

    const isInWishlist = wishlist.some(item=>item.id===product.id)
    if(isInWishlist){
      setWishlist(wishlist.filter(item=> item.id !== product.id))
    }else{
      const addedDate = new Date().toLocaleDateString('en-GB')
      setWishlist([...wishlist, {...product, addedDate}]);
    }
    
  };

  // ClearWishlist

  const clearWishlist = () =>{
    setWishlist([])
  }

  return (
    <div>
      {/* Navbar */}
      <Navbar
        handleScroll={handleScroll}
        setSearchTerm={setSearchTerm}
        isScrolled={isScrolled}
        handlePanel={handlePanel}
        totalItem={totalItem}
        wishlist={wishlist}
      />
      {/* Banner */}
      <Banner />
      {/* Product */}
      <Product
        searchTerm={searchTerm}
        addToCart={addToCart}
        addToWishlist={addToWishlist}
        wishlist={wishlist}
      />
      {/* Cart */}
      <Cart
        activePanel={activePanel}
        handleClosePanel={handleClosePanel}
        cart={cart}
        removeItem={removeItem}
        quantityIncrement={quantityIncrement}
        quantityDecrement={quantityDecrement}
        subTotal={subTotal}
        shippingFee={shippingFee}
        orderTotal={orderTotal}
        setOrderSummary={setOrderSummary}
      />
      {/* Whislist */}
      <Wishlist activePanel={activePanel} handleClosePanel={handleClosePanel} wishlist={wishlist}
      addToCart={addToCart} clearWishlist={clearWishlist}/>
      {/* OrderSummary */}
      {orderSummary && (
        <OrderSummary
          cart={cart}
          subTotal={subTotal}
          shippingFee={shippingFee}
          orderTotal={orderTotal}
          setOrderPlaced={setOrderPlaced}
          setOrderSummary={setOrderSummary}
          setCart={setCart}
        />
      )}
      {/* OrderPlaced */}
      {orderPlaced && <OrderPlace setOrderPlaced={setOrderPlaced} />}
    </div>
  );
};

export default Home;
