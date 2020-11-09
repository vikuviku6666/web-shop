import React, { useState, useEffect } from "react";
import { Middle } from "../styles/MiddleStyle";
import axios from "axios";
import { Banner } from "./Banner";
import Categories from "./Categories";
import { Card, Button } from 'react-bootstrap';

export interface IMovie {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  year: number;
  count: number;
 
}


interface IChildProps{
  updateParentCart(value: IMovie): void;
}

const Main: React.FC<IChildProps> = (props: IChildProps) => {
  const defaultValue: IMovie[] = [];
  const [movies, setMovies] = useState(defaultValue);
 

  useEffect(() => {
    async function getData() {
      let result = await axios.get<IMovie[]>(
        "https://medieinstitutet-wie-products.azurewebsites.net/api/products"
      );
      setMovies(result.data);
    }
    getData();
  }, []);

  const addToCart = (movie: IMovie) => {
    props.updateParentCart(movie);
  };

  let moviesHtml = movies.map((movie: IMovie) => {
    const str = `${movie.name.slice(0, 18)}`;
    const str2 = `${movie.description.slice(0, 130)}`;
    return (
      
      <Card style={{ width: '16rem' }} key={movie.id} >
  <Card.Img variant="top" src={movie.imageUrl} />
  <Card.Body>
    <Card.Title>{str}</Card.Title>
    <Card.Text>
     {str2}
    </Card.Text>
    <Button variant="outline-dark"  type="button" onClick={() => addToCart(movie)}>Add To Cart</Button>
  </Card.Body>
</Card>
    );
  });

  return (
    <>
      
      {/* <Banner myValue={movies} />  */}
      <Categories/>
      <Middle>{moviesHtml}</Middle>
    </>
  );
};

export default Main;
