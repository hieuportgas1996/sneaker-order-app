import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onHideCart}></div>
}

const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const Modal = props => {

    const portElement = document.getElementById("overlays");

    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onHideCart={props.onHideCart}/>, portElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portElement)}
        </Fragment>

    )
}

export default Modal;