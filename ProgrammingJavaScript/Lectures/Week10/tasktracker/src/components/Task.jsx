import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "green", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
    </div>
  );
};

export default Task;

// if(task.reminder===true) "reminder" else " "
