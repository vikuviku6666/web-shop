import React, { useState } from "react";
import axios from "axios";
import { Card, Form, FormControl } from "react-bootstrap";
import { SearchStyle } from "../styles/SearchStyle";


export interface IMovie {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  year: number;
  count: number;
  searchTerm: string;
}

const Search: React.FC = () => {
  const defaultValue: IMovie[] = [];
  const [movies, setMovies] = useState(defaultValue);

  const handleGetRequest = async (e: any) => {
    e.preventDefault();
    const searchTerm = e.target.value;
    await axios
      .get(
        `https://medieinstitutet-wie-products.azurewebsites.net/api/search?=${searchTerm}`
      )
      .then(function (response) {
        console.log("res:", response.data);
        setMovies(response.data);
      })
      .catch(function (error) {
        console.log("error:", error);
      });
  };
  let moviesHtml =
    movies.length > 0 && movies.map((movie: IMovie) => {
      const str = `${movie.name.slice(0, 18)}`;
      const str2 = `${movie.description.slice(0, 130)}`;
      return (
        <Card style={{ width: "16rem" }} key={movie.id}>
          <Card.Img variant="top" src={movie.imageUrl} />
          <Card.Body>
            <Card.Title>{str}</Card.Title>
            <Card.Text>{str2}</Card.Text>
          </Card.Body>
        </Card>
      );
    });
  
  return (
    <>
      <Form
        onChange={handleGetRequest}
        inline
        className="pt-2 justify-content-md-center"
      >
        <FormControl
          type="text"
          as="input"
          placeholder="Search for movies..."
          className="mr-sm-2 "
        />
      </Form>
      <SearchStyle>{moviesHtml}</SearchStyle>
    </>
  );
};

export default Search;
