## 검색엔진(ELK stack)

### 전문(full text) 검색 엔진

- 루씬은 기본적으로 역파일 색인(inverted file index)라는 구조로 데이터를 저장합니다. 루씬을 사용하고 있는 Elasticsearch도 마찬가지로 색인된 모든 데이터를 역파일 색인 구조로 저장하여 가공된 텍스트를 검색한다. 이런 특성을 전문(full text) 검색이라고 한다.

- JSON 문서 기반 Elasticsearch는 내부적으로는 역파일 색인 구조로 데이터를 저장하고 있으나, 사용자의 관점에서는 JSON 형식으로 데이터를 전달한다. JSON형식은 간결하고 개발자들이 다루기 편한 구조로 되어 있어 색인 할 대상 문서를 가공 하거나 다른 클라이언트 프로그램과 연동하기에 용이하다.

- 또한 key-value 형식이 아닌 문서 기반으로 되어 있기에 복합적인 정보를 포함하는 형식의 문서를 있는 그대로 저장이 가능하며 사용자가 직관적으로 이해하고 사용할 수 있다. Elasticsearch에서 질의에 사용되는 쿼리문이나 쿼리에 대한 결과도 모두 JSON 형식으로 전달되고 리턴된다.

### RESTFul API

- 현재 대규모 시스템들은 대부분 마이크로 서비스 아키텍처(MSA)를 기본으로 설계됩니다. 이러한 구조에 빠질 수 없는 것이 REST API와 같은 표준 인터페이스 이며, Elasticsearch는 Rest API를 기본으로 지원하고 모든 데이터 조회, 입력, 삭제를 http 프로토콜을 통해 Rest API로 처리한다.

### 멀티테넌시 (multitenancy)

- Elasticsearch의 데이터들은 인덱스(Index) 라는 논리적인 집합 단위로 구성되며 서로 다른 저장소에 분산되어 저장된다. 서로 다른 인덱스들을 별도의 커넥션 없이 하나의 질의로 묶어서 검색하고, 검색 결과들을 하나의 출력으로 도출할 수 있는데, Elasticsearch의 이러한 특징을 멀티테넌시 라고 한다.

### 클러스터 구성

<img src = "https://user-images.githubusercontent.com/90595291/144285870-76934c26-002a-4543-991e-94c29e917008.png" width= "50%" height="50%"><br>

cpu2 메모리 4GB 스펙의 인스턴스 2개(첫 사용기간 3개월 무료!!)
두개의 서버 모두 elasticsearch 각각의 서버에 logstash, kibana를 따로 사용중이다.
defalt 값으로 elasticsearch와 kibana에 heap memory가 1GB로 설정되어있어 메모리 4GB를 선택 하였다.(heap memory를 더 작게 부여할 수 있었지만 온전히 기능 이용하고 싶었다.)

### JDBC(Java Database connectivity)

Java 프로그램이 데이터베이스 관리 시스템에 액세스할 수 있도록 하는 표준 API <br>
(응용 프로그래밍 인터페이스)의 JavaSoft 사양이다.<br>
JDBC API는 Java 프로그래밍 언어로 작성된 인터페이스 및 클래스 세트로 구성된다.
JDBC는 표준 사양이므로 JDBC API를 사용하는 하나의 Java 프로그램은 해당 특정 DBMS에 대한 드라이버가 존재하는 한 모든 DBMS(데이터베이스 관리 시스템)에 연결할 수 있다.

현재 fungap서비스는 mySQL database를 사용중이다. 따라서 검색기능을 위해서 mySQL DB와<br>
elasticsearch의 데이터를 지속적으로 동기화 시켜주어야 했다. 이를 위해 Logstash pipeline을 <br>
이용하였다.
input : JDBC를 사용하여 DB에서 검색에 필요한 데이터를 가져온다.<br>
이때 schedule의 cron 표현식을 이용하여 5초마다 업데이트 될 수 있도록 설정!
글을 작성한 후 최소한의 delay로 검색이 될 수 있도록 설정
filter : db에서 가져온 데이터를 elascticsearch에 원하는 형태로 저장할 수 있도록
변환해줌
output : 최종적으로 elasticsearch 서버에 host, user, password, 저장할 index 등을 설정하여<br>
저장한다.

### elasticsearch

#### 1. inverted index

- 일반적인 DB의 데이터 저장 형태
  | id | Text |
  | --- | ----------------------------------------------- |
  | 1 | The old night keeper keeps the keep in the town |
  | 2 | In the big old house in the big old gown |
  | 3 | The house in the town had the big old keep |
  | 4 | Where the old night keeper never did sleep |
  | 5 | The night keeper keeps the keep in the night |
  | 6 | And keeps in the dark and sleeps in the light |

- inverted index
  | Term | Documents |
  | ------ | ---------- |
  | and | <6> |
  | big | <2><3> |
  | dark | <6> |
  | did | <4> |
  | gown | <2> |
  | had | <3> |
  | house | <2><3> |
  | in | <1><2><3><5><6> |
  | keep | <1><3><5> |
  | keeper | <1><4><5> |
  | keeps | <1><5><6> |
  | light | <6> |
  | never | <4> |
  | night | <1><4><5> |
  | old | <1><2><3><4> |
  | sleep | <4> |
  | sleeps | <6> |
  | the | <1><2><3><4><5><6> |
  | town | <1><3> |
  | where | <4> |

#### 2. Text Analysis
 이 과정을 처리하는 기능을 애널라이저(Analyzer) 라고 한다. <br>
 Elasticsearch의 애널라이저는 0\~3개의 캐릭터 필터(Character Filter)와 1개의 토크나이저(Tokenizer), <br>
 그리고 0\~n개의 토큰 필터(Token Filter)로 이루어진다.<br>
 
 이렇게 문자열을 tokenizer와 Token Filter로 각각의 Term들로 어떻게 나누는지에 따라 특정단어를 검색했을 때<br>
 결과들을 조율할 수 있다. 

 예를 들어 공백을 기준으로 term을 분리하는 whitespace tokenizer, 대문자를 모두 소문자로 변경해주는 <br>
 tokenfilter, 검색어로서는 가치가 없는 (보통 a, an, are, at 등)을 제거해주는 stop tokenfilter로 구성 <br>
 하면 대소문자 구분 없이 공백으로 구분되는 단어를 검색할 수 있는 검색기능이 만들어진다.

 이렇게 문자열을 term으로 분리하는 과정에서 한국어는 여러품사들로 인해 많은 어려움을 겪었었는데
 elasticsearch 6.6 version 부터 공식적으로 Nori 한글 형태소 분석기를 개발하여 지원해 주기 때문에 
 고민을 상당 부분 해결할 수 있었다.

 현재도 여러 tokenfilter를 찾아보고 조합하며 사용자가 검색단어를 입력하였을 때, 최대한 원하는 결과를 <br>
 보여줄 수 있도록 시험중이다.


