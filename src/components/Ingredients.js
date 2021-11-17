import baguette from "../baguette.svg";

function Ingredients() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={baguette} className="App-logo" alt="logo" />
        <form>
          <label for="ingredient_1">1st ingredient</label>
          <br />
          <input type="text" id="ingredient_1" name="ingredient_1"></input>
        </form>
        <a
          className="App-link"
          href="https://www.kingarthurbaking.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn to bake bread
        </a>
      </header>
    </div>
  );
}

export default Ingredients;
