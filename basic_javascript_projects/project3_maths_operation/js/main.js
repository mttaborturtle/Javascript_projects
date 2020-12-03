// Add 2 numbers
function addFunct() {
    var x = 100 + 25;
    document.getElementById("addmaths").innerHTML = "100 + 25 = " + x;
    
  }

function sqrFunct() {
    document.getElementById("sqrmaths").innerHTML = Math.sqrt(128);
}

  // Subtract 2 numbers
function subFunct() {
    var y = 100 - 25;
    document.getElementById("submaths").innerHTML = "100 - 25 = " + y;
}

// Multiply 2 numbers
function multFunct() {
    var z = 100 * 25;
    document.getElementById("multmaths").innerHTML = "100 * 25 = " + z;
}

// Divide 2 numbers 
function divFunct() {
    var q = 100 / 25;
    document.getElementById("divmaths").innerHTML = "100 / 25 = " + q;
}

// Modulus 2 numbers 
function modFunct() {
    var a = 100 % 24;
    document.getElementById("modmaths").innerHTML = "100 % 24 = " + a;
}

// negation operator
function negFunct() {
    var b = 25;
    document.getElementById("negmaths").innerHTML = "Negation operator of 25 = " + -b;
}

// Increment
function incFunct() {
    var c = 20;
    c++;
    document.getElementById("incmaths").innerHTML = "Increment = " + c;
}

// Decrement
function decFunct() {
    var d = 20;
    d--;
    document.getElementById("decmaths").innerHTML = "Decrement = " + d;
}

// Perform multiple maths
function allFunct() {
    var allmth = (4 + 7) * 23 / 4 - 9;
    document.getElementById("allmaths").innerHTML = "(4 + 7) * 23 / 4 - 9 = " + allmth;
}