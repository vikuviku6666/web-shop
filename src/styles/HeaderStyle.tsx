import styled from "styled-components";

export const Top = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: var(--primaryColor);
  a {
    margin-right: 2px;
    cursor: pointer;
    color: white;
    border-radius: 5px;
    text-align: center;
    padding: 2px;
    font-size: 10px;
    text-decoration:none;
  }
  a:hover,
  a:focus {
text-decoration: underline green;
}
`;
