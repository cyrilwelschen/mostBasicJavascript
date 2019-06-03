/*
// "Lists" (=objects) creation and manipulation
*/
var sys = "Dots";

var rPs = {"Dots": 0, "DAS": 0, "SmC": 0, "FoR": 0};

if (sys === "Dots") {
  rPs.Dots += 18;
  rPs.SmC = 6;
  console.log(rPs);
}

/*
// Looping through objects
*/
for (var arch in rPs) {
  console.log(arch + " " + rPs[arch]);
}

/*
// Functions 1
*/
var funcOne = function() {
  return "hello from Function one";
}

console.log(funcOne());

/*
// Functions 2
*/
var argFuncTwo = function(numb) {
  return 2 * numb;
}

var argFunc = function(numberOne, numberTwo) {
  var semifinalNumber = numberOne + numberTwo;
  return semifinalNumber + argFuncTwo(3);
}

// 3+2+(2*3)=11
console.log(argFunc(3,2));
