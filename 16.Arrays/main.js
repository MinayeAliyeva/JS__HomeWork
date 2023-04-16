//1.Concatenate the following two variables and store it in a "fullStack" variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack=frontEnd.concat(backEnd);
console.log(fullStack);
//2. Find the average age
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
function avarageAge(array, number) {
  let sum = 0;
  array.forEach((item) => {
    sum += item;
  });
  return sum/number;
}
console.log(avarageAge(ages, ages.length));
//3. Using countries array console.log following result:
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
function changeName(array) {
 return array.map((item,index)=>`${index}.${item.toUpperCase().slice(0,3)}`)
}
console.log(changeName(countries))
//4.Find the sum of all indexes of 7.
let numbers = [
  4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2,
  5, 6, 3, 7, 3, 7,
];
function sumOfindexes(array) {
  let sum = 0;
  array.map((element, index) =>
    element === 7 ? console.log((sum += index)) : null
  );
}
sumOfindexes(numbers);
//5. Using todos array find all objects that completed property is "true".
const todos = [
  {
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: true,
  },
  {
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  {
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true,
  },
];
function findTrue(array){
  array.map((obj)=>obj.completed===true && console.log(obj))

}
findTrue(todos);
//6. Using todos array find all objects that title property length is grater than 40.
function findTitleLength(array){
  array.map((obj)=>obj.title. length>40 && console.log(obj));

}
findTitleLength(todos);

