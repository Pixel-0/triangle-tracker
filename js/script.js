var hypotenuse = parseInt(prompt("Enter the hypotenuse side of your triangle"));
var opposite = parseInt(prompt("Enter the opposite side of your triangle"));
var adjacent = parseInt(prompt("Enter the adjasdent side of your triangle"));

if (hypotenuse === opposite && opposite === hypotenuse && hypotenuse === adjacent) {
  alert("Equilateral");
} else if (hypotenuse === opposite || hypotenuse === adjacent || opposite === adjacent) {
  alert("Isosceles");
} else if ((hypotenuse + opposite) <= adjacent || (hypotenuse + adjacent) <= opposite || (opposite + adjacent) <= hypotenuse) {
  alert("Not a definite triangle");
} else {
  alert("Scalene");
}
