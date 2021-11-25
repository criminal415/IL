//rest parameter
function 함수(num, ...a) {
  //rest parameter parameter를 제한 없이 받을 수 있으며 맨뒤에만 사용가능
  console.log(a);
}
함수(1, 5, 3, 5, 3, 2, 6);

//spread operator
let arr = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arr, ...arr2]; //...의미 괄호 벗겨주세요!!!
console.log(arr3); //[1, 2, 3, 4, 5]

//destructuring
let [변수1, 변수2] = ['안녕', 100];
console.log(변수1); //'안녕'

let { student, age } = { student: true, age: 20 };
console.log(student, age); // true 20

let 오브젝트 = { student: true, age: 20 };

function 함수2({ student, age }) {
  console.log(student, age);
}

함수2(오브젝트);
