import React from "react";
import classes from './AvailableSneaker.module.css';
import SneakerItem from "./SneakerItem/SneakerItem";
import Card from '../UI/Card';


const DUMMY_SNEAKERS = [
    {
        id: 'id1',
        name: 'Jordan 3 Black Cement 2018',
        description: 'OG Colorway 3s 2018',
        price: 550
    },
    {
        id: 'id2',
        name: 'Jordan 4 Bred 2019',
        description: 'OG Colorway 4s 2019',
        price: 600
    },
    {
        id: 'id3',
        name: 'Jordan 6 Infrared 2019',
        description: 'OG Colorway 6s 2019',
        price: 400
    },
    {
        id: 'id4',
        name: 'Jordan 3 Cool Grey 2020',
        description: 'OG Colorway 3s 2020',
        price: 350
    }
]

const AvailableSneaker = () => {
    const sneakersList = DUMMY_SNEAKERS.map((sneaker) => <SneakerItem
        key={sneaker.id}
        id={sneaker.id}
        name={sneaker.name}
        description={sneaker.description}
        price={sneaker.price}
    />);
    return (
        <section className={classes.sneakers}>
            <Card>
                <ul>{sneakersList}</ul>
            </Card>
        </section>
    )
}

export default AvailableSneaker;