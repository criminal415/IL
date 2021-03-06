# 1. Amazon Web Services 소개

## 학습 목표

- AWS의 이점을 요약할 수 있다.
- 온디맨식 제공과 클라우드 배포의 차이점을 설명할 수 있다.
- 종량 과금제 모델을 요약 설명할 수 있다.

## 클라이언트-서버 모델이란?

![image](https://user-images.githubusercontent.com/90595291/148384113-44f13fe3-f0a2-4e94-b7f7-f7a2c3aa9de5.png)

- 컴퓨팅에서 클라이언트는 사람이 컴퓨터 서버에 요청을 보내기 위해 상호 작용하는 웹 브라우저 또는 데스크톱 애플리케이션일 수 있다.
- 서버는 일종의 가성 서버인 Amazon Elastic Cloud Compute(Amazon EC2)와 같은 서비스일 수 있다.
- 클라이언트와 서버는 일정하게 정해진 어플리케이션 규약에 따라 요청과 응답을 주고 받는다.(주로 http가 쓰임)

## 동작 방식

1. 사용자가 클라이언트를 이용하여 어떤 리소스를 얻고자 한다면, 먼저 브라우저가 웹사이트에 있는 서버의 주소를 찾는다.
2. 클라이언트의 명령을 http 요청 메세지로 서버에 보내며, 이 요청 메세지들은 TCP/IP 연결을 통해서 전송된다.
3. 서버가 클라이언트의 요청을 받는다. 적절한 요청이라면 '200'번때의 상태코드와 응답 및 요청 리소스를 잘못된 요청이면 '400'번때의 상태코드를 서버에서 오류가 났다면 '500'번때의 상태코드를 반환한다.
4. 서버는 클라이언트가 요청한 리소스를 데이터 패킷이라는 형태로 전송한다.
5. 브라우저는 이 패킷들을 받으면 다시 원하는 형태의 리소스로 재조립하고, 화면에 출력한다.

## 클라우드 컴퓨팅

- **클라우드의 실제적인 정의**
  - 클라우드 컴퓨팅은 IT리소스를 인터넷을 통해 온디맨드로 제공하며 사용한 만큼만 비용을 지불하는 것을 말한다.(종량 과금제)
  - 온디맨드 제공이란, AWS가 사용자에게 필요한 리소스를 필요한 순간에 전달할 수 있다는 뜻이다. 미리 사전에 통보하지 않아도 필요한 자원을 필요한 순간에 바로 클릭 몇 번으로 바로 사용할 수있고 중단할 수 있다.
  - 온디맨드 O2O란, IT 기술을 활용하여 수요자와 공급자를 좀 더 긴밀하게 연결시켜주는 것을 의미하며 예시는 다음과 같습니다.
    - 카카오 택시 : 고객과 운전기사 연결
    - 배달의 민족 : 음식배달 업체 연결
    - 푸드플라이 : 오프라인의 맛집 음식을 직접 배달
    - 이외에도 법률전문가, 컨설턴드등을 중개하는 분야까지도 확대되고 세분화되고 있습니다.

## 배포 모델

1. **Cloud Computing(클라우드 컴퓨팅)**

   - 오프프레미스라고도 불리며, 서버의 자원, 공간, 네트워크 환경 등이 필요할 때 비용을 지불하고 인터넷을 통해서 서비스의 형태로 제공받는 방식이다.
   - 기존 애플리케이션을 클라우드로 마이그레이션(옮기기)한다.
   - 클라우드에서 새 애플리케이션을 설계 및 빌드한다.
   - 물리적인 컴퓨터를 빌려오는게 아니라, 가상 컴퓨터를 빌려오게 된다.

2. **On-premise(온프레미스)**

   - 온프레미스란, 소프트웨어 등 솔루션을 클라우드 같이 원격 환경이 아닌 자체적으로 보유한 전산실 서버에 직접 설치해 운영하는 방식을 말한다.
   - 클라우드 컴퓨팅 기술이 나오기 전까지 기업 인프라 구축의 일반적인 방식이었기 때문에 이전 또는 전통적인 이라는 단어와 함께 사용된다.

3. **하이브리드 배포**

- 클라우드 기반 리소스를 온프레미스 인프라에 연결한다.
- 클라우드 기반 리소스를 레거시 IT 애플레케이션과 통합한다.

## 클라우드 컴퓨팅의 이점

- **선행 비용을 가변 비용으로 대체**

- **데이터 센터 운영 및 유지 관리에 비용 투자 불필요**

  - 인프라 및 서버 관리에 더 많은 시간 및 비용을 소비하는 작업에 덜 신경 쓰고, 애플리케이션과 고객에 더 집중할 수 있다는 점을 말한다.

- **용량 추정 불필요**

  - 컴퓨터 성능을 필요에 따라 유연하게 조절 가능

- **규모의 경제로 얻게 되는 이점**

- **속도 및 민첩성 향상**

- **몇 분만에 전 세계에 배포**

## 클라우드 서비스 형태

![image](https://user-images.githubusercontent.com/90595291/148388308-f976a228-afb8-411c-9c95-6a9dc9d90fc2.png)

- **SaaS(Software as a Service)**
  - 위의 그림에서 보이는 것처럼 모든 것을 기업(클라우드)에서 제공함으로 사용자는 별도의 설치나 부담이 필요 없이 SW를 사용할 수 있습니다.
  - SaaS는 소비 관점에서 제공되는 IT 방식의 서비스로 정리할 수 있습니다. 구독의 방식으로 돈을 벌거나 트래픽 기반으로 돈을 벌 수 있습니다.
- **PaaS(Platform as a Service)**
  - 운영 팀이 인프라를 모니터링할 필요가 없다.
  - 사용자는 OS, Server 하드웨어, Network 등등을 고려할 필요가 없다.
  - 사용자는 어필리케이션 자체에만 집중할 수 있습니다. 즉 개발자는 빠르게 어플리케이션을 개발하고 서비스 가능하게 할 수 있다.
  - IaaS와 헷갈릴 수 있는데 아마존과 같은 서비스가 VM을 제공하는 IaaS라면, PaaS는 node.js, Java와 같은 런타임을 미리 깔아놓고, 거기에 소스코드를 넣어서 돌리는 구조입니다. 즉, 사용자는 소스코드만 적어서 빌드하면 되고, 컴파일은 클라우드에서 하여 결과만 가져오는 것이다.
- **IaaS(Infrastructure as a Service)**
  - 우리가 자주 사용하는 가상 호스팅(VM Hosting)과 비슷하나 처음에 말했다시피, 가상 호스팅은 우리가 직접 장비를 사서 그 장비의 한에서 자원을 할당하고 구성해야 하지만, IaaS는 기업이 준비해놓은 환경에서 우리가 선택할 수 있다는 점에서 차이가 있다.
  - 일반적으로 적은 OS가 지원된다. (아마존은 일부 Linux와 Windows Server 제공)
  - 고객은 OS와 어플리케이션을 직접 관리해야 한다.
  - 관리 측면에서 개발자와 인프라 관리자의 역할을 분담시킬 수 있다.
- **Packaged Software**
  - 물리적인 장치, 하드웨어(CPU, RAM, Storage, Network device 등등)을 모두 직접 구매해야 한다.
  - 직접 OS를 설치해야 한다.
  - 네트워크 환경을 직접적으로 구성해야 한다.
  - 서버 관리를 직접적으로 해야 한다. (트래픽, 프로지버닝 등등)
  - 이런 모든 것을 직접 사용자가 다 준비해야 하기 때문에 매우 큰 시간과 돈을 소비하게 된다.

> AWS의 EC2는 대표적인 IaaS 이다.
