// Hooks!
// Hooks represent the state of a component...what are the values in a particular component at a particular time.
// 1. useState() hook...

// import { useState } from "react";

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

//           setNum(num + 5);
//         }}
//       >
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

// const Temp1 = () => {
//   const obj = {
//     name: "Alan Smith",
//     age: 29,
//     height: 5.33,
//     isYoung: true,
//   };

// let changeState = () => {
//   setPerson({
//     name: "Bob Smith",
//     age: 45,
//     height: 5.4,
//     isYoung: false,
//   });
// };

// let changeState = () => {
//   setPerson({
//     name: "Bob Smith",
//   });
// };

//   let changeState = () => {
//     setPerson((previousState) => {
//       return {
//         ...previousState,
//         age: 45,
//       };
//     });
//   };
//   // spread the previous state values and update the age to 45
//   const [person, setPerson] = useState(obj);
//   return (
//     <div>
//       <h1>{person.name}</h1>
//       <h1>{person.age}</h1>
//       <h1>{person.height}</h1>
//       <h1>{person.isYoung.toString()}</h1>
//       <button onClick={changeState}>Change</button>
//     </div>
//   );
// };

// export default Temp1;

// const Temp1 = () => {
//   let num = [10, 20, 30, 40];
//   let [numbers, setNumbers] = useState(num);

//   let changeList = () => {
//     setNumbers((previousState) => {
//       return [...previousState, Math.floor(Math.random() * 50)];
//     });
//   };

//   return (
//     <div>
//       <ul>
//         {numbers.map((n, i) => (
//           <li key={i}>{n}</li>
//         ))}
//       </ul>
//       <button onClick={changeList}>Change</button>
//     </div>
//   );
// };

// export default Temp1;

// Hooks: 1. useState()
// 2. useEffect()  is used to produce some side effects.. like bringing data from an api or resource.. useEffect runs either with every rendering of the component or every change in a state variable OR only once...
//  useEffect(()=>{},[]);  ONLY ONCE
//  useEffect(()=>{}); With every re-rendering
//  useEffect(()=>{},[num]) With every change in num state variable...

import { useState, useEffect } from "react";

// const Temp1 = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   }, []);

//   return <h1>The count is renderd {count} times!</h1>;
// };

// export default Temp1;

const Temp1 = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://reqres.in/api/users");
      const data = await res.json();
      console.log(data);
      setUsers(data.data);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <h5>{user.email}</h5>
      ))}
    </div>
  );
};

export default Temp1;
