# OAuth 2.0
Resource server(카카오,구글,네이버등)
Resource Owner(개인정보의 당사자)
Client(서비스 제공자)
## 1. OAuth
OAuth를 통해서 accessToken을 발급 받는다. 필수적인 부분들만 accessToken을 통해서 확인할 수 있다.( Client가 먼저 Resource server에 Open Api 등록을 해야한다. Client id, client secert, redirect url)

```네이버에 accessToken 요청 로그인하는 사용자의 동의가 필요!
var client_id = process.env.NAVER_CLIENT_ID;
var client_secret = process.env.NAVER_CLIENT_SECRET;
var state = 'RAMDOM_STATE';
var redirectURI = encodeURI('http://localhost:3000/user/naver/callback');
var api_url = '';
router.get('/naverlogin', function (req, res) {
  api_url =
    'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' +
    client_id +
    '&redirect_uri=' +
    redirectURI +
    '&state=' +
    state;
  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
  res.end(
    "<a href='" +
      api_url +
      "'><img height='50' src='http://static.nid.naver.com/oauth/small_g_in.PNG'/></a>"
  );
});
```
```네이버쪽에서 callback url로 accessToken을 받는다.
router.get('/naver/callback', function (req, res) {
  code = req.query.code;
  state = req.query.state;
  api_url =
    'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=' +
    client_id +
    '&client_secret=' +
    client_secret +
    '&redirect_uri=' +
    redirectURI +
    '&code=' +
    code +
    '&state=' +
    state;
  
  var options = {
    url: api_url,
    headers: {
      'X-Naver-Client-Id': client_id,
      'X-Naver-Client-Secret': client_secret,
    },
  };
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { 'Content-Type': 'text/json;charset=utf-8' });
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log('error = ' + response.statusCode);
    }
  });
});
```
위 과정에서 Resource Owner의 동의가 필요하며, 동의 했다는 정보가 네이버에 저장된다. 이후 네이버는 소유자 브라우저에 authorzation code를 발급하며 이 code를 Client에서 받아 secret key와 함께 Resource Server에 보내준다. 
Resource Server에서는 이 정보들을 확인한 후 access token을 발급한다.
