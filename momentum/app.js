const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1); //console.dir은 전체요소가 출력(json과같은 트리구조)

function handleh1Click() {
    console.log("h1 was clicked!");
    h1.style.color = "blue";
}
//Event: 클릭이벤트

function handleMouseEnter() {
    console.log("mouse is here");
    h1.innerText = "Mouse is here!";
}
function handleMouseLeave() {
    console.log("mouse is gone");
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
    alert("copier!");
}
function handleWindowOffline() {
    alert("SOS No wifi!");
}
function handleWindowOnline() {
    alert("All Good!");
}
h1.addEventListener("click", handleh1Click);
//h1.onclick = handleh1Click; //이런방식도 가능 but추천x
h1.addEventListener("mouseenter", handleMouseEnter);

h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize); //창의 크기가 변경될 때
window.addEventListener("copy", handleWindowCopy);

window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
