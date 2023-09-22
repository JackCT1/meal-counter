import { useState } from "react";

export default function Meal(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{props.mealName}</button>
      <span>{count}</span>
    </div>
  );
}
