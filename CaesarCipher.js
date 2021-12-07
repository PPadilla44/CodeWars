const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function movingShift(s, shift) {

    let shiftedArray = [];
    let shiftedStr = "";
    let splitNum = Math.ceil(s.length / 5)

    let startSplit = 0;

    for (let i = 0; i < s.length; i ++) {

        let index = alphabet.indexOf(s[i].toUpperCase());

        index = index + shift;
        if (index >= alphabet.length) {
            index = index - alphabet.length;
        }

        let letter = alphabet[index];

        if ((s[i].toLowerCase() != s[i].toUpperCase()) === false) {
            letter = s[i];
        }

        if(!alphabet.includes(s[i])) {
            shiftedStr += letter.toLowerCase()

        } else {
            shiftedStr += letter
        }
        
        
        shift++;
        if (shift >= alphabet.length) {
            shift = 0;
        }

        if (i % splitNum === 0 && i > 0) {
            shiftedArray.push(shiftedStr.substring(startSplit, i))
            startSplit += splitNum
        }
        if (i === s.length - 1) {
            shiftedArray.push(shiftedStr.substring(startSplit))

        }

    }

    return shiftedArray;
}

function demovingShift(arr, shift) {
    return "";
}


var u = "I should have known that you would have a perfect answer for me!!!"
var v = ["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"]

console.log(movingShift(u, 1));