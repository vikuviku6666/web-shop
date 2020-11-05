import styled from "styled-components";

export const Middle = styled.div`
 padding: 10px;
 margin: 10px;
 display: grid !important;
 grid-gap: 10px;
 grid-template-columns: repeat(4, auto);
 text-align: center;
 div {
   background-color: #faf5f5;
   padding-top:5px;
   color: black;
 }
 img {
   height: 200px;
   width: 160px;
 }
 p{
   font-size: 8px;
   width: 170px;
   text-align:center;
 }
`;
