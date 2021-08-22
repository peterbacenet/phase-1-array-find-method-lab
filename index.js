function superbowlWin(recordArry) {
    const newObject = (recordArry.find((recordArry) => recordArry.result === 'W'))
    if(newObject) {
    return (newObject.year)}
    }
      


//     Write a function called superbowlWin() in index.js:
// The function should receive 1 argument, an Array of JavaScript Objects
// Each object has two properties: year and result
// It should use find() to test each Object to see if the result is "W" — a win!
// It should return the year when the win occurred (if it occurred at all!)
// If no win is found, it should return, sadly, undefined

function superbowlWin(arr) {            // array of objects with 2 properties, year and result, use find to find result that is W, if no win is found should return undefined
const yearResults = (arr.find(arr => arr.result === "W"))
if(yearResults) {
    return(yearResults.year) //returns undefined
}}