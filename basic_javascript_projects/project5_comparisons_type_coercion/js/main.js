// Checks the type of
function type_func() {
    document.getElementById("test4").innerHTML = typeof "These are words";
}

// Not A Number
function nan_func() {
    document.getElementById("test1").innerHTML = 0/0;
}

// Is string NaN
function true_func() {
    document.getElementById("test2").innerHTML = isNaN("My dog has fleas!");
}

// Is number NaN
function false_func() {
    document.getElementById("test3").innerHTML = isNaN("2001");
}

// Infinity and negative infinity function
function infin_func() {
    document.getElementById("infinity").innerHTML = 2E310 + "<br>" + -3E310;
}

// Boolean true and false statement
function bool_func() {
    var a = 10 > 2
    var b = 2 > 10
    document.getElementById("bool").innerHTML = a + "<br>" + b;
}

// Three examples of writing to the console
console.log(2+2);
console.log("Hey there! You found me! Good job!");
console.log(100<50);

// Coerce a number to a string
function coerce_func() {
    var z = "20" + 3
    document.getElementById("coerce").innerHTML = z;
}

// Are two numbers equal
function equal_func() {
    var a = 50 == 50
    var b = 2 == 10
    document.getElementById("equal").innerHTML = a + "<br>" + b;
}

// Are two pieces of data the same type and equal
function triple_func() {
    var a = "dog" === "dog";
    var b = "10" === 5;
    var c = "10" === 10;
    var d = "dog" === "cat";
    document.getElementById("triple").innerHTML = a + "<br>" + b + "<br>" + c + "<br>" + d;
}

// And/Or operators
function andor_func() {
    var a = (10 > 3 && 2 < 10);
    var b = (40 > 10 && 3 > 30);
    var c = (3 > 13 || 2 < 10);
    var d = (10 < 3 || 2 > 10);
    document.getElementById("andor").innerHTML = a + "<br>" + b + "<br>" + c + "<br>" + d;
}

// Is-not function
function not_func() {
    var a = !(50 > 15);
    var b = !(2 > 10);
    document.getElementById("not").innerHTML = a + "<br>" + b;
}





