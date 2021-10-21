import React, {useRef, useState} from "react";
import Input from "../../UI/Input";
import classes from './SneakerItemForm.module.css';

const SneakerItemForm = (props) => {
    const enteredAmountRef = useRef();

    const [isValid, setIsValid] = useState(true);

    const submitHandler = (event) => {
        event.preventDefault();

        const enterAmount = enteredAmountRef.current.value;
        const enterAmountNumber = +enterAmount //convert string to number
        
        if(enterAmount.trim().length === 0 || enterAmountNumber < 1 || enterAmountNumber > 5){
            setIsValid(false);
            return;
        }

        props.onAddToCart(enterAmountNumber);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={enteredAmountRef}
                label="Amount"
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }} />
            <button>+ Add</button>
            {!isValid && <p>Please enter value amount (1-5)</p>}
        </form>
    )
}

export default SneakerItemForm;