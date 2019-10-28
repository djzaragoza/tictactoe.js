function checkForWinner () {
        console.log("checking for winner...")
        var winner 
        var playerOne = getPlayerOne() //playerOne is always blue!
            //console.log ('checkForWinner, playerOne is: ', playerOne)

var computer = (playerOne === "X") ? "O" : "X"

// there are 8 winning combos:
    //three rows, three columns, two diagonals
    //refactor below .... this is not DRY

    var blueWin1 = $("#one.blue, #two.blue, #three.blue").length === 3
    var blueWin2 = $("#four.blue, #five.blue, #six.blue").length === 3
    var blueWin3 = $("#seven.blue, #eight.blue, #nine.blue").length === 3
    
    var blueWin4 = $("#one.blue, #four.blue, #seven.blue").length === 3
    var blueWin5 = $("#two.blue, #five.blue, #eight.blue").length === 3
    var blueWin6 = $("#three.blue, #six.blue, #nine.blue").length === 3
    var blueWin7 = $("#one.blue, #five.blue #nine.blue").length === 3
}