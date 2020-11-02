import React from "react";
import Carousel from "react-bootstrap/Carousel";
interface IImageProps {
  myValue: any[];
}
const containerStyle = {
  height: "300px",
  maxwidth: "800px",

  
}
const styles = {
  marginTop: "10px",
   marginLeft: "auto",
  marginRight: "auto"
}


export const Banner: React.FC<IImageProps> = (props: IImageProps) => {
 const imageValue: IImageProps[] = [];
  props.myValue.map((i) => imageValue.push(i.imageUrl));
  return (
    <Carousel style={styles}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${imageValue[0]}/600x400?text=First slide&bg=373940`}
          alt="First slide"
          style={containerStyle}
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${imageValue[1]}/600x400?text=First slide&bg=373940`}
          alt="Third slide"
          style={containerStyle}
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${imageValue[2]}/600x400?text=First slide&bg=373940`}
          alt="Third slide"
          style={containerStyle}
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
