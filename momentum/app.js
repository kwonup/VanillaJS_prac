//Object
const pName = "nico";
const pPoints = 121212;
const pHandsome = false;
const pFat = "little bit";

const p = ["nico", 1212, false, "little bit"];

const player = {
    name: "nico",
    points: 10,
    handsome: false,
    fat: true,
};

console.log(player);
console.log(player.name);

console.log(player["name"]);

player.points = 14;
player.lastName = "potato";
delete player.lastName;
console.log(player);
