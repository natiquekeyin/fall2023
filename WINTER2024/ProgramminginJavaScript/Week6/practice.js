// Multi-line Template literal to wrap the CSV data

var csvData = `01234,Alan Smith,519-123-4567,62 inches
01235,              Bob        Woolmer, 2261234567,           149cm
01236,             Christina Lee      , 519 222 1234, 138 cm`;

// Required: CLEAN THE DATA...

// Req 1: Split the string into an Array of separate rows(i.e an Arry with rows separated by \n).
// Req 2: Each row contains informaton of a user like: ID, Name, Phone Number, and Height info all separated by the commas. Split each row into an Array with all of its different fields. N.B:We need to deal with extra and/or no whitespace between the commas...

function splitIntoRows(s) {
  return s.split(/\r?\n/g);
}

function rowToFields(row) {
  return row.split(/\s*,\s*/g);
}

function processCSV(csv) {
  // step1 - break the csv into rows
  let rows = splitIntoRows(csv);
  //step2 - split all rows into array of fields
  //   let data = [];
  //   for (let i = 0; i < rows.length; i++) {
  //     let row = rows[i];
  //     let fields = rowToFields(row);
  //     data.push(fields);

  //     // console.log(fields);
  //   }

  // for (let row of rows) {
  //   let fields = rowToFields(row);
  //   data.push(fields);
  // }

  let data = rows.map((row) => rowToFields(row));

  console.log(data);

  return csv;
}

// logout processing

var processed = processCSV(csvData);
//console.log(processed);

// Continue from here... in next session..
