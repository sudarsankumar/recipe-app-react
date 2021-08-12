import React , {useState} from 'react'
import "./Key"
import './App.css';
import Axios from 'axios'
import RecipeTile from './RecipeTile';

function App() {
  const [query, setQuery] = useState("")
  const [recipes, setRecipes] = useState([])
  const [dropdown, setDropdown] = useState("vegan")
  var url = `https://api.edamam.com/search?q=${query}&app_id=0596f815&app_key=030444a97b3fab29650d6eae92622e8b&health=${dropdown}`
  async function getRecipe()
  {
    var result = await Axios.get(url)
    setRecipes(result.data.hits)
  }
  const sub = (e) => {
    e.preventDefault()
    getRecipe()
  }
  return (
    <div className="app">
      <h1 onClick={getRecipe}>Recipe App</h1>
      <form className="app-search-form" onSubmit={sub}>
        <input type="text" className="app-search-form-input" placeholder="Enter Ingridient" value={query} onChange={(e) => setQuery(e.target.value)} />
        <select onChange={(e) => setDropdown(e.target.value)} className="app-search-form-dropdown" >
          <option value="vegan">Vegan</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="dairy-free">Dairy-free</option>
          <option value="gluten-free">Gluten-free</option>
          <option value="wheat-free">Wheat-free</option>
          <option value="fat-free">Fat-free</option>
          <option value="low-sugar">Low-sugar</option>
          <option value="egg-free">Egg-free</option>
          <option value="peanut-free">Peanut-free</option>
          <option value="tree-nut-free">Tree-nut-free</option>
          <option value="soy-free">Soy-free</option>
          <option value="fish-free">Fish-free</option>
          <option value="shellfish-free">Shellfish-free</option>
        </select>
        <input type="submit" className="app-search-form-submit" value="Search"  />
      </form>
      <div className="recipe-section">
        {recipes.map(recipe => {
          return <RecipeTile recipe={recipe} />
        })}
      </div>
    </div>
  );
}

export default App;
