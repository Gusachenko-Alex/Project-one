var toggleStatus = 1;

function toggleMenu() {
    if (toggleStatus == 1) {
        document.getElementById("menu").style.left = "-240px";
        toggleStatus = 0;
    } else if (toggleStatus == 0) {
        document.getElementById("menu").style.left = "0px";
        toggleStatus = 1;
    }
}

function test(a, b) {
    return a + b
}

let minus = function(a, b) {
    return a - b
}

let plusMinus = (a, b, c) => {
    return a + b - c
}

console.log(test(2, 3))
console.log(minus(5, 3))
console.log(plusMinus(5, 5, 7))