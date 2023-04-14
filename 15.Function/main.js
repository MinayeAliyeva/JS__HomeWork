// 1.Return the First Element in an Array.
const arr1 = [1, 2, 3];
const arr2 = [80, 5, 100];
const arr3 = [-500, 0, 50];
function getFirstValue(arr) {
  let first = arr[0];
  console.log(first);
}
getFirstValue(arr1);
getFirstValue(arr2);
getFirstValue(arr3);

// /// 2.Return  the Last Element in an Array.
const arr4 = [1, 2, 3];
const arr5 = ["cat", "dog", "duck"];
const arr6 = [true, false, true];
function getLastItem(arr) {
  let lastItem = arr[2];
  console.log(lastItem);
}
getLastItem(arr4);
getLastItem(arr5);
getLastItem(arr6);

/// 3.Find the Index
const arr7 = ["hi", "edabit", "fgh", "abc"];
const arr8 = ["Red", "blue", "Blue", "Green"];
const arr9 = ["a", "g", "y", "d"];
const arr10 = ["Pineapple", "Orange", "Grape", "Apple"];
const findIndex = function (arr, string) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == string) {
      return [i];
    }
  }
};
console.log(findIndex(arr7, "fgh"));
console.log(findIndex(arr8, "blue"));
console.log(findIndex(arr9, "d"));
//4 Return the  Sum of two elements
const arr11 = [3, 2];
const arr12 = [-3, -6];
const arr13 = [7, 3];
function addition(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
addition(arr11);
addition(arr12);
addition(arr13);
//5.Less Than 100?
const arr14 = [22, 15];
const arr15 = [83, 84];
const arr16 = [3, 77];
function sumElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    sum = arr[0] + arr[1];
    if (sum < 100) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}
sumElements(arr14);
sumElements(arr15);
sumElements(arr16);

//6. Volume of a Box
function volumeofBox(width, lenght, height) {
  return width * lenght * height;
}
console.log(volumeofBox(2, 5, 1));
console.log(volumeofBox(4, 2, 2));
console.log(volumeofBox(2, 3, 5));
//7 Basketball Points
function Points(twoPoints, threePoints) {
  return twoPoints * 2 + threePoints * 3;
}
console.log(Points(1, 1));
console.log(Points(7, 5));
console.log(Points(38, 8));
//8 Create a function calledd FillInfo()
const arr17 = [
  {
    name: "my name",
    surname: "my surname",
    city: "my city",
  },
  {
    name: "my name",
    surname: "my surname",
    city: "my city",
  },
  {
    name: "my name",
    surname: "my surname",
    city: "my city",
  },
];
function fillInfo() {
  for (let value of arr17) {
    (value.name = "Minaya"),
      (value.surname = "Aliyeva"),
      (value.city = "Ganja");
  }
  return arr17;
}
console.log(fillInfo());
