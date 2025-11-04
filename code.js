const path = require("path");
const lineReader = require("line-reader");

const directory = "C:/Users/doumb/Downloads";
const filePath = path.join(directory, "input.devtools");

// -----------Part I---------------

//(*_*) Rules (*_*)//

function ifIncrease(param) {
  for (let i = 0; i < param.length - 1; i++) {
    if (param[i] >= param[i + 1]) return false;

    const diff = Math.abs(param[i + 1] - param[i]);
    if (diff < 1 || diff > 3) return false;
  }
  return true;
}

function ifDecrease(param) {
  for (let i = 0; i < param.length - 1; i++) {
    if (param[i] <= param[i + 1]) return false;

    const diff = Math.abs(param[i + 1] - param[i]);
    if (diff < 1 || diff > 3) return false;
  }
  return true;
}

// Part 2 Rule
function slicer(data) {
  //console.log(`original : ${data}`);

  for (let i = 0; i <= data.length - 1; i++) {
    const new_data = data.slice(0, i).concat(data.slice(i + 1));
    //console.log(new_data);
    if (ifIncrease(new_data) || ifDecrease(new_data)) {
      return true;
    }
  }
  return false;
}

//(*_*) Cooking data (*_*)//

// Transform each line to table of string
async function transformation(line) {
  const transformed = line.split(" ").map(Number); // I did not change to number so first answer was 479
  return transformed;
}

// read each line lineReader
function readLines(filePath) {
  return new Promise((resolve, reject) => {
    const lines = [];

    lineReader.eachLine(
      filePath,
      (line, last) => {
        lines.push(line);
        //  console.log(`Line read: ${line}`);

        if (last) {
          console.log(" File reading completed.");
          resolve(lines);
        }
      },
      (err) => {
        if (err) reject(err);
      }
    );
  });
}

async function readFile() {
  // console.log(` Reading file: ${filePath}`);

  try {
    const data = await readLines(filePath);
    console.log(` Total lines: ${data.length}`);

    for (const line of data) {
      const transformed = await transformation(line);
      final_data.push(transformed);
    }

    console.log("transformed length:", final_data.length);
  } catch (error) {
    console.error("Error reading file:", error);
  }

  //(*_*) Apply rules now to know safe reports (*_*)//

  const result_part1 = final_data.filter((data) => {
    const state = ifIncrease(data) || ifDecrease(data);
    return state;
  });

  const result_part2 = final_data.filter((data) => {
    const state = ifIncrease(data) || ifDecrease(data) || slicer(data);
    return state;
  });

  console.log(
    ` The result for the safe reports without Problem Dampener is : ${result_part1.length}`
  );
  console.log(
    ` The result for the safe reports including Problem Dampener is : ${result_part2.length}`
  );
}

let final_data = [];
readFile();
