import React from "react";
import { ButtonGroup, ButtonToolbar, Button } from "react-bootstrap";

const Categories: React.FC = () => {
  return (
    <>
      <ButtonToolbar
        className="mt-5 mb-3 justify-content-md-center"
        aria-label="Toolbar with Button groups"
      >
        <ButtonGroup  aria-label="First group">
          <Button href="#" className="mr-3" size="lg" variant="outline-dark">
            Action
          </Button>
          <Button href="#" className="mr-3" size="lg" variant="outline-dark">
            Drama
          </Button>
          <Button href="#" className="mr-3" size="lg" variant="outline-dark">
            comedy
          </Button>
          <Button href="#" className="mr-3" size="lg" variant="outline-dark">
            Thriller
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
    </>
  );
};

export default Categories;
