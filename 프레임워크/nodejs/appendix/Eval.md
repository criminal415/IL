
자바스크립트의 객체는 아래와 같이 크게 3개의 객체로 분류할 수 있다.<br>
<img src="https://user-images.githubusercontent.com/90595291/144785698-b9144a12-fee1-42f5-8e34-06bf55236ebe.png" width="50%" height="50%">

### 1. 네이티브 객체
 > - 네이티브 객체(Native objects or Built-in objects or Global 
   Objects)는 ECMAScript 명세에 정의된 객체를 말하며 애플리케이션 전역의 공통 기능을 제공한다. 네이티브 객체는 애플리케이션의 환경과 관계없이 언제나 사용할 수 있다.

  - Object, String, Number, Function, Array, RegExp, Date, Math와 같은 객체 생성에 관계가 있는 함수 객체와 메소드로 구성된다.

  - 네이티브 객체를 Global Objects라고 부르기도 하는데 이것은 전역 객체(Global Object)와 다른 의미로 사용되므로 혼동에 주의하여야 한다.

  - 전역 객체(Global Object)는 모든 객체의 최상위 객체를 의미하며 일반적으로 Browser-side에서는 window, Server-side(Node.js)에서는 global 객체를 의미한다.

#### 1.1 Object 
 > Object() 생성자 함수는 객체를 생성한다. 만약 생성자 인수값이 null이거나 undefined이면 빈 객체를 반환한다. 그 이외의 경우 생성자 함수의 인수값에 따라 강제 형변환된 객체가 반환된다. 이 때, 반환된 객체의 프로퍼티에 바인딩된 객체는 
