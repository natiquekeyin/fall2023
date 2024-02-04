var csvData = `01321,Alan Smith,519-123-4567,62 inches
01322        ,        James      Lee,     2261234567, 149 cm
01323,                      Kim Thomas       ,5321234123,138cm`;

// Clean the above data and make it looks like normal data...
/*

var data = `01321,Alan Smith,519-123-4567,62 inches
            01322,James Lee,226-123-4567,56 inches
            01323,Kim Thomas,532-123-4567,60 inches`;
*/

// 1. Split the string into an array of separate rows (i.e an array with rows separated  by \n).

//2. Each row contains information of a user: ID, Name, Phone number and Height..all separated by the commas. Split each row into an array with all diffferent fields. ...You need to deal with extra and/or no whitespace between commas.

// 3. Get rid of any extra spaces around the name field..
// 4. Using a RegExp, extract the Area Code from the Phone Number field. All the phone numbses are in one of two formats "555-523423423" or "555555555"

// 5. Check if the height field has "cm" at the end. If it does, strip that out, converthe the number to inches, and turn it into a string in the form of "xx inches". For example "152 cm" should become "59 inches"

function splitIntoRows(a) {
  return a.split(/\r?\n/);
}

function removeExtraSpaces(s) {
  return s.replace(/\s+/, " ");
}

function extractAreaCode(phoneNumber) {
  let matches = phoneNumber.match(/(\d{3})-?(\d{3})-?(\d{4})/);

  if (matches) {
    return `(${matches[1]})`;
  }
  return phoneNumber;
}

function normalizeHeight(height) {
  if (height.endsWith("inches")) {
    return height;
  }
  let cm = parseFloat(height);
  let inches = cm * 0.39;

  return `${inches} inches `;
}

function rowToFields(row) {
  let fields = row.split(/\s*,\s*/);

  // Step 3: Get rid of extra spaces around name..
  // fields[1] = fields[1].replace(/\s+/, " "); OLD CODE
  fields[1] = removeExtraSpaces(fields[1]);

  // Step 4: extracting area code and do processing
  // let phoneNumber = fields[2];
  // let matches = phoneNumber.match(/(\d{3})-?(\d{3})-?(\d{4})/);

  // if (matches) {
  //   fields[2] = `(${matches[1]})-${matches[2]}-${matches[3]}`;
  // } //OLD CODE

  fields[2] = extractAreaCode(fields[2]);
  // Step 5:

  // let height = fields[3];
  // if (height.endsWith("cm")) {
  //   let cm = parseFloat(height);
  //   let inches = cm * 0.39;
  //   fields[3] = `${inches} inches`;
  // } //OLD CODE

  fields[3] = normalizeHeight(fields[3]);

  return fields.join(","); //join converts an array to a string with separated byt the given character...
}

function processCSV(csv) {
  //Step1: break the csv into rows

  let rows = splitIntoRows(csv);

  //  Step2: split all rows into array of fields..

  //   let data = [];
  //   for (let i = 0; i < rows.length; i++) {
  //     let row = rows[i];
  //     let fields = rowToFields(row);
  //     // console.log(fields);
  //     data.push(fields);
  //   }

  //   for (let row of rows) {
  //     let fields = rowToFields(row);
  //     data.push(fields);
  //   }

  //   let data = rows.map(function (row) {
  //     return rowToFields(row);
  //   });

  let data = rows.map((row) => rowToFields(row));
  // data.join("\n");

  // console.log(data);
  //   return rows;

  return data.join("\n");
}

var processed = processCSV(csvData);
console.log(csvData);
console.log("------");
console.log(processed);
// console.log(processed);
