## prettier extension
> prettier extension을 설치한뒤 아래 사진과 같이 설정에 들어가서 나에게 맞는 코드 정리방식 설정을 추가 한다.
![prettier](https://user-images.githubusercontent.com/90595291/143437795-c491b8d8-a17a-46cf-a378-cd4c5c9b7a59.PNG)

```
{
    "workbench.colorTheme": "Default Dark+",
    "window.zoomLevel": -1,
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "diffEditor.ignoreTrimWhitespace": false,
    "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "prettier.printWidth": 200, //한 줄이 이 글자수를 넘게 되면 줄바꿈되어 코드가 정리된다.
    "prettier.tabWidth": 2, //Tab을 눌렀을 때 몇칸이 띄어지는지를 설정한다.
    "prettier.singleQuote": true, // 홑따옴표를 쓸건지 설정, 기본값은 쌍따옴표(false)
    "prettier.trailingComma": "es5", // 객체, 배열, 함수 등의 후행에 쉼표를 찍을지 설정('none'-쉼표를 붙히지 않음, 'es5'-ES5에서 유효한 후행 쉼표를 붙힘, 'all'-가능하면 후행 쉼표를 붙힘(함수, 인수))
    "prettier.bracketSpacing": true, //객체 리터럴 내부의 공백을 제어
    "prettier.semi": true, //문장 뒤에 세미콜론을 붙힐지 뺄지 설정
    "prettier.useTabs": false, // 참이면 탭이 있는 줄을 들여쓰기 한다.
}
```