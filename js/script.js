function tracker() {
	var hypotenuse = parseInt(document.getElementById("hypotenuse").value);
	var adjacent = parseInt(document.getElementById("adjacent").value);
	var opposite = parseInt(document.getElementById("opposite").value);

	if (hypotenuse === opposite && opposite === hypotenuse && hypotenuse === adjacent) {
		alert("It's an equilateral triangle!");
  } 
  else if (hypotenuse === opposite || hypotenuse === adjacent || opposite === adjacent) {
		alert("It's an isosceles triangle!");
  } 
  else if (hypotenuse + opposite <= adjacent || hypotenuse + adjacent <= opposite || opposite + adjacent <= hypotenuse) {
    alert("It's not a definite triangle ");
  }  
  else if ( (Math.pow(hypotenuse, 2) + (Math.pow(adjacent, 2)) === (Math.pow(opposite, 2))) || (Math.pow(hypotenuse, 2)) + (Math.pow(opposite, 2)) === (Math.pow(adjacent, 2)) || (Math.pow(adjacent, 2)) + (Math.pow(opposite, 2)) === (Math.pow(hypotenuse, 2)) ) {
      alert("Pythagoras Baby!!!" + "\n" + "Yours is a Right-angled Triangle!!");
  } 
  else {
		alert("It's a scalene triangle");
	}
}
