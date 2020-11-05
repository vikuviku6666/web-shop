import styled from "styled-components";

export const Middle = styled.div`
  padding: 10px;
  margin: 10px;
  display: grid !important;
  grid-row-gap: 10px;
  grid-column-gap: 5px;
  grid-template-columns: repeat(3, auto);
  text-align: center;
  div {
    color: black;
  }
  img {
    height: 300px;
    width: 305px;
    text-align: center;
  }
  p {
    font-size: 8px;
    width: 170px;
    text-align: center;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(5, auto);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(2, auto);
  }
 
`;
