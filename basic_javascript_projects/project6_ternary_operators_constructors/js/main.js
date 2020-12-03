// Takes in a height and lets you know if you are tall enough
function Ride_Function() {
    var height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = can_ride + " to ride.";
}

// Creates a constructor using new and this
function Vehicle(make, model, year, color) {
    this.Vehicle_Make = make;
    this.Vehicle_Model = model;
    this.Vehicle_Year = year;
    this.Vehicle_Color = color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Eric = new Vehicle("Ford", "Pinto", 1971, "Mustard");

// This uses the constructor to output the data added above
function myFunction() {
    document.getElementById("keywords_and_constructors").innerHTML = 
    "Eric drives a " + Eric.Vehicle_Color + "-colored " + Eric.Vehicle_Model +
    " manufactured in " + Eric.Vehicle_Year;
}

// Created by me using the constructor above
function newFunction() {
    document.getElementById("new_and_this").innerHTML = 
    "Jack's brand new " + Jack.Vehicle_Year + " " + Jack.Vehicle_Color + " " + Jack.Vehicle_Make + " " + Jack.Vehicle_Model +
    " is pretty BAD ASS!!! It's way better than Eric's " + Eric.Vehicle_Make + " " + Eric.Vehicle_Model + "! Right?";
}

// This is a nested function in a function
function nestfunc() {
    document.getElementById("nested_func").innerHTML = addme();
    function addme() {
        var num1 = 100;
        function add1(){
            num1 += 200;
        }
        add1();
        return num1 + " is the addition of 100 and 200.";
    }
}