import React from "react";
import Modal from "../UI/Modal";
import classes from './Cart.module.css';

const Cart = props => {
    const cartItem = <ul className={classes["cart-items"]}>{[{ id: 'id1', name: 'Jordan 3 Black Cement', price: 550, amount: 2 }].map((item) => <li key={item.id}>{item.name}</li>)}</ul>

    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>322</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.onHideCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;