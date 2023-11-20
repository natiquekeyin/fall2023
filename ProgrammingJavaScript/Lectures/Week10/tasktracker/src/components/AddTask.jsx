import { useState } from "react";
const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
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
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          value={day}
          placeholder="Add Day and Time"
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save Task" class="btn btn-block" />
    </form>
  );
};

export default AddTask;

/*[11:11 AM] Valentine Ampah
 the form is displayed on the condition that showAddTask state is true and not shown if false
 [11:15 AM] Valentine Ampah
 onAdd changes the value of showAddTask to the previous value, since showAddTask is a boolean, if its true and onAdd is called it sets it to false , and the reverse as well */
