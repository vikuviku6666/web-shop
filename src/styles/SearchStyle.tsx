import styled from "styled-components";

export const SearchStyle = styled.section`
  padding: 10px;
  margin: 10px auto;
  display: grid !important;
  grid-row-gap: 10px;
  grid-column-gap: 5px;
  grid-template-columns: repeat(5, auto);
  text-align: center;
  /*  border: 2px solid red; */

  div {
    color: black;
  }
  img {
    height: 70%;
    width: 90%;
    text-align: center;
  }
  p {
    font-size: 10.5px;

    text-align: center;
  }
  /*  Button {
    opacity: 0;
  }
  Button:hover,
  Button:focus {
    opacity: 100%;
  } */
  @media (max-width: 1400px) {
    grid-template-columns: repeat(4, auto);
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, auto);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, auto);
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(1, auto);
  }
`;
