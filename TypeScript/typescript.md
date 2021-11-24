

![tsc_error](https://user-images.githubusercontent.com/90595291/143201843-7544ece9-5035-4db5-87cd-4fec194d4f46.PNG)

찾아보니 이런 에러는 Windows에서 정책적으로 Powershell 실행에 제한이 있어서 발생한다고 한다.

해결방법으로 관지라 권한이 있는 powershell로 ExecutionPolicy를 RemoteSigned로 변경해주는 것으로 해결이 가능하다

![powersell_admin](https://user-images.githubusercontent.com/90595291/143201147-f2184592-be61-41a7-9c4d-e87f2aa367ff.png)

![tsc_error_해결](https://user-images.githubusercontent.com/90595291/143202255-b1901bdf-744d-4076-bad2-53ab3f02d0e3.PNG)

![tsc_완료](https://user-images.githubusercontent.com/90595291/143202730-3ed4c28e-654e-4916-8b6f-a92b860ac764.PNG)