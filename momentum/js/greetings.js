const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //string을 반복적으로 사용해야할때 다음과 같이 작성, 대문자로 작성하는이유는 관습, 또한 logininput처럼 중요한정보를 담는것이 아니기 때문에 대문자로 작성.
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    //제출되었을때 동작 제어
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); //브라우저의 localStorage에 데이터 저장
    //localStorage란 브라우저가 가지고있는 작은DB같은 API, 만약 없는 정보를 불러오려고하면 null값을 전달
    paintGreetings(username);
}

function paintGreetings(username) {
    //h1 hidden속성제거하고 username삽입하는 함수
    greeting.innerText = `Hello ${username}`; //h1에 저장된 username삽입
    greeting.classList.remove(HIDDEN_CLASSNAME); //h1의 히든속성 제거
}

const savedUsername = localStorage.getItem(USERNAME_KEY); //localStorage에 저장된 username
if (savedUsername === null) {
    //로컬에 안 저장되어 있다면
    loginForm.classList.remove(HIDDEN_CLASSNAME); //loginForm 히든속성 제거
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //로컬에 저장되어 있다면
    paintGreetings(savedUsername);
}
