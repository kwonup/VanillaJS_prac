const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img"); //html(태그)요소를 생성

bgImg.src = `img/${chosenImg}`;

document.body.appendChild(bgImg); //html의 body에 bgImg를 추가함
