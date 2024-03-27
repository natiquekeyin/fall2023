import { useState } from "react";

const AddTask = ({ onAdd }) => {
  let [text, setText] = useState("");
  let [day, setDay] = useState("");
  let [reminder, setReminder] = useState(false);

  let onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }

    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </div>

      <div className="form-control">
        <label> Day & Time</label>
        <input
          type="text"
          placeholder="Add day & Time"
          onChange={(e) => setDay(e.target.value)}
          value={day}
        />
      </div>

      <div className="form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save Task" className="btn" />
    </form>
  );
};

export default AddTask;
