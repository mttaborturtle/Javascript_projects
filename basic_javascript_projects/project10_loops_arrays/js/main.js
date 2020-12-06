// Create loop function
function call_loop() {
    var nums = "";
    var x = 1;
    while (x < 13) {
        nums += "  " + x;
        x++
    }
    document.getElementById("loop").innerHTML = nums;
}

// Display the length of a string
function str_len() {
    var str = "This is a wicked long string with many words!";
    var x = str.length;
    document.getElementById("str_len").innerHTML = x;
  }

// Loop through an array and display the list of strings
var instruments = ["Paul-Reed-Smith Semi-Hollow Body Electric Guitar", "Djembe Hand Drum", "Fender Rhodes Electric Piano", "Hammond B3 Organ", "Honer D6 Clavinet", "Moog Grandmother Analog Synth", "Wurlitzer 200A Electric Piano"];
var content = "";
var y;
function instrum() {
    for (y = 0; y < instruments.length; y++) {
        content += "--" + instruments[y] + "<br>";
    }
    document.getElementById("instrum").innerHTML = content;
}

// Create an array and display one item
function myfav() {
    var instruments = [];
    instruments[0] = "Paul-Reed-Smith Semi-Hollow Body Electric Guitar";
    instruments[1] = "Fender Rhodes Electric Piano";
    instruments[2] = "Hammond B3 Organ";
    instruments[3] = "Wurlitzer 200A Electric Piano";
    instruments[4] = "Moog Grandmother Analog Synth";
    document.getElementById("myfav").innerHTML = "Although I love them all, my favorite instument to play<br>is a " + instruments[0] + ".";
}

// Create an array, change one item, and then create another item. Then display the items
const instrument = {type:"guitar", model:"PRS Hollow-Body", color:"Straburst"};
function const_func() {
    instrument.color = "Red Starburst"
    instrument.price = "$850";
    document.getElementById("const_func").innerHTML = "I own a " + instrument.color + " " + instrument.model + 
    " " + instrument.type + " which cost me " + instrument.price + ", and I love it!!";
}

// Create a let variable and use it
var a = "This is a variable...";
document.write(a);
{
    let a = "This is a let variable...";
    document.write("<br>" + a)
}
document.write("<br>" + a)

//Using the return statement
function return_me() {
    function say_something() {
        return "Hi there!! I am here because of a return statement.";
    }
    document.getElementById("return_me").innerHTML = say_something();
    
}

// This creates an object and displays it
function object_func() {
    let organ = {
        make: "Hammond",
        model: "B3",
        year: "1968",
        wood: "Stained Cherry Wood",
        description : function() {
            return "My Funk organ is a " + this.year + " " + this.wood + " " + this.make + " " + this.model;
        }
    };
    document.getElementById("object_func").innerHTML = organ.description(); 
}

//Break Statement
function break_me() {
    var words = "";
    var a;
    for (a = 0; a < 8; a++) {
        if (a === 5) { break; }
        words += "Count to four and stop: " + a + "<br>";
    }
    document.getElementById("break_me").innerHTML = words;
}

//Continue Statement
function continue_me() {
    var words = "";
    var a;
    for (a = 0; a < 10; a++) {
        if (a === 5) { continue; }
        words += "Count to ten and skip five: " + a + "<br>";
    }
    document.getElementById("continue_me").innerHTML = words;
}






