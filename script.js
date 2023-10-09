const number = 4;

if (number >= 5){
    console.log("5以上です")
} else {
    console.log("5未満です")
}

let test = number >= 5 ? "5以上です" : number >= 3 ? "3以上です" : "3未満です"
console.log(test)