import { useEffect, useState } from "react";

const Temp4 = () => {
  const [count, setCount] = useState(0);

  const [x, setX] = useState(0);
  useEffect(() => setCount(count + 1));

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setX(x + 5)}>Change X</button>
    </>
  );
};

export default Temp4;
