// if else 
let a = prompt("Enter a no.");
a = Number.parseInt(a);

if (a < 20) {
    alert("Welcome!");
} else if (a >= 20 && a <= 50) {
    alert("Good work");
} else {
    alert("Thank You for this work.");
}
// print year 
let year = new Date().getFullYear();
switch (new Date().getFullYear()) {
    case 0:
        year = "2023";
        break;
    case 1:
        year = "2024";
        break;
    case 2:
        year = "2025";
        break;
    case 3:
        year = "2026";
        break;
    case 4:
        year = "2027";
        break;
    case 5:
        year = "2028";
        break;
}
document.getElementById("year").innerHTML = "today" + new Date().getFullYear();
console.log(year);

// ternary operator
let b = 30;
let c = 20;
(b>=c? c="yes":"no")
document.getElementById("demo").innerHTML = "value" +"=" +(b > c ? "yes" : "no");



