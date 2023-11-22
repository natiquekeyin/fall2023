import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const TaskDetails = () => {
  const [loading, setLoading] = useState(true);
  const [task, setTask] = useState({});
  const [error, setError] = useState(null);

  const params = useParams();

  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch(`http://localhost:5000/tasks/${params.id}`);
      const data = await res.json();

      setTask(data);
      setLoading(false);
    };
    fetchTask();
  }, []);

  return loading ? (
    <h3>Loading.....</h3>
  ) : (
    <div>
      <h3>{task.text}</h3>
      <p>{task.day}</p>
    </div>
  );
};

export default TaskDetails;
