>delete 함수를 이용하여 객체의 프로퍼티 값을 삭제할 수 있다.
```
var person = {
'first-name': 'Ung-mo',
'last-name': 'Lee',
gender: 'male',
};

delete person.gender;
console.log(person.gender); // undefined

delete person;
console.log(person); // Object {first-name: 'Ung-mo', last-name: 'Lee'}
```
>prop에 객체의 프로퍼티 이름이 반환된다. 단, 순서는 보장되지 않는다.
```
for (var prop in person) {
console.log(prop + ': ' + person[prop]);
}

/*
first-name: Ung-mo
last-name: Lee
gender: male
*/

var array = ['one', 'two'];

for (var index in array) { // index에 배열의 경우 인덱스가 반환된다
console.log(index + ': ' + array[index]);
}

/*
0: one
1: two
*/
```

> + for-in 문은 객체의 문자열 키(key)를 순회하기 위한 문법이다. 배열에는 사용하지 않는 것이 좋다. 이유는 아래와 같다.

  + 객체의 경우, 프로퍼티의 순서가 보장되지 않는다. 그 이유는 원래 객체의 프로퍼티에는 순서가 없기 때문이다. 배열은 순서를 보장하는 데이터 구조이지만 객체와 마찬가지로 순서를 보장하지 않는다.

```
//배열 요소들만을 순회하지 않는다.
var array = ['one', 'two'];
array.name = 'my array';

for (var index in array) {
console.log(index + ': ' + array[index]);
}

/_
0: one
1: two
name: my array
_/

//위의 단점을 극복하기 위해 ES6에서 for-of문 추가
const array = [1, 2, 3];
array.name = 'my array';

for (const value of array) {
console.log(value);
}

/_
1
2
3
_/

for (const [index, value] of array.entries()) {
console.log(index, value);
}

/_
0 1
1 2
2 3
_/
// for–in 문은 객체의 프로퍼티를 순회하기 위해 사용하고 for–of 문은 배열의 요소를 순회하기 위해 사용한다.
```

## Pass-by-reference

```
        var foo = {
        val: 10
        }

        var bar = foo;
        console.log(foo.val, bar.val); // 10 10
        console.log(foo === bar);      // true

        bar.val = 20;
        console.log(foo.val, bar.val); // 20 20
        console.log(foo === bar);      // true
```

   <img src="https://user-images.githubusercontent.com/90595291/144852063-b3d37910-b66c-4bbc-a6f1-0d886fd35c15.png" width="50%" hight="50%">

foo 객체를 객체 리터럴 방식으로 생성하였다. 이때 변수 foo는 객체 자체를 저장하고 있는 것이 아니라 생성된 객체의 참조값(address)를 저장하고 있다.

변수 bar에 변수 foo의 값을 할당하였다. 변수 foo의 값은 생성된 객체를 가리키는 참조값이므로 변수 bar에도 같은 참조값이 저장된다. 즉, 변수 foo, bar 모두 동일한 객체를 참조하고 있다. 따라서 참조하고 있는 객체의 val 값이 변경되면 변수 foo, bar 모두 동일한 객체를 참조하고 있으므로 두 변수 모두 변경된 객체의 프로퍼티 값을 참조하게 된다. 객체는 참조(Reference) 방식으로 전달된다. 결코 복사되지 않는다.

>아래의 경우는 위의 경우와 약간 차이가 있다.
```
var foo = { val: 10 };
var bar = { val: 10 };

console.log(foo.val, bar.val); // 10 10
console.log(foo === bar);      // false

var baz = bar;

console.log(baz.val, bar.val); // 10 10
console.log(baz === bar);      // true
```
<img src="https://user-images.githubusercontent.com/90595291/144854007-b88f5a29-c2fa-49bd-8259-6ca2a5c7c30c.png" width="50%" hight="50%">

변수 foo와 변수 bar는 비록 내용은 같지만 별개의 객체를 생성하여 참조값을 할당하였다. 따라서 변수 foo와 변수 bar의 참조값 즉 어드레스는 동일하지 않다.

변수 baz에는 변수 bar의 값을 할당하였다. 결국 변수 baz와 변수 bar는 동일한 객체를 가리키는 참조값을 저장하고 있다. 따라서 변수 baz와 변수 bar의 참조값은 동일하다.

```
var a = {}, b = {}, c = {}; // a, b, c는 각각 다른 빈 객체를 참조
console.log(a === b, a === c, b === c); // false false false

a = b = c = {}; // a, b, c는 모두 같은 빈 객체를 참조
console.log(a === b, a === c, b === c); // true true true
```

## Pass-by-value
원시 타입은 값(value)으로 전달된다. 즉, 값이 복사되어 전달된다. 이를 pass-by-value(값에 의한 전달)라 한다. 원시 타입은 값이 한번 정해지면 변경할 수 없다.(immutable) 또한 이들 값은 런타임(변수 할당 시점)에 메모리의 스택 영역(Stack Segment)에 고정된 메모리 영역을 점유하고 저장된다.

[객체와 변경불가성(Immutability)]()