const clock = document.querySelector("h2#clock");

// function sayHello() {
//     console.log("hello");
// }

//setInterval은 2개의 인자를 받는데 첫번째는 function, 두번째는 호출되는 function간격을 몇ms로 할건지
//setInterval(sayHello, 5000); //5초마다 호출

//setTimeout은 얼마나 기다렸다가 실행할건지 설정
//setTimeout(sayHello, 5000);

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock(); //refresh하고도 바로 보여주기위해서 맨첨에 함수호출
setInterval(getClock, 1000); //1초에 한번씩 함수호출

//padStart(2, "0");
