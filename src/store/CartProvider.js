import CartContext from "./cart-context";

const CartProvider = props => {

    const addItem = () => {

        
    }

    const removeItme = () => {
        
    }

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItem,
        removeItem: removeItme
    }

    return(
        <CartContext.Provider value={cartContext}> 
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;