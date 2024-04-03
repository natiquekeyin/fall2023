const addPeriod = (s) => {
  return s + "!";
};

const actual = addPeriod("Keyin"); //return Keyin!
const expected = "Keyin";

try {
  if (actual !== expected) {
    throw new Error("Test failed");
  }
} catch (s) {
  console.log(s);
}
