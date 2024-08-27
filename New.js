let csvData = "ID, Name, Occupation, Age\n42, Bruce, Knight, 41\n57, Bob, Fry Cook, 19\n63, Blaine, Quiz Master, 58\n98, Bill, Doctor's Assistant, 26";
let rows = csvData.split('\n');
let headers = rows[0].split(',');
let columnCount = headers.length;

let result = [];

// Declare

for (let i = 0; i < rows.length; i++) {
    let row = rows[i].split(',');
    result.push(row);
}

console.log(result);

//Transform

let objectsArray = [];


for (let i = 1; i < result.length; i++) {
    let obj = {};
    for (let a = 0; a < columnCount; a++ ) {
        obj[headers[a].toLowerCase()] = result[i][a];
    }
    objectsArray.push(obj);
}

console.log(objectsArray);

// Manipulate

objectsArray.pop();

objectsArray.splice(1, 0, {id: "48", name: "Barry", occupation: "Runner", age:"25"});

objectsArray.push({id: "7", name: "Bilbo", occupation: "None", age: "111"});

// [
//     { id: "42", name: "Bruce", occupation: "Knight", age: "41"},
//     { id: "48", name: "Barry", occupation: "Runner", age: "25"},
//     { id: "57", name: "Bob", occupation: "Fry Cook", age: "19"},
//     { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58"},
//     { id: "7", name: "Bilbo", occupation: "None", age: "111"},
// ]

console.log(objectsArray);

//Calculate

const ages = [19, 25, 41, 58, 111]

const average = ages.reduce((sum, num) => sum = num, 0) /
ages.length;

console.log("Average age:" , average);

// Convert to CSV

let csvOutput = headers.join(',') + '\n';

for (let i = 0; i < objectsArray.length; i++) {
    let row = [];
    for (let a = 0; a < headers.length; a++) {
        row.push(objectsArray[i][headers[a].toLowerCase()]);
    }
    csvOutput += row.join(',') + '\n';
}

console.log(csvOutput);

