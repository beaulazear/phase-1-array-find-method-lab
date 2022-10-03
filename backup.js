function superbowlWin(array) {
    let yearWon = array.find(function(array){
        return array.result === `W`
    })
    return yearWon.year;
}

