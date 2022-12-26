# Movie App

# # React

<br/>react는 자바스크립트와 함께 모든 요소를 생성한다
<br/>소스코드에 처음부터 HTML을 넣지 않고, HTML에서 HTML을 추가하거나 제거함

<br/>virtual DOM(virtual document object model)의 virtual은 존재하지 않는다는 말
<br/>react application은 여러개의 component를 rendering할 수 있음
<br/>
<br/>

## _component에서 component로, children component로 정보를 내보내는 방법_

<br/>component는 대문자로 시작해야함

```js
function Food({ fav }) {
  return <h3>I like {fav}</h3>;
}

function App() {
  return (
    <div>
      <h1>Hello!!!!!!!!React Practice</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="pizza" />
      <Food fav="hamburger" />
    </div>
  );
}
```

<br/>map은 array의 각 item에서 function을 실행하는 array를 가지는
javascript function이며 그 funtion의 result를 갖는 array를 줌

# # 정리 중
