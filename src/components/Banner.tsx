import React from "react";
import { Carousel } from "react-bootstrap";
interface IImageProps {
  myValue: any[];
}
const containerStyle = {
  width: "30%",
  marginTop: "2%",
  marginLeft: "auto",
  marginRight: "auto",
  
};
const itemStyle = {
  width: "100%", 
  height: "20%", 
  marginTop: "2%",
  marginLeft: "auto",
  marginRight: "auto",
};

const style = {
 width: "100%",
  
};

export const Banner: React.FC<IImageProps> = (props: IImageProps) => {
  const imageValue: IImageProps[] = [];
  props.myValue.map((i) => imageValue.push(i.imageUrl));
  return (
    <Carousel style={containerStyle} >
      <Carousel.Item style={itemStyle}>
        <img
         
          src={`${imageValue[0]}`}
          alt="First slide"
          style={style}
        />
      </Carousel.Item>
      <Carousel.Item style={itemStyle}>
        <img
          
          src={`${imageValue[1]}`}
          alt="Third slide"
          style={style}
        />
      </Carousel.Item>
      <Carousel.Item style={itemStyle}>
        <img
          
          src={`${imageValue[2]}`}
          alt="Third slide"
          style={style}
        />
      </Carousel.Item>
    </Carousel>
  );
};
