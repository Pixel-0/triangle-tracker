 function tracker() {

  var hypotenuse = document.getElementById('hypotenuse').value;
  var adjascent = document.getElementById('adjascent').value;
  var opposite = document.getElementById('opposite').value;
  var answer=document.getElementById('answer');

  if (hypotenuse === opposite && opposite === hypotenuse && hypotenuse === adjascent) {
    answer.textContent='Equilateral: All sides are equal!';
  } else if (hypotenuse === opposite || hypotenuse === adjascent || opposite === adjascent) {
    answer.textContent="It's an isoscelece ";
  } else if ((hypotenuse + opposite) <= adjascent || (hypotenuse + adjascent) <= opposite || (opposite + adjascent) <= hypotenuse) {
    answer.textContent="It's not a definite triangle ";
  } else {
    answer.textContent="It's a scalene triangle";
  }

}

function reset(){
  var hypotenuse=document.getElementById('hypotenuse').value;
  var adjascent=document.getElementById('adjascent').value;
  var opposite=document.getElementById('opposite').value;
  var answer=document.getElementById('answer');
}
