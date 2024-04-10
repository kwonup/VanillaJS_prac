const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //대문자로 작성하는이유는 관습, 또한 logininput처럼 중요한정보를 담는것이 아니기 때문에 대문자로 작성.

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    greeting.innerText = `Hello ${username}`; //h1태그에 input에 입력한 내용 전달
    greeting.classList.remove(HIDDEN_CLASSNAME); //원래 있던 hidden속성 제거
}
loginForm.addEventListener("submit", onLoginSubmit);
