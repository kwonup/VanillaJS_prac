const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");

function onLoginSubmit(tomato) {
    //함수가 하나의 인자(argument)를 받게함 ->JS로 넘겨줌
    tomato.preventDefault(); //브라우저의 기본동작을 막아줌
    const username = loginInput.value;
    console.log(tomato); //event에 대한 정보 출력
    console.log(username);
}
//중요!!!
//모든 EventListener함수의 "첫번째" 인자는 항상 지금 막 벌어진 일들에 대한 정보
//그리고 JS가 우리에게 그 정보를 무료로 제공함
//인자 공간만 제공하면 JS가 알아서 방금 일어난 event에대한 정보를 지닌 인자를 채워넣을거임

loginForm.addEventListener("submit", onLoginSubmit); //onLoginSubmit뒤에()를 추가하지않는이유는 바로 실행시키지 않기위함임

//onLoginSubmit(); //()를 더하면 브라우저가 보자마자 바로 function을 실행시킴
