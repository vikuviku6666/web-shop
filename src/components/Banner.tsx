import React from "react";
import { Carousel } from "react-bootstrap";
interface IImageProps {
  myValue: any[];
}
const containerStyle = {
  height: "700px",
  width: "800px",
};
const styles = {
  marginTop: "10px",
  marginLeft: "10%",
  marginRight: "10%",
};

export const Banner: React.FC<IImageProps> = (props: IImageProps) => {
  const imageValue: IImageProps[] = [];
  props.myValue.map((i) => imageValue.push(i.imageUrl));
  return (
    <Carousel style={styles}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${imageValue[0]}`}
          alt="First slide"
          style={containerStyle}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${imageValue[1]}`}
          alt="Third slide"
          style={containerStyle}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${imageValue[2]}`}
          alt="Third slide"
          style={containerStyle}
        />
      </Carousel.Item>
    </Carousel>
  );
};
