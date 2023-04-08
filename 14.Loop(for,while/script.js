//1
function Days(age) {
  return age * 365;
}
let val1 = Days(0);
console.log(val1);
let val2 = Days(20);
console.log(val2);
let val3 = Days(65);
console.log(val3);
//1
let frontEnd="Front-end Developer";
let name2=" ";
for(let i=0;i<frontEnd.length;i++){
  name2+=frontEnd[i];
  console.log(name2);
}

//3
let sum;
sum = 0;
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    sum += i;
  }
 
}
console.log(`Sum:${sum}`);
//4
let multiply;
multiply = 1;
for (let i = 1; i < 17; i++) {
  if (i % 2 == 1) {
    multiply *= i;
  }
}
console.log(`Multipy:${multiply}`);
//4
let multiply2;
multiply2 = 1;
for (i = 10; i <= 18; i++) {
  multiply2 *= i;
}
console.log(`Multipy:${multiply2}`);
//5
let Sum;
Sum = 0;
for (let i = 17; i <= 30; i++) {
  if (i != 19 && i != 20) {
    Sum += i;
  }
}
console.log(`Sum:${Sum}`);


//7
let power;
power = 1;
for (i = 0; i <= 16; i++) {
  if (i % 2 == 0) {
    power = 2**i;
    console.log(`Power:${power}`);
  }
}




