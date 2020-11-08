import styled from "styled-components";

export const Top = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: brown;
  a {
    margin-right: 2px;
    cursor: pointer;
    color: white;
    border-radius: 5px;
    text-align: center;
    padding: 2px;
    margin-left: 40px;
    font-size: 20px;
    text-decoration: none;
  }
  a:hover,
  a:focus {
    text-decoration: underline green;
  }
  input {
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: white;
    background-position: 10px 10px;
    background-repeat: no-repeat;
    margin-right: 10px;
  }
`;
