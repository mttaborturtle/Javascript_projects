
// This uses a global variable
var A = "This is something super cool I would like to say!";
function saysome_func() {
    document.getElementById("saysome").innerHTML = A;
}


// This uses a local variable 
function colorfont_func() {
    var B = "This " + "is not a " + "split up " + "sentence...";
    var B = B.fontcolor("purple");
    document.getElementById("colorfont").innerHTML = B;
}

// This function will cause an error which you will see in the console,
// because it is trying to use a local variable of another function,
// which it ultimately can not access
function broken_func() {
    console.log(B + "Hopefully this works!");
}

// This is an if statement that checks to see if it is befor 6pm
function get_date() {
    if (new Date().getHours() < 18) {
        document.getElementById("greeting").innerHTML = "How are you today?";  
    }
}

// This is an if/else statement that checks to see if you input
// dogs or cats and lets you know which is the correct answer
function dogs_cats_func() {
    choose = document.getElementById("question").value;
    if (choose == "dogs" || choose == "Dogs") {
        answer = "You are correct because dogs are the best!";
    }
    else {
        answer = "Really? You are not correct because cats are no fun.";
    }
    document.getElementById("dogs_cats").innerHTML = answer;
}

// This fuction checks the time and gives you a reply based on what time
// of day it is using if/else if/else statements
function time_func() {
    var hour = new Date().getHours();
    var reply;
    if (hour < 12 == hour > 0) {
        reply = "Wakey wakye. Top o'the morning to ya!";
    }
    else if (hour >= 12 == hour < 18) {
        reply = "T'is the afternoon.";
    }
    else {
        reply = "T'is the evening. Time for tea and bed!"
    }
    document.getElementById("time_of_day").innerHTML = reply;
}






