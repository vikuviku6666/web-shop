import React, { useState, useEffect } from "react";
import { Middle } from "../styles/MiddleStyle";
import axios from "axios";
import { Banner } from "./Banner";

export interface IMovie {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  year: number;
}

const Main: React.FC = () => {
  const defaultValue: IMovie[] = [];
  const [movies, setMovies] = useState(defaultValue);
  const [cart, setCart] = useState(defaultValue);

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
    setCart([...cart, movie]);
  }

  let moviesHtml = movies.map((movie: IMovie) => {
    const str = `${movie.name.slice(0, 18)}`;
    const str2 = `${movie.description.slice(0, 130)}`;
    return (
      <div key={movie.id}>
        <h6>{str}</h6>
        <img src={movie.imageUrl} alt="Movies" />
        <p>{str2}</p>
        <button type="button" value={movie.id} onClick={() => addToCart(movie)}>
          Add to Cart
        </button>
      </div>
    );
  });

  return (
    <>
      <button>Go to Cart({cart.length})</button>
      <Banner myValue={movies} />
      <Middle>{moviesHtml}</Middle>
    </>
  );
};

export default Main;
