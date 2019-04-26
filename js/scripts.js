function results() {
var side1 =prompt("Insert first side:");
var side2 =prompt("Insert second side:");
var side3 =prompt("Insert third side:");
var sum1 = side1 + side2;
var sum2 = side1 + side3;
var sum3 = side2 + side3;

if (side1==side2 && side1==side3) {
  alert("Equilateral triangle")
} else if (side1==side2 || side1==side3 || side2==side3) {
  alert("Isosceles triangle")
} else if (side1!==side2 && side1!==side3 && side2!==side3) {
  alert("Scalene")
} else if ( sum1<=side3 && sum2<=side2 && sum3<=side1) {
  alert("A triangle CANNOT be formed!")
}
}
