import { FaAmazon } from "react-icons/fa";
import { BiAtom } from "react-icons/bi";

const Task = ({ task }) => {
  return (
    <div className="task">
      <h3>
        <FaAmazon style={{ color: "red", border: "1px solid green" }} />
        {task.text}
      </h3>
      <p>
        <BiAtom />
        {task.day}
      </p>
    </div>
  );
};

export default Task;
