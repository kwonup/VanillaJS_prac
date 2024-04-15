const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input"); //todo-form안에 있는 input태그 지정
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = []; //todo리스트 담을 배열 ,계속 수정해야하므로 let으로 선언

//로컬스토리지에 todolist저장하는 함수
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //JSON.stringify쓰면 무엇이든 문자열로 변환이 가능
}
//filter는 조건만족하는 새 배열 반환함
//지우는 함수
function deleteToDo(e) {
    const li = e.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //지운li와 같은 id를가진 요소를 제외하는 새 배열 반환
    saveToDos();//localStorage에 다시저장
}
//작성한 todo를 화면에 그려줌
function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const btn = document.createElement("button");
    btn.innerText = "X";
    btn.addEventListener("click", deleteToDo);
    li.appendChild(span); //li의 자식으로 span 추가
    li.appendChild(btn); //li자식으로 btn추가
    toDoList.appendChild(li); //todolist 자식으로 li추가
}
function handleToDoSubmit(event) {
    //form태그 제출 후 다룸
    event.preventDefault();
    console.log(toDoInput.value);
    const newTodo = toDoInput.value;
    toDoInput.value = ""; //엔터 누르고 입력창 비움
    const newTodoObj = {
        //todo리스트 담을 배열
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj); //그리기전에 배열에 담음
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; //todo배열에 새로고침하기 이전 todo들을 저장
    parsedToDos.forEach(paintToDo);
}
