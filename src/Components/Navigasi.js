import React, { useState, useEffect } from "react";

function Navigasi(props) {
  const [input, setInput] = useState("");

  function getInput(event) {
    setInput(() => event.target.value);
  }

  function getProps() {
    props.onSearch(input);
  }

  useEffect(() => {
    getProps();
  }, [input]);

  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <h3 className="navbar-brand">{props.title}</h3>
        <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={input}
            onChange={getInput}
          />
        </form>
      </div>
    </nav>
  );
}

export default Navigasi;
