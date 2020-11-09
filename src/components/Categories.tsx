import React, { useState, useEffect } from "react";
import axios from "axios";
import { ButtonGroup, ButtonToolbar, Button } from "react-bootstrap";

interface ICategoryProps{
  id: number;
  name: string;
}

const Categories: React.FC = () => {
  const defaultValue: ICategoryProps[] = [];
  const [category, setCategory] = useState(defaultValue);

  useEffect(() => {
    async function getData() {
      let result = await axios.get<ICategoryProps[]>(
        "https://medieinstitutet-wie-products.azurewebsites.net/api/categories"
      );
      setCategory(result.data);
    }
    getData();
  }, []);
  return (
    <>
      <ButtonToolbar
        className="mt-5 mb-3 justify-content-md-center"
        aria-label="Toolbar with Button groups"
      >
        <ButtonGroup aria-label="First group">
          <Button href="#" className="mr-3" size="lg" variant="outline-dark">
            {category[0].name}
          </Button>
          <Button href="#" className="mr-3" size="lg" variant="outline-dark">
            {category[1].name}
          </Button>
          <Button href="#" className="mr-3" size="lg" variant="outline-dark">
         {category[2].name}
          </Button>
          <Button href="#" className="mr-3" size="lg" variant="outline-dark">
            {category[3].name}
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
    </>
  );
};

export default Categories;
