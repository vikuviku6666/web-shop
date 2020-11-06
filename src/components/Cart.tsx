import React, { useState } from "react";
import { CartStyle } from "../styles/CartStyle";
import { IMovie } from "./Main";
import axios from "axios";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";

interface IImageProps {
  myValue: IMovie[];
}

interface IOrderProps {
  companyId: number;
  createdBy: string;
  showCheckout: boolean;
}

const Cart: React.FC<IImageProps> = (props: IImageProps) => {
  
  const [state, setState] = useState({
    companyId: 12684,
    createdBy: "Vinay8888@gmail.com",
   
  });
  const [showCheckout, setShowCheckout] = useState(false);
  const handleInput = (e: MouseEvent<HTMLButtonElement>) => {
    setState({ [e.target.name]: [e.target.value]})
  }
const createOrder = (e: MouseEvent<HTMLButtonElement> ) => {
      e.preventDefault();
      axios.post("https://medieinstitutet-wie-products.azurewebsites.net/api/orders",
        {
          companyId: state.companyId,
          createdBy: state.createdBy,
          orderRows: props.myValue,
          total: props.myValue.reduce((a, c) => a + c.price, 0)
        })
          
      .then((res:any) => res.json())
      .then((data:any) => {
        console.log(data);
      })
      .catch((error:any) => {
        console.log(error);
  })
  };
 

  let moviesHtml =(() => {
  
    return (
      <div>
        {props.myValue.length === 0 ? (
          <div className="cart cart-header">Cart is empty</div>
        ) : (
          <div className="cart cart-header">
            You have {props.myValue.length} in the cart{" "}
          </div>
        )}

       {/*  {order && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <button className="close-modal" onClick={this.closeModal}>
                x
              </button>
              <div className="order-details">
                <h3 className="success-message">Your order has been placed.</h3>
                <h2>Order {order._id}</h2>
                <ul>
                  <li>
                    <div>Name/Email:</div>
                    <div>{order.createdBy}</div>
                  </li>
                  <li>
                    <div>Date:</div>
                    <div>{order.createdAt}</div>
                  </li>
                  <li>
                    <div>Total:</div>
                    <div>{formatCurrency(order.total)}</div>
                  </li>
                  <li>
                    <div>Cart Items:</div>
                    <div>
                      {order.orderRows.map((x) => (
                        <div>
                          {x.count} {" x "} {x.title}
                        </div>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>
            </Zoom>
          </Modal>
        )} */}
        <div>
          <div className="cart">
          
              <ul className="cart-items">
                {props.myValue.map((item) => (
                  <li key={item.id}>
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
                    {
                      props.myValue.reduce((a, c) => a + c.price, 0)
                    }
                  </div>
                  <button
                    onClick={() => {
                      setState({ showCheckout: true });
                    }}
                    className="button primary"
                  >
                    Proceed
                  </button>
                </div>
              </div>
              {showCheckout && (
                <Fade right cascade>
                  <div className="cart">
                    <form onSubmit={createOrder}>
                      <ul className="form-container">
                        <li>
                          <label>Email/Name</label>
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
                </Fade>
              )}
            </div>
          )}
        </div>
      </div>
    );
  
})
  
return (
    
  <CartStyle>{moviesHtml}</CartStyle>
  );
  
}

export default Cart;
