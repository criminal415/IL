const fs = require('fs');
//object 데이터 생성을 편하게 만들어준다. class!!

//직접 입력할 때!
let Hero1 = { q: 'consume', w: 'snowball' };
let Hero2 = { q: 'strike', w: 'courage' };

//2016년 이전 문법 함수
function 기계(skill1, skill2) {
  //부모
  this.q = skill1; //this는 기계로부터 생성되는 object를 뜻한다(instance)
  this.w = skill2;
}
기계.prototype.name = 'kim'; //prototype에 추가하면 자식들도 사용가능하다!!(prototype chain)
let Hero3 = new 기계('consume', 'snowball'); //객체지향 문법의 핵심!!
let Hero4 = new 기계('strike', 'courage'); //자식
console.log(Hero3); //기계 { q: 'consume', w: 'snowball' }
console.log(Hero3.name); // kim //실제 Hero3에는 없지만 컴퓨터내에서 부모까지 검색!!(prototype chain)

let 배열1 = [1, 2, 3]; // 인간이 편하게 쓸 때
console.log(배열1);
let 배열2 = new Array(4, 5, 6); //컴퓨터가 사용할 때
console.log(배열2);
배열1.sort(); //배열에 sort, length 등을 쓸 수 있는 이유!!! (prototype chain)//Array.prototype에 모두 들어있다!!!

//2016년 이후 es6문법
class Hero {
  constructor(skill1, skill2) {
    this.q = skill1;
    this.w = skill2;
  }
  sayHi() {
    console.log('안녕!');
  }
}
let Hero5 = new Hero('consume', 'snowball');
console.log(Hero)
Hero5.sayHi();
Hero.sayHellow = function () {
  console.log('안녕하세요!');
};
Hero.sayHellow();
console.log(Hero);

//아래와 같이 '필요에 따라' 클래스를 동적으로 생성하는 것도 가능합니다.
function makeClass(phrase) {
  return class {
    sayHi() {
      console.log('phrase');
    }
  };
}

let User = makeClass('Hello');

new User().sayHi;
