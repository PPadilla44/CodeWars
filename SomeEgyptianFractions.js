function decompose(n) {


    let res = [] ;
    if (n.includes(".")) {
        n = n.split(".");
        if (n[0] !== "0") {
            res += [n[0]]
        }
        n = n[1] + "/" + ( Math.pow( 10, n[1].length ))
    }
    
    n = n.split("/")

    if (n.length === 1) {
        return res;
    }

    if (parseInt(n[0]) >= parseInt(n[1])) {
        res += [ +(parseInt(n[0]) / parseInt(n[1])) ]
        n = [ +(parseInt(n[0]) % parseInt(n[1])) , n[1] ]
    }

    console.log(n);

    
    console.log(res);

    


    return res
}


function testing(actual, expected) {
    Test.assertSimilar(actual, expected);
}

console.log(decompose('3/4')) // ["1/2", "1/4"]);
console.log(decompose('12/4') );// ["3"]);
console.log(decompose('0.66') );// ["1/2", "1/7", "1/59", "1/5163", "1/53307975"]);
console.log(decompose("0/1000")) ;// []);