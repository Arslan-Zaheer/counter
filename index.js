


let entryRecord = document.getElementById("record-text")
let countStr

let counterValue = document.getElementById('counter')
let count = 0;


//Increment Btn
function increment(){
        count += 1
        counterValue.textContent = count    
}

//Save Btn

function save(){
    
    countStr = count + " - "
    entryRecord.textContent += countStr
    counterValue.textContent = 0
    count = 0

}