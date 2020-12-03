// This takes a string and colors it blue and places it into 
// the button that gets clicked on the webpage
function first_funct() {
    var parg = "This is my very first Function.<br>I have written this paragraph and <br>decided to color it blue.<br>Pretty cool if I don't say so myself!!";
    var styld = parg.fontcolor("blue");
    document.getElementById("Blue_text").innerHTML = styld;
}

// This function takes two strings and concatenates them together, adds color, 
// and places it into the button that gets clicked on the webpage
function second_funct() {
    var sent = "I am learning a lot about <br>";
    sent += "how to concatenate strings!";
    var colrd = sent.fontcolor("turquoise");
    document.getElementById("concat").innerHTML = colrd;
}