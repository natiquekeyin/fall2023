import Button from "./Button";

const Footer = () => {
  const goClick = () => {
    console.log("Click");
  };

  return (
    <div>
      <h1>Footer</h1>
      <p>This is Footer</p>
      <Button color="lightgray" text="I am footer" func={goClick} />
    </div>
  );
};

export default Footer;
