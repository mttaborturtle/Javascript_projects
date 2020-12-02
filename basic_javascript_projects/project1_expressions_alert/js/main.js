// Create a click box 
window.alert('Click to close this window!');

// Write Hello World
document.write('Hello World<br>');

// Write some text variable and color it red 
var A = "This is something super cool I would like to say!<br>";
var A = A.fontcolor("red");
document.write(A);

// Write a sentence with escaped chars 
document.write("So we need to use a \\ when we want to use an \" in a string to say something like: Joe said, \"I like HTML\\CSS!\"<br>");

// Concotenate some strings 
var B = "This " + "is not a " + "split up " + "sentence...<br>";
var B = B.fontcolor("purple");
document.write(B);

// Create multiple vars and color them before printing them out 
var best = "Dogs", worst = "Cats", ok = "Fish";
var best = best.fontcolor("green");
var worst = worst.fontcolor("red");
var ok = ok.fontcolor("blue");
document.write(best + " " + worst + " " + ok + "<br>");

// Create an expression which adds numbers
document.write(236 + 142);