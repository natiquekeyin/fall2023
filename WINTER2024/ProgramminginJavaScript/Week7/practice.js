// Multi-line Template literal to wrap the CSV data

var csvData = `01234,Alan Smith,519-123-4567,62 inches
01235,              Bob        Woolmer, 2261234567,           149cm
01236,             Christina           Lee      , 519 222 1234, 138 cm`;

// Required: CLEAN THE DATA...

// Req 1: Split the string into an Array of separate rows(i.e an Arry with rows separated by \n).
// Req 2: Each row contains informaton of a user like: ID, Name, Phone Number, and Height info all separated by the commas. Split each row into an Array with all of its different fields. N.B:We need to deal with extra and/or no whitespace between the commas...

// Req 3: Get rid of any extra spaces around the Name field...

// Req 4: Using a RegExp extract the Area Code from the phone number fields. All phone numbesrs in in one of two formats: "123-345566", or "123234234", "123 123 4567"

// Req 5: Check if the Height field has "cm" at the end. If it does, strip that out, convert the number to inches, and turn it into a String in the form "xx inches". For example: "152 cm" should become "59 inches".

// Req 6.	After doing all of the above steps, create a new record with ID, Name, Area Code, Height In Inches and separate them with commas

// Req 7.	Combine all these processed records into a new CSV formatted string, with rows separated by \n.

function splitIntoRows(s) {
  return s.split(/\r?\n/g);
}

function removeExtraWhiteSpace(s) {
  return s.replace(/\s+/g, " ");
}

function extractAreaCode(phoneNumber) {
  let matches = phoneNumber.match(/(\(?\d{3}\)?)?[-\s]*\d{3}[-\s]*\d{4}/);
  if (matches) {
    return matches[1];
  }
  return phoneNumber;
}

function normalizeHeight(height) {
  // return if it is already in inches
  if (height.endsWith("inches")) {
    return height;
  }

  // get the height in cm as a number

  let cm = parseFloat(height);
  let inches = Math.round(cm * 0.39);

  return `${inches} inches`;
}

function rowToFields(row) {
  // split on , with or without space...
  let fields = row.split(/\s*,\s*/g);

  // Remove extra whitespace from name

  // fields[1] = fields[1].replace(/\s+/g, " ");

  fields[1] = removeExtraWhiteSpace(fields[1]);

  // Extra Area code from phone numbers:
  fields[2] = extractAreaCode(fields[2]);

  // normalize the height to inches..

  fields[3] = normalizeHeight(fields[3]);

  return fields.join(",");
}

function processCSV(csv) {
  // step1 - break the csv into rows
  let rows = splitIntoRows(csv);
  // step2 - s;litting the row into fields array

  let data = rows.map((row) => rowToFields(row)); //***/

  // console.log(data.join("\n"));
  return data.join("\n");
}

// logout processing

var processed = processCSV(csvData);

console.log(processed);
console.log(csvData);
// Continue from here... in next session..
