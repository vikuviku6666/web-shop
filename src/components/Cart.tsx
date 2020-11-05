import React from "react";
import { CartStyle } from "../styles/CartStyle";
import { IMovie } from "./Main";
interface IImageProps {
  myValue: IMovie[];
}

const Cart: React.FC<IImageProps> = (props: IImageProps) => {
  let moviesHtml = props.myValue.map((movie: IMovie) => {
    const str = `${movie.name.slice(0, 18)}`;
    const str2 = `${movie.description.slice(0, 130)}`;
    return (
      <div key={movie.id}>
        <h6>{str}</h6>
        <img src={movie.imageUrl} alt="Movies" />
        <p>{str2}</p>
      </div>
    );
  });
  return (moviesHtml && moviesHtml.length) > 0 ? (
    <CartStyle>{moviesHtml}</CartStyle>
  ) : (
    <CartStyle>
      {moviesHtml}
      <div>Your Cart is Empty</div>
    </CartStyle>
  ); 
}

export default Cart;
