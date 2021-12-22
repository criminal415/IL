# mySQL search

## 1. Like operator

```
   SELECT column1, column2, ...
   FROM table_name
   WHERE columnN LIKE pattern;
```

| LIKE Operator                                                 | Description                                                                    |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| WHERE CustomerName LIKE 'a%'                                  | Finds any values that start with "a"                                           |
| WHERE CustomerName LIKE '%a'                                  | Finds any values that end with "a"                                             |
| <span style="color:red">WHERE CustomerName LIKE '%or%'</span> | <span style="color:red">Finds any values that have "or" in any position</span> |
| WHERE CustomerName LIKE '\_r%'                                | Finds any values that have "r" in the second position                          |
| WHERE CustomerName LIKE 'a\_%'                                | Finds any values that start with "a" and are at least 2 characters in length   |
| WHERE CustomerName LIKE 'a\_\_%'                              | Finds any values that start with "a" and are at least 3 characters in length   |
| WHERE ContactName LIKE 'a%o'                                  | Finds any values that start with "a" and ends with "o"                         |

````

```query 스트링으로 검색단어를 받아서 공백을 기준으로 검색단어를 나눈다.
const {keyword} = req.query;

   const keywords = keyword.split(' ')
   const list_keywords = []


````

```공백을 기준으로 나눈 검색단어들을 for문을 통해 쿼리문바꾸어 list_keywords에 배열로 넣어준다.
for (let i = 0; i < keywords.length; i++) {
        if (i == 0) {
          list_keywords.push(
            `t1.board_title LIKE '%${keywords[i]}%' OR t1.board_content LIKE '%${keywords[i]}%'`
          )
        } else {
          list_keywords.push(
            `OR t1.board_title LIKE '%${keywords[i]}%' OR t1.board_content LIKE '%${keywords[i]}%'`
          )
        }
      }


```

```list_keywords에 배열로 쿼리문을 넣었으나 쿼리문에 그 배열을 넣었을때 ','로 인해 에러가 나기 때문에 문자열로 바꾸어 준 뒤 정규식을 통해 ','를 ""로 모두 변경한다.

      const newlist_keywords = list_keywords.toString().replace(/,/g, "");
```

mySQL에서 검색할 때 like를 통해 정확히 일치하는 단어가 포함된것만 검색가능하다. 따라서 mysql에서 지원해주는 유사 검색엔진인 fulltext index를 이용하였다.

## 1. FULL TEXT INDEX

이미 생성된 Table에 Index를 추가 하고 싶은 경우 CREATE INDEX 또는 ALTER TABLE를 이용해서 추가할 수 있다.

> CREATE FULLTEXT INDEX idx_ft_title_and_desc on boards(boardTitle, boardDesc);
> ALTER TABLE boards ADD FULLTEXT INDEX idx_ft_title_and_desc(boardTitle, boardDesc);

생성된 인덱스 확인하기

> SHOW INDEX FROM <테이블명>;

생성한 인덱스 삭제하기

> ALTER TABLE <테이블명> DROP INDEX <인덱스명>;

FullText 검색은 다음과 같은 구문을 이용할 수 있다.

> SELECT \* FROM boards WHERE MATCH (boardTitle,boardDesc) AGAINST ('검색단어' IN NATURAL LANGUAGE MODE);

하지만, full-text index 생성 시 공백을 구분자로 단어 단위로 저장을 하기 때문에 검색하는 단어가 정확히 일치해야지만 결과를 받을 수 있다.

따라서 ngramParser을 이용하여 원하는 검색단어 길이로 문자열을 잘라준다.

## ngram Parser

ngram Parser는 built-in 되어있는 MySQL full-text parser로 CJK(Chinese, Japanese, Korean)을 지원하며, 공백으로 단어 사이를 구분하고 ngram_token_size(기본값: 2)단위로 단어를 연속적으로 쪼개서 저장한다.

- EX) 'abcd'

```
n=1: 'a', 'b', 'c', 'd'
n=2: 'ab', 'bc', 'cd'
n=3: 'abc', 'bcd'
n=4: 'abcd'
```

ngram Parser를 이용할 때, 인덱스를 다시 생성해주어야 한다.

> DROP INDEX idx_ft_title_and_desc ON board;
> ALTER TABLE boards ADD FULLTEXT INDEX idx_ft_title_and_desc(boardTitle, boardDesc) WITH PARSER NGRAM;

## Stopwords
