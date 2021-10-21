import React, {Fragment} from "react";
import sneakerImg from '../../assets/sneakers.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";


const Header = (props) => {
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>Sneaker Zone</h1>
                <HeaderCartButton onShowCart={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={sneakerImg} alt='A best sneaker collection !!!!'/>
            </div>
        </Fragment>
    )
}

export default Header;