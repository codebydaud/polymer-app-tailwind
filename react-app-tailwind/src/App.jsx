import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import RecipeTitle from './components/RecipeTitle';
import DetailsButton from './components/DetailsButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RecipeTitle name="Zinger Burger" />
        <DetailsButton name="Click Me!"/>
      </header>
    </div>
    // <div className="App">
    //   <recipe-title name="Chicken Pizza"></recipe-title>
    //   <details-button name="Click Me!"></details-button>
    // </div>
  );
}

export default App


