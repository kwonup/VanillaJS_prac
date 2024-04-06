//DOM(document object model)

//document.title = "Hello! From JS";
//js는 이미 html에 연결되어있음
//js는 html에 접근하고 읽을수 있음
//그리고 모든것들은 document로부터 시작함

// const title = document.getElementById("title");

// title.innerText = "Got you!";

// console.log(title.id);
// console.log(title.className);

// const hellos = document.getElementsByClassName("hello");

// console.log(hellos);

// const title = document.getElementsByTagName("h1");
// console.log(title);

const title = document.querySelector(".hello h1"); //이 방법이 가장많이쓰이고 세련된 방법(querySelector) , 주의: 오직 첫번째 요소만 가져옴
console.log(title);
const title2 = document.querySelectorAll(".hello h1");
console.log(title2);

const title3 = document.querySelector(".hello h1:first-child");
console.log(title3);

//둘은 같은역할
const title4 = document.querySelector("#hello");
const title5 = document.getElementById("hello");
console.log(title4);
console.log(title5);

const title6 = document.querySelector(".hello h1");
title6.innerText = "Hello";
