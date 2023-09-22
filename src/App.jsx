import { useState } from "react";
import "./App.css";
import Meal from "./components/meal";

function App() {
  const [totalMeals, setTotalMeals] = useState(0);

  const mealTypes = [
    "Vegetarian",
    "Vegan",
    "Halal",
    "Gluten-free",
    "Anything!",
  ];

  const mealComponents = [];

  const calculateTotalMeals = () => {
    setTotalMeals(totalMeals + 1);
  };

  {
    mealTypes.forEach((meal) => {
      mealComponents.push(
        <Meal mealName={meal} addMeals={calculateTotalMeals} />
      );
    });
  }

  return (
    <>
      <h1>Meal Counts</h1>
      {mealComponents}
      <div>
        <p>Total</p>
        <span>{totalMeals}</span>
      </div>
      <div>
        <button onClick={() => setTotalMeals(0)}>Reset</button>
      </div>
    </>
  );
}

export default App;
