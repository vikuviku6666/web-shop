import React, { useState, useEffect } from "react";
import { AdminStyle } from "../styles/AdminStyle";
import axios from "axios";
import {  Button } from "react-bootstrap";
export interface IOrder {
  id: number;
  companyId: number;
  createdBy: string;
  paymentMethod: number;
  totalPrice: number;
  status: number;
  orderRows: [
    {
      productId: number;
    }
  ];
}

const AdminPage: React.FC = () => {
  const defaultValue: IOrder[] = [];
  const [orders, setOrders] = useState(defaultValue);

  useEffect(() => {
    async function getData() {
      let result = await axios.get<IOrder[]>(
        "https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=12684"
      );
      setOrders(result.data);
    }
    getData();
  }, []);
  const removeData = async (id:any) => {
    axios
        .delete(
          `https://medieinstitutet-wie-products.azurewebsites.net/api/orders/${id}`
        )
        .then((res) => {
          console.log(res);
          console.log(res.data);
        });
  };


    let ordersHtml = orders.map((order: IOrder) => {
      return (
        <tr key={order.id}>
          <td>{order.id}</td>

          <td> {order.totalPrice}</td>
          <td>{order.createdBy}</td>
          <td>
            {order.orderRows.map((item) => (
              <div key={item.productId}>{item.productId}</div>
            ))}
          </td>
          <td>
            <Button
              variant="outline-dark"
              type="button"
              onClick={() => removeData(order.id)}
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  
  return (
      <AdminStyle className="orders">
        <h2>Orders</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>

              <th>TOTAL</th>

              <th>EMAIL</th>

              <th>ITEMS</th>
            </tr>
          </thead>
          <tbody>
           {ordersHtml}
          </tbody>
        </table>
      </AdminStyle>
   
  );


}


export default AdminPage;
