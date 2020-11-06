import React, { useState, ChangeEvent } from "react";
import { CartStyle } from "../styles/CartStyle";
import { IMovie } from "./Main";
import axios from "axios";

interface IImageProps {
  myValue: IMovie[];
}

export interface IOrderProps {
  id: number;
  companyId: number;
  createdBy: string;
  totalPrice: number;
  orderRows: [];
}

const Cart: React.FC<IImageProps> = (props: IImageProps) => {
  const [state, setState] = useState({
    companyId: 12684,
    createdBy: "Vinay8888@gmail.com",
  });
  const [showCheckout, setShowCheckout] = useState(false);
  const [data, setData] = useState<IOrderProps>({
    id: 0,
    companyId: 12684,
    createdBy: "",
    totalPrice: 0,
    orderRows: [],
  });
/*   const propsTo = props.myValue.map(item) => {
  return (
    {
      "productId": item.id,
      "product": item.name,
      "amount": item.price,
    }
  );
  
  } */
   const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: [e.target.value] });
  };
  const createOrder = (e: any) => {
    e.preventDefault();

    axios
      .post(
        "https://medieinstitutet-wie-products.azurewebsites.net/api/orders",
        {
          companyId: state.companyId,
          createdBy: state.createdBy,
          totalPrice: props.myValue.reduce((a, c) => a + c.price, 0),
          orderRows: props.myValue,
        }
      )

      .then((res: any) => res.json())
      .then((data: any) => {
        setData(data);
        console.log(data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };


  return (
    <CartStyle>
      {props.myValue.length === 0 ? (
        <div className="cart cart-header">Cart is empty</div>
      ) : (
        <div className="cart cart-header">
          You have {props.myValue.length} in the cart{" "}
        </div>
      )}

      {data.id > 0 && (
        <div>
          <div className="order-details">
            <h3 className="success-message">Your order </h3>
            <h2>Order {data.id}</h2>
            <ul>
              <li>
                <div>Email:</div>
                <div>{data.createdBy}</div>
              </li>

              <li>
                <div>Total:</div>
                <div>{data.totalPrice}</div>
              </li>
              <li>
                <div>Cart Items:</div>
                <div>
                  {data.orderRows.map((x: any) => (
                    <div>{x.title}</div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
      <div>
        <div className="cart">
          <ul className="cart-items">
            {props.myValue.map((item, idx) => (
              <li key={idx}>
                <div>
                  <img src={item.imageUrl} alt={item.name}></img>
                </div>
                <div>
                  <div>{item.name}</div>
                  <div className="right">
                    {item.price}
                    {/* <button
                          className="button"
                          onClick={() => props.removeFromCart(item)}
                        >
                          Remove
                        </button> */}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {props.myValue.length !== 0 && (
          <div>
            <div className="cart">
              <div className="total">
                <div>
                  Total:
                  {props.myValue.reduce((a, c) => a + c.price, 0)}
                </div>
                <button
                  onClick={() => {
                    setShowCheckout(true);
                  }}
                  className="button primary"
                >
                  Proceed
                </button>
              </div>
            </div>
            {showCheckout && (
              <div>
                <div className="cart">
                  <form onSubmit={createOrder}>
                    <ul className="form-container">
                      <li>
                        <label>Email</label>
                        <input
                          name="email"
                          type="email"
                          required
                          onChange={handleInput}
                        ></input>
                      </li>

                      <li>
                        <button className="button primary" type="submit">
                          Checkout
                        </button>
                      </li>
                    </ul>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </CartStyle>
  );
};

export default Cart;
