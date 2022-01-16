## Spring Framework

자바 플랫폼을 위한 오픈소스 애플리케이션 프레임워크로서 엔터프라이즈급 애플리케이션을 개발하기 위한 모든 기능을 종합적으로 제공한다.

> 엔터프라이즈급 개발이란? : 기업을 대상으로 하는 개발으로, 대규모 데이터 처리와 트랜잭션이 동시에 여러 사용자로 부터 행해지는 매우 큰 규모의 환경을 엔터프라이즈 환경이라 한다.

> 애플리케이션 프레임워크란? : 특정 계층이나, 기술, 업무 분야에 국한되지 않고 애플리케이션의 전 영역을 포괄하는 범용적인 프레임워크 (일반적으로 라이브러리나 프레임워크는 특정 업무 분야나 한 가지 기술에 특화된 목표를 가지고 만들어 진다.)

> 오픈소스 경량급 : 기존의 EJB처럼 툴의 도움 없이는 다루기 힘든 난해한 설정파일 구조와 까다로운 패키징, 불편한 서버 배치 등으로 인한 부담을 없애고, 쉽게 해당 기능들을 사용할 수 있게 만들어졌다.

> EJB? :

Spring Framework는 경량 컨테이너로 자바 객체를 담고 직접 관리 합니다. 객체의 생성 및 소멸 그리고 라이프 사이클을 관리하며 언제든 Spring 컨테이너로 부터 필요한 객체를 가져와 사용할 수 있습니다. 이는 Spring이 IOC 기반의 Framework임을 의미한다.

> 경량 컨테이너? : 각각의 객체 생성, 소멸과 같은 라이프 사이클을 관리하고, 필요한 객체를 얻어올 수 있다.

> POJO? : Plain Old Java Object로, 지극히 평범한 자바 객체를 말한다. 다만, POJO는 특정 규약과 특정 환경에 종속되어서는 안 되고 객체지향 설계를 잘 지켜야한다는 조건이 있다.

> IOC란? : Inversion of Control의 약자로 말 그대로 제어의 역전을 뜻한다.

- 제어의 역전이란? : 일반적으로 프로그램은 다음과 같은 작업을 반복한다.

  > 객체 결정 및 생성 -> 의존성 객체 생성 -> 객체 내의 메소드 호출

  이것은 각 객체들이 프로그램의 흐름을 결정하고 각 객체를 구성하는 작업에 직접적으로 참여한 것이고, 모든 작업을 사용자가 제어하는 구조이다.
  하지만 IOC에서는 이 흐름의 구조를 바꾼다. IOC에서의 객체는 자기가 사용할 객체를 선택하거나 생성하지 않으며, 또한 자신이 어디서 어디서 만들어지고 어떻게 사용되는지 또한 모른다. 자신의 모든 권한을 다른 대상에 위임함으로써 제어권한을 위임받은 특별한 객체에 의해 결정되고 만들어진다. 즉, 제어의 흐름을 사용자가 컨트롤 하지 않고 위임한 특별한 객체에 모든 것을 맡기는 것이며, IOC란 기존 사용자가 모든 작업을 제어하던 것을 특별한 객체에 모든 것을 위임하여 객체의 생성부터 생명주기 등 모든 객체에 대한 제어권이 넘어 간 것을 IOC, 제어의 역전 이라고 한다.

- IOC의 구성요소 DI와 DL
  IOC는 DI와 DL에 의해 구현된다.
  - DL(의존성 검색) : 컨테이너에서는 객체들을 관리하기 위해 별도의 저장소에 빈을 저장하는데 저장소에 저장되어 있는 개발자들이 컨테이너에서 제공하는 API를 이용하여 사용하고자 하는 빈을 검색하는 방법이다.
  - DI(의존성 주입) : 객체가 서로 의존하는 관계가 되게 의존성을 주입하는 것입니다. 객체지향 프로그램에서 의존성 이란 하나의 객체가 어떠한 다른 객체를 사용하고 있음을 의미한다. IOC에서 DI는 각 클래스 사이에 필요로 하는 의존관계를 빈 설정 정보를 바탕으로 컨테이너가 자동으로 연결해 주는 것이다.(즉, 특정 객체가 필요로 하는 객체를 외부에서 결정하여 연결시켜준다.)

> AOP 지원? : Aspect Oriented Programming은 관점 지향 프로그래밍을 뜻한다. 대부분의 시스템에서 비즈니스 로직은 아니지만 보안, 로그, 트랜잭션과 같이 반드시 처리가 필요한 부분을 횡단 관심사라고 하는데, 스프링은 이러한 관심사를 비즈니스 로직과 분리하여 중복된 코드를 줄이고 개발자가 비즈니스 로직에 집중하도록 만들어준다.

> WAS에 독립적인 개발환경? : 과거의 EJB가 동작하려면 고가의 느리고 무거운 자바 서버(WAS)가 필요했는데, 그에 반해 스프링은 가장 단순한 서버환경인 톰캣(Tomcat)이나 제티(Jetty)에서도 완벽하게 동작한다. 단순한 개발툴과 기본적인 개발환경으로도 엔터프라이즈 개발에서 필요로 하는 주요한 기능을 갖춘 애플리케이션을 개발하기에 충분하게 되었다.

## Spring Framework의 특징 MVC

![image](https://user-images.githubusercontent.com/90595291/149656598-0c658b26-4586-48cb-9675-544da6948538.png)

MVC란 (Model View Controller) 구조로 사용자 인터페이스와 비지니스 로직을 분리하여 개발 하는 것이다. Model1과 Model2로 나누어져 있으며 일반적으로 Model2를 지칭한다.

Model에서는 데이터처리를 담당하며, Model부분은 Service영역과 DAO영역으로 나눠지게 되고, Service 부분은 불필요하게 HTTP통신을 하지 않고 request나 response와 같은 객체를 매개변수로 받아선 안된다.

> Model에서는 View와 Controller의 어떠한 정보도 가지고 있어서는 안된다.

View는 사용자 interface를 담당하며 사용자에게 보여지는 부분이다. Controller를 통해 모델의 데이터에 대한 시각화를 담당하며 View는 자신이 요청을 보낼 Controller의 정보만 알고 있어야 한다.

> Model이 가지고 있는 정보를 저장해서는 안되며 Model, Controller에 구성 요소를 알아서는 안된다.

Controller에서는 View에 받은 요청을 가공하여 Model에 이를 전달하고, 반대로 Model로 부터 받은 결과를 View로 넘겨주는 역할을 한다. Controller는 모든 요청에러와 모델에러를 처리하고 View와 Controller의 정보를 알고 있어야한다.

> Model과 View의 정보에 대해 알고 있어야 한다.

이렇게 Model, view, Controller를 나누는 이유는 소스를 분리함으로서 각 소스의 목적을 분명히 하고 유지보수하는데 있어 용이하기 때문이다. 즉 어떠한 영역이든 정해진 매개변수만 받는다면 자신의 비즈니스 로직을 처리할 수 있어야 하며, 재사용이 가능하여야 한다.(확장성 부분에서도 큰 효과를 볼 수 있다.)

## Spring Framework의 구조

![image](https://user-images.githubusercontent.com/90595291/149657945-e302c0d4-09c5-4481-a973-d537631542e6.png)

### Spring Core

Spring Core는 Spring Container을 의미합니다. core라는 말 그대로 Container는 Spring Framework의 핵심이며 그중 핵심은 Bean Factory Container입니다. 그 이유는 바로 Bean Factory는 IOC패턴을 적용하여 객체 구성 부터 의존성 처리까지 모든 일을 처리하는 역할을 하고 있기 때문입니다.

### Spring Context

Spring context는 Spring Framework의 context 정보들을 제공하는 설정 파일입니다. Spring Context에는 JNDI, EJB, Validation, Scheduiling, Internaliztaion 등 엔터프라이즈 서비스들을 포함하고 있습니다.

### Spring AOP

Spring AOP module은 Spring Framework에서 관점지향 프로그래밍을 할 수 있고 AOP를 적용 할수 있게 도와주는 Module입니다. 해당 AOP에 대한 내용은 위에서 설명 했기 때문에 넘어 가도록 하겠습니다.

### Spring DAO

DAO란 Data Access Object의 약자로 Database Data에 접근하는 객체입니다. Spring JDBC DAO는 추상 레이어를 지원함으로써 코딩이나 예외처리 하는 부분을 간편화 시켜 일관된 방법으로 코드를 짤 수 있게 도와줍니다.

### Spring ORM

ORM이란 Object relational mapping의 약자로 간단하게 객체와의 관계 설정을 하는 것입니다. Spring에서는 Ibatis, Hibernate, JDO 등 인기있는 객체 관계형 도구(OR도구)를 사용 할 수 있도록 지원합니다.

### Spring Web

Spirng에서 Web context module은 Application module에 내장되어 있고 Web기반의 응용프로그램에 대한 Context를 제공하여 일반적인 Web Application 개발에 필요한 기본적인 기능을 지원합니다. 그로인해 Jakarta Structs 와의 통합을 지원하고 있습니다.

### Spring MVC

Spring에서는 MVC에서는 Model2 구조로 Apllication을 만들 수 있도록 지원합니다. MVC (Model-View-Controller) 프레임 워크는 웹 응용 프로그램을 작성하기위한 완전한 기능을 갖춘 MVC를 구현합니다. MVC 프레임 워크는 전략 인터페이스를 통해 고급 구성 가능하며 JSP, Velocity, Tiles, iText 및 POI를 포함한 수많은 뷰 기술을 지원하고 있습니다.
