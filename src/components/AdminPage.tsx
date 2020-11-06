import React, { useState, useEffect } from "react";
import { AdminStyle } from "../styles/AdminStyle";
import axios from "axios";

export interface IOrder {
  id: number;
  createdBy: string;
  totalPrice: number;
  orderRows: [];
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

    let ordersHtml = orders.map((order: IOrder) => {
      return (
        <tr>
          <td>{order.id}</td>

          <td> {order.totalPrice}</td>
          <td>{order.createdBy}</td>
          <td>
            {order.orderRows.map((item) => (
              <div>{item}</div>
            ))}
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
