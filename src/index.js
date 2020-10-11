import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import SearchBar from "../src/Component/SearchBar";
import Container from "../src/Component/Container";

const App = () => {
  return (
    <div>
      <SearchBar />
      <Container/>
    </div>
  )
};

ReactDOM.render(<App/>,
  document.querySelector("#root"));