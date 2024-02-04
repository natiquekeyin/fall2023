import { useState } from "react";
import Task from "./Task";

// const tasks = [
//   {
//     id: 1,
//     text: "School appointment",
//     day: "November 10 at 1pm",
//     reminder: true,
//   },
//   { id: 2, text: "GYM", day: "November 15 at 10pm", reminder: false },
//   { id: 3, text: "Meeting", day: "December 10 at 3 pm", reminder: true },
// ];

// We actually never define tasks or objects like this, rather we either fetch them through an API or any other resource - that might mean that we store the state in APP.js only and transfer the state from component to component to read them .. and to update them.... But here for understanding we are defining our own objects...

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default Tasks;
