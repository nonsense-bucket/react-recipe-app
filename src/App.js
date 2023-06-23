import React, {useState, useEffect} from "react";
import './App.css';
import Recipe from "./Recipe";

const App = () => {
  const APP_ID = "d15a16c9";
  const APP_KEY = "9857fa4b53e930c66f9e46631e8f3848";

  const [recipes, setReipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(()=> {
    getReipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const getReipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setReipes(data.hits);
      console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
    <h1 className="title">What are you craving today?</h1>
      <form onSubmit={getSearch} className='search-form'>
        <input onChange={updateSearch} className="search-bar" type="text" value={search}/>
        <button className="search-button" type='submit'>Search</button>
      </form>
      <div className="recipes">
         {recipes.map(recipe => (
        <Recipe 
          key={Math.random()*1000}
          title={recipe.recipe.label}
          dishType={recipe.recipe.dishType}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
        )
      )}
      </div>
     
    </div>
  )
}

export default App;
