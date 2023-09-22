import "./App.css";
import Meal from "./components/meal";

function App() {
  const meal = "Vegetarian";
  return (
    <>
      <h1>Meal Counts</h1>
      <Meal mealName={meal} />
    </>
  );
}

export default App;
