function superbowlWin(array) {
    let yearWon = array.find(function(array){
        return array.result === `W`
    })
    if(yearWon === undefined){
        return yearWon;
    }
    return yearWon.year;
}
