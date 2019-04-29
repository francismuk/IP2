function result() {
var side1 =parseInt(document.getElementById('side1').value);
var side2 =parseInt(document.getElementById('side2').value);
var side3 =parseInt(document.getElementById('side3').value);
var answer= document.getElementById('answer')
var sum1 = side1 + side2;
var sum2 = side1 + side3;
var sum3 = side2 + side3;

if (side1===side2 && side1===side3) {
  answer.textContent="Equilateral triangle"
} else if (side1===side2 || side1===side3 || side2===side3) {
  answer.textContent=  "Isosceles triangle")
} else if (side1!==side2 && side1!==side3 && side2!==side3) {
  answer.textContent="Scalene"
} else ( sum1>side3 && sum3>side1 && sum2>side2) {
  answer.textContent="A triangle CANNOT be formed!"
}
}
