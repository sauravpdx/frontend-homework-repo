import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./styles/search.css";

const Search = () => {
  const [thrones, setThrones] = useState([]);
  const [allThrones, setAllThrones] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    handleSearch(newSearchTerm);
  };

  const handleSearch = (inputSearchTerm) => {
    if (inputSearchTerm) {
      const searchResults = allThrones.filter((character) =>
        character.fullName.toLowerCase().includes(inputSearchTerm.toLowerCase())
      );
      setThrones(searchResults);
    }
  };

  const fetchThrones = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setAllThrones(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchThrones("https://thronesapi.com/api/v2/Characters");
  }, []);

  return (
    <>
      <Container fluid className="container-bg">
        <div className="w-75 mx-auto  p-3">
          <h1 className="text-center my-1">Search your Thrones</h1>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Search Your Favorite Thrones ...."
              value={searchTerm}
              onChange={handleSearchInput}
              aria-label="Search Your Favorite throne"
            />
          </InputGroup>
          <section className="text-center">
            <div className="row d-flex align-items-stretch" id="results">
              {thrones.map((throne) => (
                <div key={throne.id} className="col-md-6 col-lg-4 p-2">
                  <div className="card p-1 figure" id="figure">
                    <div className="image-container">
                      <img src={throne.imageUrl} alt={throne.fullName} />
                    </div>
                    <div className="card-body">
                      <h2 className="card-title fw-bolder fs-4">
                        {throne.fullName}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
              {thrones.length === 0 && searchTerm ? (
                <p>No Items Found</p>
              ) : (
                <p></p>
              )}
            </div>
          </section>
        </div>
      </Container>
    </>
  );
};

export default Search;
