import { useState } from "react";
import "./App.css";
import Meal from "./components/meal";

function App() {
  const [totalmeals, setTotalMeals] = useState(0);
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
      <div>
        <p>Total</p>
      </div>
      <div>
        <button>Reset</button>
      </div>
    </>
  );
}

export default App;
