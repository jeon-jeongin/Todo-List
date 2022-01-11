const images = ["0_bg.png", "1_bg.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.id = `bg`;

document.body.appendChild(bgImage);