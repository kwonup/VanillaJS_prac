//function

function sayHello(name, age) {
    //매개변수(parameter)
    console.log(`Hello my name is ${name}!! and I'm ${age}`);
}

sayHello("영우", 26); //인자(argument)전달
sayHello("소은", 29);

const player = {
    name: "nico",
    sayHello: function (otherPersonName) {
        console.log("Hello " + otherPersonName + " nice to meet you");
    },
};
console.log(player.name);
player.sayHello("lynn");
