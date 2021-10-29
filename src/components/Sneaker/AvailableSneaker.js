import React, { useState, useCallback, useEffect } from "react";
import classes from "./AvailableSneaker.module.css";
import SneakerItem from "./SneakerItem/SneakerItem";
import Card from "../UI/Card";

const AvailableSneaker = () => {
  const [sneakers, setSneakers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSneakersHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://custom-hook-7d405-default-rtdb.firebaseio.com/sneakers.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      const loadedSneakers = [];
      for (const key in data) {
        loadedSneakers.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setSneakers(loadedSneakers);
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchSneakersHandler();
  }, [fetchSneakersHandler]);

  const sneakersList = sneakers.map((sneaker) => (
    <SneakerItem
      key={sneaker.id}
      id={sneaker.id}
      name={sneaker.name}
      description={sneaker.description}
      price={sneaker.price}
    />
  ));

  let content = <p>There are no sneakers</p>;

  if (sneakers.length > 0) {
    content = (
      <Card>
        <ul>{sneakersList}</ul>
      </Card>
    );
  }

  if(error){
      content = <p>{error.message}</p>
  }
  if (isLoading) {
    content = <p>Loading.....</p>;
  }
  return (
    <section className={classes.sneakers}>
      {content}
    </section>
  );
};

export default AvailableSneaker;
