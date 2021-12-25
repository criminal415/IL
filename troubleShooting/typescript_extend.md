아래와 같은 문제 발생<br>
![image](https://user-images.githubusercontent.com/90595291/147387470-b1f3ae56-e0bf-4e99-957e-eb11e2ea6871.png)<br>

<!-- ![image](https://user-images.githubusercontent.com/90595291/147378145-2d758354-49af-4907-9473-f5ce5cc3e96b.png) -->
<!-- ![image](https://user-images.githubusercontent.com/90595291/147378167-70193732-cfdb-4798-ae97-8b2900e6fb41.png) -->
다음과 같이 정의를 확인하고 namespace, interface 확장을 통해 문제를 해결할 수 있다.<br>
![image](https://user-images.githubusercontent.com/90595291/147387034-99e0bb5e-7aca-406a-92c7-85d1a56cc4c7.png)
![image](https://user-images.githubusercontent.com/90595291/147387065-960faf27-6a97-40b1-bbb1-5b388f563832.png)
아래와 같이 global로 확장했을 때는 passport와 충돌로 인해 문제를 해결할 수 없었다.
![image](https://user-images.githubusercontent.com/90595291/147387098-83fe4dcf-0533-436c-8570-b1a85b5bd980.png)<br>
따라서 아래와 같이 ambient module로 확장<br>
![image](https://user-images.githubusercontent.com/90595291/147387605-b6811deb-fef4-4222-8446-36602c971162.png)
![image](https://user-images.githubusercontent.com/90595291/147387109-8bc1a91c-88e9-40a5-a3cc-e71ad2211a94.png)<br>
다시한번 제대로 확장되었는지 확인해보았다.

![image](https://user-images.githubusercontent.com/90595291/147387125-661f212c-2249-472c-a159-a84fb76c49ed.png)
![image](https://user-images.githubusercontent.com/90595291/147387199-94f364e1-38f7-478c-93ef-9cabd2a7d0c8.png)
아래와 같이 해결된것을 확인할 수 있었다.
![image](https://user-images.githubusercontent.com/90595291/147387452-1366dd81-06b0-40a2-a671-d33a76591382.png)
