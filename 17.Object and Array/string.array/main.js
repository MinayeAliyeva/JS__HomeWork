// 1.Write a function called: 'getUpper(anyArr)' that returns the newArr with the uppercased first and last character.
const arr1 = ["guba", "mingecevir", "baku", "gazag", "gence", "shirvan"];
// console.log: ['GubA', 'MingeceviR', 'BakU', 'GazaG', 'GencE', 'ShirvaN']
function getUpper(array) {
  return array.map(
    (item) =>
      item[0].toUpperCase() + item.slice(1, -1) + item.at(-1).toUpperCase()
  );
}
console.log(getUpper(arr1));
// 2.String and Array
let text = "We are MERN-Stack developers";
// 1.Replace 'MERN Stack' with 'Front-end'.  // We are Front-end developers!
console.log(text.replace(" MERN-Stack ", " Front-end "));
// 2.Replace all 'e' with 'a'. // wa ara marn-stack davalopars!
console.log(text.replaceAll("e", "a").toLowerCase());
// 3."in Microsoft!" concat to 'text'. //We are MERN-Stack developers in Microsoft!
console.log(text.concat(" in Microsoft!"));
//4.Find index of each 'r' and collect them in a new Array called 'newArr'  //[4, 9, 26]
let newArr = text
  .split("")
  .map((item, index) =>
    item.toLowerCase() == "r" ? console.log(index) : null
  );
//5.Find index of first 'r' (excepting 'are').  // 9
let newArr1 = text.toLowerCase().indexOf("r", 5);
console.log(newArr1);


// 3.Write a function(arrow function) called 'calcArea()' which to calculate sum region's area,
//  if region's length is equal to 6 in 'arr2'.
const arr3 = [
  {
    region: "Yasamal",
    area: 170,
  },

  {
    region: "Nizami",
    area: 20,
  },

  {
    region: "Nesimi",
    area: 10,
  },

  {
    region: "Sebail",
    area: 30,
  },
  {
    region: "Xetai",
    area: 30,
  },
];

// console.log: (60)

function calcArea(array) {
  let result = array.reduce(
    (acc, curr) => (curr.region.length === 6 ? acc + curr.area : acc),
    0
  );
  console.log(result);
}
calcArea(arr3);

// 4.Sort 'arr3' ascending order.
const arr4 = [8, 44, 14, 2, 23, 1, 22, 34, 9, 0, 6];

//  console.log: [0, 1, 2, 6, 8, 9, 14, 22, 23, 34, 44]
let sortElements = arr4.sort((a, b) => a - b);
console.log(sortElements);
// 5.Gather all nested array in one array.
const arr5 = [5, [8], [9, ["hi", ["don't touch me"], [0]], "9"]];
// console.log: [5, 8, 9, 'hi', "don't touch me", 0, '9']
let flatElements = arr5.flat(4);
console.log(flatElements);
// 6.Sort array "colors" with color's length, if color's length is equal to each other sort them alphabetically.
const colors = [
  "green",
  "blue",
  "yellow",
  "black",
  "red",
  "brown",
  "white",
  "gray",
  "violet",
  "pink",
];
// console.log: ['red', 'blue', 'gray', 'pink', 'black', 'brown', 'green', 'white', 'violet', 'yellow']
let sortColors = colors.sort((a, b) =>
  a.length == b.length ? a.localeCompare(b) : a.length - b.length
);
console.log(sortColors);
