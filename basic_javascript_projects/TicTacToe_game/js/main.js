// Who's turn is it?
let activePlayer = 'X';
// Stores an array of moves to determine who won
let selectedSquares = [];

//Place an X or O in a square
function placeXOrO(squareNumber) {
    //Check to ensure a square hasn't been selected already
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        // Retrieve the HTML element
        let select = document.getElementById(squareNumber);
        //Who's turn is it?
        if (activePlayer === 'X') {
            //Place the X
            select.style.backgroundImage = 'url("./images/x.png")';
            //Active player can be an X or O
        } else {
            //Place the O
            select.style.backgroundImage = 'url("./images/o.png")';
        }
        //Concatenate squareNumber and ActivePlayer
        selectedSquares.push(squareNumber + activePlayer);
        //Call Win Function
        checkWinConditions();
        //Change the active player
        if (activePlayer === 'X') {
            //If player is x change to o
            activePlayer = 'O';
        //If active player is anything other than 'X'    
        } else {
            //Change active Player to X
            activePlayer = 'X';
        }
        //Play placement sound
        audio('./media/place.mp3');
        //Is it computers turn?
        if(activePlayer === 'O') {
            //Disable clicking for computer choice
            disableClick();
            //Wait 1 second
            setTimeout(function () { computersTurn(); }, 1000);
        }
        //Needed for computersTurn function to work
        return true;
    }
    //This function results in a random square being selected
    function computersTurn() {
        //This is needed for the while loop
        let success = false;
        //Store a random number 0-8
        let pickASquare;
        //Computer keeps trying if a square is already selected
        while(!success) {
            //Select a number between 0 and 8
            pickASquare = String(Math.floor(Math.random() * 9));
            //If true the square is empty
            if (placeXOrO(pickASquare)) {
                //Call the function
                placeXOrO(pickASquare);
                //Change the bool and end the loop
                success = true;
            };

        }
    }
}

function checkWinConditions() {
    // X 0,1,2 condition
    if      (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100); }
    // X 3,4,5 condition
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304); }
    // X 6,7,8 condition
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508); }
    // X 0,3,6 condition
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558); }
    // X 1,4,7 condition
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558); }
    // X 2,5,8 condition
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558); }
    // X 6,4,2 condition
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90); }
    // X 0,4,8 condition
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520); }
    // O 0,1,2 condition
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100); }
    // O 3,4,5 condition
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304); }
    // O 6,7,8 condition
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508); }
    // O 0,3,6 condition
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558); }
    // O 1,4,7 condition
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558); }
    // O 2,5,8 condition
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558); }
    // O 6,4,2 condition
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90); }
    // O 0,4,8 condition
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520); }
    //Checks for a tie
    else if (selectedSquares.length >= 9) {
        //Play the tie game sound
        audio('./media/Beep3.wav')
        //Set a .3 second timer before resetGame is called
        setTimeout(function () { resetGame(); }, 1000);
    }
    //Check if array includes 3 strings
    //Used to check for each win
    function arrayIncludes(squareA, squareB, squareC) {
        //Check for 3 in a row
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //If true execute the drawWinLine function
        if (a === true && b === true && c === true) { return true; }
    }
}

//Make body element temporarily unclickable
function disableClick() {
    //Makes unclicable
    body.style.pointerEvents = 'none';
    //Makes it clickable after 1 sec
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000)
}

//Take in a string for path of audio set earlier
function audio(audioURL) {
    //Create an object and pass path as a parameter
    let audio = new Audio(audioURL);
    //Play method plays sound
    audio.play();
}

//Utilize canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //Access our HTML canvas element
    const canvas = document.getElementById('win-lines');
    //Gives us access to methods and props to use on canvas
    const c = canvas.getContext('2d');
    //Start of x axis
    let x1 = coordX1,
        //Start of Y axis
        y1 = coordY1,
        //End of X axis
        x2 = coordX2,
        //End of Y axis
        y2 = coordY2,
        //Store temporary X axis data
        x = x1,
        //Store temporary Y axis data
        y =y1;
    //Interact with the cnavas
    function animateLineDrawing() {
        //Create a loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //Clear the content from last loop
        c.clearRect(0, 0, 608, 608);
        //Start a new path
        c.beginPath();
        //Moves to the starting point
        c.moveTo(x1, y1);
        //End point of line
        c.lineTo(x, y);
        //Width of our line
        c.lineWidth = 10;
        //Color of line
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        //Now draw everything
        c.stroke();
        //Check to see if we reached end point
        if (x1 <= x2 && y1 <= y2) {
            //Adds 10 to the previous x
            if (x < x2) { x += 10; }
            //Adds 10 to the previous y
            if (y < y2) { y += 10; }
            //Cancels loop if it reaches the end
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); } 
        }
        //Similar to the one above
        //Except it is for the 6,4,2 win
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); } 
        }
    }
    //Clear the canvas after win line drawn
    function clear() {
        //Start animation loop
        const animationLoop = requestAnimationFrame(clear);
        //Clear the canvas
        c.clearRect(0, 0, 608, 608);
        //Stop the animation loop
        cancelAnimationFrame(animationLoop);
    }
    //Don't allow clicking while sound is playing
    disableClick();
    //Play the win sounds
    audio('./media/winGame.mp3');
    //Call the main animation loop
    animateLineDrawing();
    //Wait 1 sec, clear canvas, reset game, allow clicking
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

//Reset the game after4 a tie or win
function resetGame() {
    //Iterate through the HTML element
    for (let i = 0; i < 9; i++) {
        //Get the HTML element of i
        let square = document.getElementById(String(i));
        //Removes the background image
        square.style.backgroundImage = '';
    }
    //Reset the array so it is now empty. Start over
    selectedSquares = [];
}
































