import { useState } from "react";
const Temp3 = () => {
  let nums = [11, 22, 45, 23];
  let [numbers, setNumbers] = useState(nums);
  let changeList = () => {
    setNumbers((previousState) => {
      return [...previousState, Math.round(Math.random() * 50)];
    });
  };

  return (
    <div>
      <ul>
        {numbers.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
      <button onClick={changeList}>Update Array</button>
    </div>
  );
};

export default Temp3;
