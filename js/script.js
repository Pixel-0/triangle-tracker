function result() {

  var hypotenuse = document.getElementById('hypotenuse').value;
  var adjascent = document.getElementById('adjascent').value;
  var opposite = document.getElementById('opposite').value;

  if (hypotenuse === opposite && opposite === hypotenuse && hypotenuse === adjascent) {
    alert("Equilateral");
  } else if (hypotenuse === opposite || hypotenuse === adjascent || opposite === adjascent) {
    alert("Isosceles");
  } else if ((hypotenuse + opposite) <= adjascent || (hypotenuse + adjascent) <= opposite || (opposite + adjascent) <= hypotenuse) {
    alert("Not a definite triangle");
  } else {
    alert("Scalene");
  }

}
