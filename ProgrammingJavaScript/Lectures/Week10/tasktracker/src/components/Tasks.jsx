const tasks = [
  {
    id: 1,
    text: "School appointment",
    day: "November 10 at 1pm",
    reminder: true,
  },
  { id: 2, text: "GYM", day: "November 15 at 10pm", reminder: false },
  { id: 3, text: "Meeting", day: "December 10 at 3 pm", reminder: true },
];

const Tasks = () => {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.text}</h3>

          <h3>{task.day} </h3>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
