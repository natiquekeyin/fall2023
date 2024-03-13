import { useState } from "react";

const Temp2 = () => {
  let obj = {
    name: "Alan",
    age: 22,
    height: 5.11,
    isYoung: true,
  };

  let [person, setPerson] = useState(obj);

  function changeState() {
    setPerson((previousState) => {
      return {
        ...previousState,
        name: "Bob",
      };
    });
  }
  return (
    <div>
      <h1>{person.name}</h1>
      <p>{person.age}</p>
      <p>{person.height}</p>
      <p>{person.isYoung.toString()}</p>
      <button onClick={changeState}>Change</button>
    </div>
  );
};

export default Temp2;
