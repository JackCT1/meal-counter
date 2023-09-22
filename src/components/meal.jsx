import { useState } from "react";

export default function Meal({ mealName, addMeals }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
          addMeals();
        }}
      >
        {mealName}
      </button>
      <span>{count}</span>
    </div>
  );
}
