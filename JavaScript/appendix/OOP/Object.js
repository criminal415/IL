var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male',
  };
  
  delete person.gender;
  console.log(person.gender); // undefined
  
  delete person;
  console.log(person); // Object {first-name: 'Ung-mo', last-name: 'Lee'}

var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male'
  };
  
  // prop에 객체의 프로퍼티 이름이 반환된다. 단, 순서는 보장되지 않는다.
  for (var prop in person) {
    console.log(prop + ': ' + person[prop]);
  }
  
  /*
  first-name: Ung-mo
  last-name: Lee
  gender: male
  */
  
  var array = ['one', 'two'];
  
  // index에 배열의 경우 인덱스가 반환된다
  for (var index in array) {
    console.log(index + ': ' + array[index]);
  }
  
  /*
  0: one
  1: two
  */

//   for-in 문은 객체의 문자열 키(key)를 순회하기 위한 문법이다. 배열에는 사용하지 않는 것이 좋다. 이유는 아래와 같다.

// 객체의 경우, 프로퍼티의 순서가 보장되지 않는다. 그 이유는 원래 객체의 프로퍼티에는 순서가 없기 때문이다. 배열은 순서를 보장하는 데이터 구조이지만 객체와 마찬가지로 순서를 보장하지 않는다.

// 배열 요소들만을 순회하지 않는다.
//   배열 요소들만을 순회하지 않는다.
var array = ['one', 'two'];
array.name = 'my array';

for (var index in array) {
  console.log(index + ': ' + array[index]);
}

/*
0: one
1: two
name: my array
*/

//위의 단점을 극복하기 위해 ES6에서 for-of문 추가
const array = [1, 2, 3];
array.name = 'my array';

for (const value of array) {
  console.log(value);
}

/*
1
2
3
*/

for (const [index, value] of array.entries()) {
  console.log(index, value);
}

/*
0 1
1 2
2 3
*/

// for–in 문은 객체의 프로퍼티를 순회하기 위해 사용하고 for–of 문은 배열의 요소를 순회하기 위해 사용한다.