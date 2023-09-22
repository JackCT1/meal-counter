import "./App.css";
import Meal from "./components/meal";

function App() {
  const meal = "Vegetarian";
  const mealTypes = [
    "Vegetarian",
    "Vegan",
    "Halal",
    "Gluten-free",
    "Anything!",
  ];
  const mealComponents = [];
  {
    mealTypes.forEach((meal) => {
      mealComponents.push(<Meal mealName={meal} />);
    });
  }
  return (
    <>
      <h1>Meal Counts</h1>
      {mealComponents}
    </>
  );
}

export default App;
