import styled from "styled-components";

export const AdminStyle = styled.section`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  .orders {
    width: 100%;
    padding: 10px;
   text-align: center;
  }
  tbody > tr:nth-child(odd) {
    background-color: #f0f0f0;
  }
  td {
    padding: 5px;
  }
  th {
    text-align: center;
  }
`;
