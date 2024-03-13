import { useState } from "react";

const Temp1 = () => {
  let [num, setNum] = useState(0);

  let [name, setName] = useState("Alan Smith");

  function handleClick() {
    setNum(num + 1);
    setName("Bob Woolmer");
  }
  return (
    <div>
      <h1> Use State Hook</h1>
      <p>
        {num} - {name}
      </p>
      <button onClick={handleClick}>Change Number</button>
    </div>
  );
};

export default Temp1;
