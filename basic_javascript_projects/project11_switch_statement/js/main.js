// Switch Statement Function
function color_func() {
    var color_output;
    var colors = document.getElementById("color_input").value;
    var color_string = " is a great color! You chose wisely.....";
    switch(colors) {
        case "Red":
            color_output = "Red" + color_string;
        break;
        case "Yellow":
            color_output = "Yellow" + color_string;
        break;
        case "Green":
            color_output = "Green" + color_string;
        break;
        case "Blue":
            color_output = "Blue" + color_string;
        break;
        case "Pink":
            color_output = "Pink" + color_string;
        break;
        case "Purple":
            color_output = "Purple" + color_string;
        break;
        default:
            color_output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("output").innerHTML = color_output;
}

// Validate a form and make sure all fields are filled out
function validateForm() {
    var x = document.forms["emailForm"]["name"].value;
    var y = document.forms["emailForm"]["email"].value;
    var z = document.forms["emailForm"]["subject"].value;
    if (x == "" || y == "" || z == "") {
      alert("Form must be completely filled out");
      return false;
    }
  }

  function displayType(keyboard) {
      var keyboardType = keyboard.getAttribute("data-keyboard-type");
      alert(keyboard.innerHTML + " are used in the " + keyboardType + " keyboard!");
  }