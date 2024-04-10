// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//     const currentColor = h1.style.color;
//     let newColor;
//     if (currentColor === "blue") {
//         newColor = "tomato";
//     } else {
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
// }

// h1.addEventListener("click", handleTitleClick);

//step1 : find the element
//step2 : listen the event
//step3 : react that event

const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//     const clickedClass = "clicked";
//     if (h1.classList.contains(clickedClass)) {
//         h1.classList.remove(clickedClass);
//     } else {
//         h1.classList.add(clickedClass);
//     }
//     console.log(h1.className);
// }
function handleTitleClick() {
    h1.classList.toggle("clicked"); //toggle은 clssList에 클래스가 있는지 확인하여
    console.log(h1.className);
}
h1.addEventListener("click", handleTitleClick);
