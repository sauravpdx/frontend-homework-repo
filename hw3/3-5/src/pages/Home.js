import React from "react";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Container>
        <h1>World of Thrones!</h1>
        <p>
          Welcome to World of Thrones! Use the navigation bar to explore the
          vast world of Thrones.
        </p>
        <p>
          <strong>Search:</strong> Find your favorite characters
        </p>
        <p>
          <strong>Houses:</strong> Discover the distribution of characters
          across the houses with a visually engaging donut chart.
        </p>
      </Container>
    </div>
  );
};

export default Home;
