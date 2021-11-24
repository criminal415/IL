# OAuth 2.0
Resource server(카카오,구글,네이버등)
Resource Owner(개인정보의 당사자)
Client(서비스 제공자)
## DB
### 관계형 데이터베이스 (오라클, 마이SQL, MS 서버, 포스트그리SQL)
    -관계형 데이터베이스는 늘어나는 데이터를 처리하기 위해 1970년도에 개발됐다. 탄탄한 기본     이론을 갖고 있으며 오늘날 사용 중인 거의 모든 데이터베이스 시스템에 영향을 미쳤다. 관계형 데이터베이스는 데이터 집합을 “관계”로 저장한다. 모든 정보가 특정 셀의 값으로 저장되는 행과 열을 갖춘 테이블 형태다. 관계형 데이터베이스 관리 시스템(RDBMS)에 있는 데이터는 SQL을 사용해 관리된다. 여러 가지 다른 버전이 있지만 SQL이 표준화돼 있고 일정 수준의 예측 가능성과 유용성을 제공한다.

    -초기에 쏟아져 나온 업체가 관계형이라고 볼 수 없는 제품을 잇달아 내놓자 에드거 F.커드가 모든 관계형 데이터 베이스 관리 시스템이 따라야 할 일정한 규칙을 제시했다. 커드의 12가지 규칙은 엄격한 내부 구조 프로토콜을 실시하고, 검색 결과 요청한 데이터가 안정적으로 반환되며, 구조 변경(최소한 사용자에 의한 변경)을 방지하는 것이 주 목적이다. 이러한 체계 덕분에 오늘날까지 관계형 데이터베이스는 일관성과 신뢰성을 갖춘 데이터베이스로 널리 쓰이고 있다.

#### 강점 
    관계형 데이터베이스는 고도로 정형화된 데이터 처리에 뛰어나며 ACID(원자성(Atomicity), 일관성(Consistency), 고립성(Isolation), 지속성(Durability)) 트랜잭션을 지원한다. 데이터 저장 및 검색은 SQL 질의를 사용해 쉽게 처리할 수 있다. 기존 데이터를 수정하지 않고 데이터를 간단히 추가할 수 있기 때문에 구조를 빠르게 확장할 수 있다. 어떤 사용자 유형이 접근이나 수정이 가능한지는 RDBMS의 구조 내부에서 설정할 수 있다. 따라서, 관계형 데이터베이스는 계층화된 접근이 필요한 응용프로그램에 매우 적합하다. 예를 들면, 고객은 본인의 계정을 열람만 할 수 있지만 에이전트는 열람은 물론 필요할 경우 변경할 수도 있다.

#### 약점
    관계형 데이터베이스의 가장 큰 약점은 가장 큰 강점과 맞닿아 있다. 정형 데이터 처리에 뛰어난 만큼 비정형 데이터 처리에는 한계를 보이는 것이다. 그래서 문맥 상의 실체를 표현하기 어렵다. 테이블로부터 “썰어낸” 데이터를 가독성이 높은 것으로 재조립해야 하고 이는 속도에 부정적인 영향을 미칠 수 있다. 고정된 스키마(schema) 역시 변화에 유연하게 대응하기 힘들다.

비용은 관계형 데이터베이스에서 특히 고려해야 할 사항이다. 관계형 데이터베이스는 구성과 확장에 비용이 많이 드는 경향이 있다. 서버를 여러 개 더 추가하는 방식의 수평 확장은 서버 하나에 자원을 더 추가하는 수직 확장에 비해 더 빠르고 경제적인 경우가 대부분이다. 그러나 관계형 데이터베이스는 그 구조 때문에 수평 확장 과정이 복잡하다. 관계형 데이터베이스를 확장하려면 샤딩(sharding)(데이터가 수평적으로 분할되고 기기의 모음 전반에 걸쳐 분산되는 경우)이 필요하다. ACID 준수를 유지하면서 관계형 데이터베이스를 샤딩하는 것은 매우 까다로운 작업이다.

적합한 경우. 관계형 데이터베이스를 쓰기 좋은 경우는 데이터 완전성이 무엇보다 중요한 상황이다. 재무 응용프로그램, 방어 및 보안, 개인 건강 정보가 대표적이다. 이밖에 고도로 정형화된 데이터, 내부 프로세스의 자동화에도 이 데이터베이스가 적합하다.
