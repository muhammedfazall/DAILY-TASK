//Q1 Is Divisible by 3 and 5

function exmp(n){
    if(n%5===0){
        if(n%3===0){
            console.log("FizzBuzz");

        }else{
            console.log("Fizz");
        }
    }else if(n%3===0){
        console.log("buzz");

    }else console.log("not divisible");

}

exmp(12);


//Q2 reverse using recursion

let reversed = [];
function strReverse(string) {
    if (string === "") return;
    let a = string.split("").pop();
    string = string.slice(0, string.length - 1)
    reversed.push(a);
    strReverse(string);
    return reversed.join("");
}
console.log(strReverse("nahid"));

