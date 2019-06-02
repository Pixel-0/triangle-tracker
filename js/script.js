 function tracker() {

  var hypotenuse = document.getElementById('hypotenuse').value;
  var adjascent = document.getElementById('adjascent').value;
  var opposite = document.getElementById('opposite').value;


  if (hypotenuse === opposite && opposite === hypotenuse && hypotenuse === adjascent) {
    alert("It's an equilateral triangle!");
  } else if (hypotenuse === opposite || hypotenuse === adjascent || opposite === adjascent) {
    alert("It's an isosceles triangle!");
  } else if ((hypotenuse + opposite) <= adjascent || (hypotenuse + adjascent) <= opposite || (opposite + adjascent) <= hypotenuse) {
    alert("It's not a definite triangle ");
  } else {
    alert("It's a scalene triangle");
  }

}

function reset(){
  var hypotenuse=document.getElementById('hypotenuse').value;
  var adjascent=document.getElementById('adjascent').value;
  var opposite=document.getElementById('opposite').value;

}
