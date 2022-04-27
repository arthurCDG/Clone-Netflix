import "./App.css";

import data from "./assets/movies.json";

import Section from "./components/Section";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      {data.map((categoryObject, indexOfCategory) => {
        console.log(categoryObject);

        return (
          <Section key={indexOfCategory} categoryObject={categoryObject} />
        );
      })}
    </div>
  );
}

export default App;
