
// This function concatenates strings into a sentence
function concat_func() {
    var a = "This " ;
    var b = "is a ";
    var c = "sentence made  ";
    var d = "up of different ";
    var e = "string parts.";
    var sentence = a.concat(b,c, d, e);
    document.getElementById("sentence").innerHTML = sentence;
}

// This function splits the string at the points specified
function split_func() {
    var sentence = "This is a really awesome sentence!";
    var section = sentence.slice(17, 35)
    document.getElementById("split").innerHTML = section;
}

// This function converts the string to all uppercase
function upper_func() {
    var sentence = "i am all lowercase letters";
    var section = sentence.toUpperCase();
    document.getElementById("upper").innerHTML = section;
}

// This function tells the index location of the word searched for
function search_func() {
    var sentence = "i am all lowercase letters";
    var section = sentence.search("lowercase");
    document.getElementById("search").innerHTML = section;
}

// This function converts numbers into a string
function number_func() {
    var a = 60482;
    document.getElementById("number").innerHTML = a.toString();
}

// This function narrows the number down to a certian number of positions
// In this case +5 digits and -5 digits
function precision_func() {
    var a = 60482.28473629483726;
    document.getElementById("precision").innerHTML = a.toPrecision(10);
}

// This function returns a number within a limited amount of decimals
function tofixed_func() {
    var a = 2.848;
    document.getElementById("tofixed").innerHTML = a.toFixed(0);
}

// This function returns a number as a number
function valueof_func() {
    var a = 60482.284;
    document.getElementById("valueof").innerHTML = a.valueOf();
}