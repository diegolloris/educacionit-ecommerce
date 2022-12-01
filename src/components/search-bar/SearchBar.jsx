import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const SearchBar = (props) => {
  const [buscador, setBuscador] = useState("");

  return (
    <>
      <div className="center">
        <input
          type="text"
          placeholder="Tu búsqueda"
          onBlur={(e) => {
            setBuscador(e.target.value);
          }}
        ></input>
      </div>
      <br />
    </>
  );
};

SearchBar.propTypes = {};

export default SearchBar;
