let tasks = [
  {
    id: 1,
    text: "School Appointment",
    day: "March20th at 2:30pm",
    reminder: true,
  },
  {
    id: 2,
    text: "GYM",
    day: "March 21st at 1:30pm",
    reminder: false,
  },
  {
    id: 3,
    text: "Interview Appointment",
    day: "April 20th at 2:30pm",
    reminder: true,
  },
];

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
