 function tracker() {

  var hypotenuse = document.getElementById('hypotenuse').value;
  var adjacent = document.getElementById('adjacent').value;
  var opposite = document.getElementById('opposite').value;


  if (hypotenuse === opposite && opposite === hypotenuse && hypotenuse === adjacent) {
    alert("It's an equilateral triangle!");
  } else if (hypotenuse === opposite || hypotenuse === adjacent || opposite === adjacent) {
    alert("It's an isosceles triangle!");
  } else if ((hypotenuse + opposite) <= adjacent || (hypotenuse + adjacent) <= opposite || (opposite + adjacent) <= hypotenuse) {
    alert("It's not a definite triangle ");
  } else {
    alert("It's a scalene triangle");
  }

}

function reset(){
  var hypotenuse=document.getElementById('hypotenuse').value;
  var adjacent=document.getElementById('adjacent').value;
  var opposite=document.getElementById('opposite').value;

}
