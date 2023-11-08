// Hooks!
// Hooks represent the state of a component...what are the values in a particular component at a particular time.
// 1. useState() hook...

import { useState } from "react";

// const Temp1 = () => {
//   const [x, setX] = useState("Keyin");
//   const [num, setNum] = useState(0);

//   return (
//     <div>
//       <h1>{x}</h1>
//       <h1>{num}</h1>
//       <button
//         onClick={() => {
//           setX("College");

//           setNum(num + 1);
//         }}
//       >
//         {" "}
//         Change
//       </button>
//     </div>
//   );
// };

// export default Temp1;

// const Temp1 = () => {
//   const [name, setName] = useState("Alan Smith");

//   let changeState = () => {
//     setName("Bob Smith");
//   };
//   return (
//     <div>
//       <h1>{name}</h1>
//       <button onClick={changeState}>Update</button>
//     </div>
//   );
// };

// export default Temp1;

const Temp1 = () => {
  const obj = {
    name: "Alan Smith",
    age: 29,
    height: 5.33,
    isYoung: true,
  };

  //   let changeState = () => {
  //     setPerson({
  //       name: "Bob Smith",
  //       age: 45,
  //       height: 5.4,
  //       isYoung: false,
  //     });
  //   };

  //   let changeState = () => {
  //     setPerson({
  //       name: "Bob Smith",
  //     });
  //   };

  let changeState = () => {
    setPerson((previousState) => {
      return {
        ...previousState,
        name: "Bob Smith",
      };
    });
  };

  const [person, setPerson] = useState(obj);
  return (
    <div>
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <h1>{person.height}</h1>
      <h1>{person.isYoung.toString()}</h1>
      <button onClick={changeState}>Change</button>
    </div>
  );
};

export default Temp1;
