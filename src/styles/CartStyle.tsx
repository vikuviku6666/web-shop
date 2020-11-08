import styled from "styled-components";

export const CartStyle = styled.section`
  .cart {
    padding: 1rem;
    margin: 1rem;
    display: flex;
  }
  .cart-header {
    border-bottom: 0.1rem #c0c0c0 solid;
  }
  .cart-items {
    padding: 0;
    width: 100%;
    list-style-type: none;
  }
  .cart-items img {
    width: 5rem;
  }
  .cart-items li {
    display: flex;
  }
  .cart-items li div {
    padding: 0.5rem;
  }
  .cart-items li div:last-child {
    flex: 1;
  }
  .right {
    text-align: right;
  }
  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .total > div {
    font-size: 2rem;
  }
  .total > div,
  .total > button {
    flex: 1;
  }
  /* Checkout form */
  form {
    width: 100%;
  }
  .form-container {
    width: 100%;
    padding: 0;
    list-style-type: none;
  }
  .form-container li {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
  input {
    padding: 1rem;
    border: 0.1rem #c0c0c0 solid;
  }
  /* Product Details */
  .product-details {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-height: 96vh;
  }
  .product-details img {
    max-height: 100vh;
    max-width: 46rem;
    margin: 0 auto;
  }
  .product-details-description {
    flex: 1 1;
    margin: 1rem;
  }
  .close-modal {
    position: absolute;
    right: 1rem;
    top: 2.5rem;
    z-index: 1000;
  }

  /* Order Details */

  .order-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .order-details li {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .order-details li div {
    padding: 10px;
  }
  .order-details .items {
    text-align: right;
    padding: 0;
  }
  .success-message {
    color: green;
  }
 
`;
