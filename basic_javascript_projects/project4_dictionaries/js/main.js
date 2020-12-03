function my_dictionary() {
    var animal = {
        species:"Dog",
        color:"Black",
        breed:"Labradoodle",
        age:1.5,
        sit:"Good Girl!",
        name:"Stella Blue"
    };
    delete animal.breed;
    document.getElementById("dictionary").innerHTML = animal.name + ", " + animal.breed + ", " + animal.sit;
}