
let age = 18;
if (age >= 18) {
  document.getElementById("age-result").innerText = "You are old enough to vote!";
} else {
  document.getElementById("age-result").innerText = "You are too young to vote.";
}
function calculateArea(length, width) {
  return length * width;
}
console.log("Area of 5x10 rectangle:", calculateArea(5, 10));

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
console.log(capitalize("javascript"));

for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}

let fruits = ["apple", "banana", "cherry"];
fruits.forEach(fruit => {
  console.log("Fruit:", fruit);
});

document.getElementById("color-btn").addEventListener("click", function() {
  document.body.style.backgroundColor = "lightblue";
});

document.getElementById("name-input").addEventListener("input", function() {
  let name = this.value;
  document.getElementById("welcome-msg").innerText = "Hello, " + capitalize(name);
});

let students = ["Ali", "Mamo", "Bonaya"];
let list = document.getElementById("name-list");
students.forEach(student => {
  let li = document.createElement("li");
  li.innerText = student;
  list.appendChild(li);
});