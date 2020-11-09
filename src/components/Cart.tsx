import React, { useState, ChangeEvent } from "react";
import { CartStyle } from "../styles/CartStyle";
import { IMovie } from './Main';
import axios from "axios";

interface IImageProps {
  myValue: IMovie[];
  removeItem(value: IMovie): void;
}



export interface IOrderProps {
  id: number;
  companyId: number;
  email: string;
  createdBy: string;
  paymentMethod: string;
  totalPrice: number;
  orderRows: [];
}

const Cart: React.FC<IImageProps> = (props: IImageProps) => {
  const value = props.myValue;
 
  const [state, setState] = useState({
    "companyId": 12684,
    "email": "vv@gmail.com",
    "paymentMethod": "MasterCard",
    "totalPrice": value.reduce((a, c) => a + c.price * c.count, 0),  
  });
  const [showCheckout, setShowCheckout] = useState(false);
  const [data, setData] = useState<IOrderProps>({
    id: 0,
    companyId: 12684,
    createdBy: "",
    email:"",
    paymentMethod: "",
    totalPrice: 0,
    orderRows: [],
  });
  let propsTo = value.map((item: IMovie) => {
    return (
      {
        "productId": item.id,
        "product": null,
        "amount": item.price,
      }
    );
  
 
});  
 
   const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
     
    setState({ ...state, [e.target.name]: e.target.value });
  };

  /* order creating */
  const createOrder = async(e: any) => {
    e.preventDefault();

  await axios
    .post("https://medieinstitutet-wie-products.azurewebsites.net/api/orders", {
      "companyId": state.companyId,
      "createdBy": state.email,
      "paymentMethod": state.paymentMethod,
      "totalPrice": state.totalPrice,
      "orderRows": propsTo,
    })
    .then(function (response) {
      setData(response.data);
     
      console.log("res:",response.data);
    })
    .catch(function (error) {
      console.log("error:",error);
    });
  };

  /* Lifting up state */
  const removeItemFrom = (movie: IMovie) => {
    props.removeItem(movie);
  };

  return (
    <CartStyle>
      {value.length === 0 ? (
        <div className="cart cart-header">Cart is empty</div>
      ) : (
        <div className="cart cart-header">
          You have {value.length} in the cart.
        </div>
      )}

      {data.id > 0 && (
        <div>
          <div className="order-details">
            <h3 className="success-message">Your order have been placed </h3>
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
                    <div>{x.count}{"x"}{x.amount}</div>
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
            {value.map((item) => (
              <li key={item.id}>
                <div>
                  <img src={item.imageUrl} alt={item.name}></img>
                </div>
                <div>
                  <div>{item.name}</div>
                  <div className="right">
                    {item.price} x {item.count}
                    <button
                          className="button"
                          onClick={() => removeItemFrom(item)}
                        >
                          Remove
                        </button> 
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {value.length !== 0 && (
          <div>
            <div className="cart">
              <div className="total">
                <div>
                  Total:
                  {value.reduce((a, c) => a + c.price * c.count, 0)}
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
