var add= function(side1, side2, side3) {
  return side1 + side2 + side3
}
var side1 =prompt("Insert first side:");
var side2 =prompt("Insert second side:");
var side3 =prompt("Insert third side:");

if (side1==side2 && side1==side3) {
  alert("Equilateral triangle")
} else if (side1==side2 || side1==side3 || side2==side3) {
  alert("Isosceles triangle")
} else if (side1!==side2 && side1!==side3 && side2!==side3) {
  alert("Scalene")
} else if (add(side1+side2)==side3 && add(side2+side3)==side1 && add(side1+side3)==side2) {
  alert("A triangle CANNOT be formed!")
}
