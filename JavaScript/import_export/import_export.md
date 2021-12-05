## import

> 정적 import 문은 다른 모듈에서 내보낸 바인딩을 가져올 때 사용한다. 가져오는 모듈은 "use strict"의 존재 유무와 상관없이 무조건 엄격모드이다. (트리 셰이킹(en-Us??))

```구문
import defaultExport from "module-name";
import * as name from "module-name";
import { export1 } from "module-name";
import { export1 as alias1 } from "module-name";
import { export1 , export2 } from "module-name";
import { foo , bar } from "module-name/path/to/specific/un-exported/file";
import { export1 , export2 as alias2 , [...] } from "module-name";
import defaultExport, { export1 [ , [...] ] } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
var promise = import("module-name");

```
참고 [MDN Web Docs:import](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import)<br>

## export

> export 문은 JavaScript 모듈에서 함수, 객체, 원시 값을 내보낼 때 사용한다. 내보낸 값은 다른 프로그램에서 import 문으로 가져가 사용가능하다. 내보내는 모듈은 "use strict"의 존재 유무와 상관없이 무조건 엄격모드이다.

```구문
// 하나씩 내보내기
export let name1, name2, …, nameN; // var, const도 동일
export let name1 = …, name2 = …, …, nameN; // var, const도 동일
export function functionName(){...}
export class ClassName {...}

// 목록으로 내보내기
export { name1, name2, …, nameN };

// 내보내면서 이름 바꾸기
export { variable1 as name1, variable2 as name2, …, nameN };

// 비구조화로 내보내기
export const { name1, name2: bar } = o;

// 기본 내보내기
export default expression;
export default function (…) { … } // also class, function*
export default function name1(…) { … } // also class, function*
export { name1 as default, … };

// 모듈 조합
export * from …; // does not set the default export
export * as name1 from …;
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
export { default } from …;
```

참고 [MDN Web Docs:export](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/export)<br>