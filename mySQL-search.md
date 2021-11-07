# mySQL search

## 1. 검색방법
OAuth를 통해서 accessToken을 발급 받는다. 필수적인 부분들만 accessToken을 통해서 확인할 수 있다.( Client가 먼저 Resource server에 Open Api 등록을 해야한다. Client id, client secert, redirect url)

```query 스트링으로 검색단어를 받아서 공백을 기준으로 검색단어를 나눈다.
const {keyword} = req.query;
      
      const keywords = keyword.split(' ')
      const list_keywords = []
      
      
```
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
mySQL에서 검색할 때 like를 통해 정확히 일치하는 단어가 포함된것만 검색가능하다. 따라서 유사어등 검색을 더 빠르고 사용자 편의적으로 만들기 위해 검색엔진 elaticsearch로 변경 계획에 있다.
