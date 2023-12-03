let a = parseInt(prompt('Enter a'));
let b = parseInt(prompt('Enter b'));
let c = parseInt(prompt('Enter c'));


function quadCal( a, b, c) {
    let x1 = (-b + Math.sqrt(Math.pow(b,2) - 4 * a * c)) / (2 * a);
    let x2 = (-b - Math.sqrt(Math.pow(b,2) - 4 * a * c)) / (2 * a);
    return `x ${x1} or ${x2}`;
}
console.log(quadCal(a, b, c));
