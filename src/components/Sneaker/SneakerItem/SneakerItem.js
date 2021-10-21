import React from "react";
import classes from './SneakerItem.module.css';
import SneakerItemForm from "./SneakerItemForm";

const SneakerItem = props => {
    const price = `$${props.price}`;

    return(
        <li className={classes.sneaker}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <SneakerItemForm id={props.id}/>
            </div>
        </li>
    )
}

export default SneakerItem;
