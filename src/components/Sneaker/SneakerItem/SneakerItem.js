import React, {useContext} from "react";
import CartContext from "../../../store/cart-context";
import classes from './SneakerItem.module.css';
import SneakerItemForm from "./SneakerItemForm";

const SneakerItem = props => {
    // const price = `$${props.price.toFixed(2)}`;
    const price = `$${props.price}`;

    const cartCtx = useContext(CartContext);

    const addItemToCart = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    }

    return(
        <li className={classes.sneaker}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <SneakerItemForm id={props.id} onAddToCart={addItemToCart}/>
            </div>
        </li>
    )
}

export default SneakerItem;
