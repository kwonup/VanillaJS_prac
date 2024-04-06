const title = document.querySelector("div.hello:first-child h1");

console.dir(title); //console.dir은 전체요소가 출력(json과같은 트리구조)

function handleTitleClick() {
    console.log("title was clicked!");
    title.style.color = "blue";
}
//Event: 클릭이벤트

function handleMouseEnter() {
    console.log("mouse is here");
    title.innerText = "Mouse is here!";
}
function handleMouseLeave() {
    console.log("mouse is gone");
    title.innerText = "Mouse is gone!";
}
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
