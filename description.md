### TODO
- create category page 
- complete unit testing

### Frontend Setup
- npm install -D tailwindcss
- extension에서 Tailwind CSS IntelliSense 설치(클래스이름 자동완성 기능)
- postcss는 CSS를 post process 할수 있게 해주는 라이브러리이다.
- autoprefixer는 postcss의 또다른 plugin인데, 클래스 이름에 접두사 호환성을 추가해주는것이다. 예를들어 CSS property를 아직 firefox에 없는걸 사용한다면 호환 가능하도록 접두사를 붙여서 쓸수 있게 해주는것이다.
- npx tailwindcss init 
- Tailwind를 커스터마이즈하기 위해 tailwind config파일이 필요하고 tailwind를 일반 CSS파일로 빌드하기 위해 postcss config 파일이 필요하다.
- postcss가 tailwind.css 파일을 보고 Tailwind가 갖고 있는 모든 클래스 이름으로 바꿔준다. 또한 tailwind config 파일을 들여다보고 새 클래스 이름이 있다면 그것도 추가한다.
- package.json에 해당 스크립트 추가 "tailwind:build": "tailwind build ./src/styles/tailwind.css -o ./src/styles/styles.css" (-o은 리액트에서 import할 아웃풋이라는 의미)
- npm install @apollo/client graphql
- "--isolatedModules"에러가 나오면 재실행하기 

### Tailwind CSS 
- Tailwind CSS는 utility-first 프레임워크이다. 기본적으로 Tailwind는 엄청 긴 CSS 파일이라는 뜻이다.
- h-screen은 스크린 크기만큼 키우는 것이다.(height screen)
- bg => background color
- w : width | px : padding horizontal | py : padding vertical
- rounded : border-radius
- mt : margin top | mb : margin bottom
- tailwind의 좋은점은 일일이 css효과를 만들려면 정말 괴로운데 아름다운 class name을 통해 쉽게 할수 있도록 도와준다.
- 일일이 CSS를 모두 작성하는 대신에 tailwind.css에 input에 대한 css를 저장하고 className에 적용해준뒤 tailwind:build해주면된다.
- w-full : full witdh | max-w-screen-sm : maximum width는 작은 스크린 사이즈(640px)
- 프로젝트를 할 때 항상 모바일 먼저 생각해야한다. mt-10 같이 기본 class name은 항상 모바일로 시작해야한다.
- h-screen : 100vh의 의미이다.(viewport height 스크린의 높이)
- tailwind에서 사이즈를 정하는 방법은 %를 사용하거나 rem(사이즈 단위)을 사용한다.
- content에는 padding이 있다. 처음은 일단 padding을 봐야한다. 이렇게 하면 responsive design을 쉽게 할수 있다.
- em은 document의 font 사이즈이다. 만약 document가 16px이고 margin top을 1em으로 설정해주면 1em은 16px이라는 뜻이다.
- em은 element의 폰트 크기에 좌우된다. div가 있고 fontSize가 50px인 경우 margin Top이 1em이라고 했을때 사이즈는 50px일것이다. 
- tailwind css가 padding과 size를 이용하는 방법은 rem(root em)이다. 
- 이 뜻은 div가 있어도 margin top이 2rem일지라도 100px이 되지 않는다. rem은 body의 폰트 크기가 된다. body의 fontSize가 5px이라면 div의 margin top 2rem은 10px이 된다.   
- md: 또는 xl:이 명시되어 있지 않은 사이즈는 모바일을 우선으로 적용이 된다. tailwind는 모바일 우선 프레임워크이기 때문이다. 그 다음에 데스크탑을 설정해준다.
- w-3/12는 퍼센트를 의미한다. (부모에 대한 퍼센트)
- group-hover는 group class가 hover이면 작동한다.(group claa와 group-hover는 같이 사용해야한다.)
- 항상 padding을 사용해서 수직크기를 조정하는게 좋다.


### Authentication 
- Local-only Fields는 GraphQL 서버의 스키마에 정의되지 않은 것을 말한다. 
- Apollo client는 GraphQL state를 다루는데 굉장히 능하다.
- local state는 server에는 없지만 application에는 있기를 바라는 state이다.
- @client를 명시해줌으로써 GraphQL이 서버한테 요구하지 않고 client cach에 요구한다.
- reactive variables는 Apollo client의 새 기능이다.
- reactive variables는 GraphQL operation을 사용할 필요없이 application의 어디에서나 읽고 수정할수 있다.
- reactive variables를 사용하면 어디서든 읽고 업데이트 할수있다. 그리고 저장은 apollo client에 한다.
- 문서에 보면 reactive variables의 값이 변경되면, 그 필드를 갖는 쿼리들이 자동으로 새로고침된다고 나와있다.
- npm install react-hook-form
- react-hook-form을 사용하는건 단 한개의 hook을 쓰는 방식과 같다.
- register은 useForm이 우리에게 제공하는 함수이다.
- register은 그냥 input의 ref안에 넣으면 된다.
- react-router-dom이 에러가 경우 1. npm install @types/react-router-dom  설치 2. react-app-env.d.ts파일에 declare module "react-router-dom" 입력하기 
- module을 선언(declare)하는 이유는 이 module은 types에 대한 폴더가 없기 때문이다.
- definitelyTyped는 typescript로 만들어지지 않은 npm packages들에 상응하는 거의 모든 typescript types를 담은 폴더이다.   
- 만약 사용하는 라이브러리에 이런 에러가 뜬다면 그 라이브러리가 typescript definition을 지원하지 않기 때문이다. 
- switch는 오직 한 route만 임포트 할수 있게 해주는 장치이다.
- 만약 input에 name이 없으면 useForm이 찾지 못한다.
- React.FC의 FC는 Functional Component의 약자이다.
- mutation PotatoMutation($email:String!, $password:String!)에서 $는 변수라는 뜻이다. 또한 이부분은 서버와 상관이 없고 오직 프런트의 Apollo를 위한것이다. Apollo는 이 변수들을 살펴볼거고 이 변수들을 가지고 mutation을 만들것이다.
- useMutation Hook의 첫번째 Argument는 mutation function이다. 이 function은 mutation의 방아쇠 역할을 한다.
- useMutation Hook의 두번째 Argument는 loading, error, data 객체이다. data는 mutation으로부터 되돌아 온다는 것이다. loading은 mutation이 실행되고 있다는 의미이고 error는 mutation이 error를 반환한다는 것이다.
- npm install -g apollo && npm install apollo 
- apollo-tooling은 백엔드에서 mutaions, query responses, input type을 전부다 typescript 정의로 자동 생성해준다. 이 말은 mutaion을 보낼때 백엔드에 데이터를 전송한다는 것을 확신할수있고 또한 response를 받으면 내가 받은 response의 type을 알수 있다. DTO가 모든것의 시작이라는 점을 기억해야한다. DTO가 schema가 되었고 schema가 프런트를 위한 typescript가 되었다.
- apollo가 하는 일은 나의 file을 보면서 gql``태그를 사용할때마다 typescript definition을 준다.
- apollo client:codegen src/__generated__ --target=typescript --outputFlat
- apollo codegen은 우선 나의 file을 살펴보고 내가 필요하다고 했던 모든 변수들의 interface를 제공해준다. 그 다음 백엔드의 실재 schema를 살펴본다.
- login component가 src폴더 밖에 까지 도달하지 못하기 때문에 codegen 생성시 src폴더에 넣어주는 것이 중요하다.
- onCompleted는 내가 다룰수있는 data를 제공해준다. 또한 loginMutation은 error, loading, called 등을 제공해준다.
- rimraf는 node.js를 위햔 rm -rf이다.
- npm i rimraf
- formState의 isValid는 onChange나 onBlur에만 일어난다.
- react-helmet은 document의 head를 변경할수 있게 해준다.
- npm i react-helmet
- npm i --save-dev @types/react-helmet
- setContext는 모든 client가 만든 request의 context를 set한다.
- isLoggedInVar, authTokenVar들을 reactive variable이라고 한다.
- link는 그냥 연결할수 있는것들이다.(http, auth, web sockets 링크 등등)
- 링크를 사용하고 싶다면 Header를 Router안에 놓아야한다. 
- React를 위한 fontawesome 설치 
- npm i --save @fortawesome/fontawesome-svg-core
- npm i --save @fortawesome/free-solid-svg-icons
- npm i --save @fortawesome/react-fontawesome
- useMe() 훅이 한번 호출되면 apollo가 자동으로 캐시에 넣어놓아서 다시 호출해도 바로 사용할수 있다.

### USER PAGES
- ClientRoutes는 Array이기 때문에 key가 필요하다.
- writeFragment에서 Fragment는 type의 일부분이다.
- Apollo가 type에 id속성이 있으면, model의 id로 사용한다.
- https://www.apollographql.com/docs/react/caching/cache-interaction/#writefragment
- useQuery는 refetch라는 흥미로운 속성이 있다. refetch는 function인데 이걸 call 하면 query를 다시 fetch해준다.
- refetch는 다시 API를 call하는것이기 때문에 fragment를 사용하는게 훨씬 빠르다.
- 코딩에 시간을 사용하는 만큼 코드를 정리하는데 시간을 사용하자. 처음부터 깔끔한 코드를 작성하려고 하지 않기. 못생긴 코드를 작성해보고 작동하면 정리하기.
- URL에 있는 데이터를 사용자에게 표시하고 싶지 않은 경우에는 state를 사용할수 있다. Route의 state가 브라우저 메모리에 저장되기 때문에 새로고침해도 state를 불러올수 있다.
- navigate("/search", { state: { searchTerm } });
- navigate({ pathname: "/search", search: `?term=${searchTerm}` });
- navigate의 replace : true는 이전페이지의 기록이 없고 false는 새 페이지를 push하고 이전 페이지를 기록에 남긴다.
- Lazy Query는 즉시 실행되지 않는 Query이다. 즉시 실행하지 않고 원하는 경우에만 실행한다.
- useLazyQuery에서 Array의 첫 element는 호출 준비가 된 Query이다.
- useLocation은 유저가 어디에 있는지 알려주고 useNavigate는 어디론가 보내준다.
- react-router-dom에서 중요한 훅 3개는 useNavigate, useLocation, useParams이다.
- useLocation은 우리가 어디에 있는지 URL을 알게 해준다.
- useNavigate는 이곳저곳을 돌아다닐수 있게 change, replace, push를 할수 있다.
- useParams는 우리에게 parameter를 준다.

### TESTING REACT COMPONENTS
- jest는 create-react-app에 이미 설정이 되어있다. 
- npm test -- --coverage --watchAll=false
- watchAll=false설정을 해주면 app 모든 부분의 coverage를 확인해서 보여준다.
- package.json에서 collectCoverageFrom를 설정해주면 coverage를 확인하려는 파일들을 나타낸다. 
- App.tsx도 함께 테스트 해주기 위해서 components파일에 넣어주기 
- code 자체를 테스트하는게 아니고 user의 관점에서 components를 테스트한다. 
- it의 의미는 individual test이다.
- react-dom에서 import하는 render가 있는데 test에서 import하면 안되고, render를 import 할곳은 @testing-library/react이다.
- render function에는 테스트하고 싶은 실제 component를 주 면 된다.
- render function을 call 하고 나면 정말 많은 것들을 쓸수 있게 해준다.
- app.tsx를 테스트할때 신경써야할것은 isLoggedIn이 true일때 또는 false일때 보여줘야 할것을 잘보여주는지이다.(즉 component가 있는지만 알고 싶은것이다. component의 내용, login page, graphql 등등은 신경쓰지 않는다.)
- render를 call 하면 많은 function을 사용할수 있는데 그중 debug는 테스트를 하는 관점에서 app이 어떻게 rendering하는지 보여준다.(테스트시 debug를 많이 사용한다.)
- act는 유저가 한 행동이라고 생각하면된다.
- waitFor는 state가 refresh하고 쓸수 있도록 기다려 주는것이다.
- 세부적인 implementation은 react의 관점에서 component가 작동하는 방식이다.
- 우리는 세부적인 implementation을 테스트하는게 아니다. 그렇기에 testing-library/react가 멋진이유이다. 유저의 관점에서 테스트할수 있게 해주기 때문이다.
- implementation은 삼항 조건 연산자 같은 것이다. 우리는 이런것을 테스트 할필요가 없다. 테스트할것은 유저들이 볼수 있는 output이다.
- MockedProvider는 apollo에서 쓸수 있는 테스팅 도구이다.
- component안에서 뭔가를 mock하면 안된다. hook자체를 mock하면 안되고 hook에 결과를 주는것을 mock해야한다.
- 예를들어 useMe 훅의 response를 mock하지 않고 서버에 보내는 graphql request를 mock해야한다. 실제로 useMe를 mock할필요가 없고 query의 result만 mock하면 된다.
- MockedProvider는 mocks라는 prop을 받는데 mocks는 query, mutation, result를 mock할수있게 해준다.
- 테스트시 뭔가가 존재하지 않는다는걸 확인하고 싶다면 query를 사용하면 된다. query는 실패하지 않고 null을 return한다.
- getBy는 element를 찾지 못하면 테스트에 실패하지만 queryBy는 뭔가가 존재하지 않으면 null값을 반환한다.
- MockedProvider를 사용하면 mutation result를 테스트 할수 있지만 variables는 테스트 할수 없다.
- npm i mock-apollo-client   
- mock-apollo-client를 사용하면 mutation의 variables를 테스트 할수 있다.
- waitFor()은 state가 바뀌는것을 기다려주게 한다.
- 테스트가 많을 경우 beforeEach를 사용해서 코드를 간결화하자
- query를 확인하고 싶을때는 일반적인 Apollo 테스팅을 사용하고 mutation을 확인하고 싶을때는 mock-apollo-client을 사용한다.
- jest.requireActual()은 실제 모듈을 require 한다.
- jest.clearAllMocks()을 통해 바꾼부분이 있다면 다시 돌려놓는다.

### E2E REACT TESTING
- Cypress는 Mac, Windows, Linux에서 end-to-end테스트 할수 있게 해준다.
- npm install cypress
- npx cypress open
- cypress안의 typescript구성은 react application의 typescript와 구성이 다르기 때문에 cypress안에 tsconfig.ts파일을 생성한다.
- cypress에서는 jest를 사용하지 않고 mocha를 사용한다.
- npm install --save-dev @testing-library/cypress
- Cypress Testing Library를 사용해서 react testing Library에서 사용했던 element을 가질수 있다.(get을 사용하는대신 findBy를 사용할수 있다.)
- cypress.intercept()를 통해서 request를 가로챌수있다.
- intercept가 작동하는 원리는 어떤 HTTP request에 대한 stub(mock), 또는 spy하는 것을 허용하는 것이다. 이것을 통해서 http request의 body, headers 그리고 URL을 변경 할수 있다.
- 매번 반복하는 확인 작업같은 것들을 command로 만들수 있다.
- request를 보내거나 response를 받기 위해서 fixture를 만들어서 사용할수 있다.(import를 할 필요없이 올바른 경로만 적어주면 된다.)
- FormData 인터페이스는 form 필드와 그 값을 나타내는 일련의 key/value 쌍을 쉽게 생성할 수 있는 방법을 제공합니다. 인코딩 타입이 "multipart/form-data"로 설정된 경우, form에서 사용하는 것과 동일한 포맷을 사용해야 합니다.
- refetch query는 말그대로 query를 다시 fetch 해주는 기능이다.
- refetch 작업은 mutation 작업이 성공적으로 끝나면 자동으로 일어난다. 
- readQuery는 cache의 현재 state를 읽고 있는것이다.

### OWNER DASHBOARD
- useForm 훅의 mode: "onChange"는 특정 input의 값이 변경될 때마다 실시간으로 form에서 validate를 해준다. 
- useForm에서 setValue는 기본적으로 form안에서 원하는 값을 설정할수 있게 해준다.
- Victory는 멋진 그래프들을 만들수 있게 해주는 react component들이 들어있는 라이브러리이다.
- VictoryLine에서 datum은 label을 어떤 방식으로 그릴지와 관련이 있다.
- dy는 수직방향으로 점으로부터 얼마나 떨어져 있는지를 나타낸다. 

### PAYMENTS
- paddle은 소프트웨어 서비스 제품을 팔수 있는 멋진 곳이다.
- subscription plan은 누구를 월 단위로 돈을 지불하게 만들고 싶을 때 쓰는거다. 
- Server Notification은 user가 다운로드 하지 않아도 paddle이 알아서 우리 서버에 내용을 적용시켜준다. 즉 누가 product를 구입하면 paddle이 서버에 내용을 적용시켜준다.
- paddle의 체크아웃에는 3가지의 옵션이 있는데 그중 하나는 체크박스가 페이지 위에 뜨는 overlay이다. user가 어디로 이동하지 않고 페이지 위에 박스가 나타난다.
- 다른하나는 inline checkout이다. overlay는 없지만 form이 페이지의 html위에 있다.
- 마지막으로 branded가 있는데 inline checkout과 비슷하고 CSS를 원하는 만큼 입힐수 있다.
- Error 1 => GET https://checkout-service.paddle.com/checkout/error 400
- Error 2 => Access to XMLHttpRequest at 'https://www.google-analytics.com/collect?v=1&t=event&tid=UA-34210082-28&cid=undefined&ds=web&ul=ko-KR&dr=http%3A%2F%2Flocalhost%3A3002%2F&dl=https%3A%2F%2Fbuy.paddle.com%2Fcheckout%2Ferror&ni=1&ec=error&ea=error&el=Sorry%2C%20the%20page%20you%20were%20looking%20for%20could%20not%20be%20found.' from origin 'https://buy.paddle.com' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
- Error 3 => GET https://www.google-analytics.com/collect?v=1&t=event&tid=UA-34210082-28&cid=undefined&ds=web&ul=ko-KR&dr=http%3A%2F%2Flocalhost%3A3002%2F&dl=https%3A%2F%2Fbuy.paddle.com%2Fcheckout%2Ferror&ni=1&ec=error&ea=error&el=Sorry%2C%20the%20page%20you%20were%20looking%20for%20could%20not%20be%20found. net::ERR_FAILED

### MAKING AN Order
- find()는 find한 object를 return하거나 혹은 undefined를 return하는 function이다. 
- state를 mutate하지 않고 새로운 state를 만들고 return하는것이 좋다. 그 이유는 react.js에서는 새 state를 확인하고 re-render하는 것이 쉽기 때문이다. state를 mutate하게 되면, react는 아무 변화도 일어나지 않았다고 생각할수 있다.

### REALTIME ORDER
- splitLink는 split이라는 함수를 사용하는데 split 함수는 3개의 인자를 가진다. 하나는 함수이고, 나머지는 어떤 값들이다. 그래서 함수가 true를 return 하게 되면 wsLink를 사용하는거고 만약 함수가 false를 return하면 httpLink를 사용하는 것이다.
- updateQuery는 이전의 query 결과와 새로운 subscription data가 필요한 함수이다. 
- npm i google-map-react
- console.cloud.google.com에서 [API 및 서비스] - [라이브러리]에서 Maps Javascript API에서 "사용"클릭 
- watchPosition은 getLocation이랑 비슷한데 지켜보는 기능도 있다. 
- onApiLoaded에서 map은 지금 당장 가지고 있는 화면의 지도 정보이다. maps는 사용할수 있는 Google Maps 객체이다. 