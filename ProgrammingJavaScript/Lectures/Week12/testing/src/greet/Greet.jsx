const Greet = () => {
  return (
    <>
      <h1>The greet form</h1>
      <h2>Enter your name</h2>
      <h3>This is some heading</h3>
      <p data-testid="p1">This is a paragraph</p>
      <div>Hellow world</div>
      <form>
        <div>
          <label htmlFor="comment">Comment</label>
          <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name here"
            value="keyin"
            onChange={() => {}}
          />
        </div>

        <div>
          <label htmlFor="location">Location</label>
          <select name="location" id="location">
            <option value="">Select the option</option>
            <option value="on">Ontario</option>
            <option value="nl">Newfoundland</option>
            <option value="pei">Prince Edward Island</option>
            <option value="al">Alberta</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" />I agree
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Greet;
