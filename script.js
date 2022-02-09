let overall = 0;
let tipPercent = 0;
let numPeople = 1;
tip = document.getElementById("tips")
total = document.getElementById("total-per-person")
let buttons = document.querySelectorAll("button")

bill = document.getElementById("bill")
bill.addEventListener("input", ()=>{
    console.log(bill.value)
    overall = bill.value
    addTip()
})

function addTip(){
    overall = bill.value
    tipAsDecimal = tipPercent/100
    tipAmount = tipAsDecimal * overall
    overall-=(-tipAmount)
    resetButtons()
    tipPerPerson = tipAmount/numPeople
    tip.textContent = tipPerPerson.toFixed(2)
    totalPerPerson = overall/numPeople
    total.textContent = totalPerPerson.toFixed(2)
}

function resetButtons(){
    for (let i = 0; i < buttons.length-1; i++) {
        buttons[i].style.backgroundColor = "hsl(183, 100%, 15%)";
        buttons[i].style.color = "white";
    }
}


five = document.getElementById("5")
five.addEventListener("click", () =>{
    tipPercent = 5;
    addTip()
    five.style.backgroundColor = "hsl(172, 67%, 45%)";
    five.style.color = "hsl(183, 100%, 15%)";
})

ten = document.getElementById("10")
ten.addEventListener("click", () =>{
    tipPercent = 10;
    addTip()
    ten.style.backgroundColor = "hsl(172, 67%, 45%)";
    ten.style.color = "hsl(183, 100%, 15%)";
})

fifteen = document.getElementById("15")
fifteen.addEventListener("click", () =>{
    tipPercent = 15;
    addTip()
    fifteen.style.backgroundColor = "hsl(172, 67%, 45%)";
    fifteen.style.color = "hsl(183, 100%, 15%)";
})

twentyfive = document.getElementById("25")
twentyfive.addEventListener("click", () =>{
    tipPercent = 25;
    addTip()
    twentyfive.style.backgroundColor = "hsl(172, 67%, 45%)";
    twentyfive.style.color = "hsl(183, 100%, 15%)";
})

fifty = document.getElementById("50")
fifty.addEventListener("click", () =>{
    tipPercent = 50;
    addTip()
    fifty.style.backgroundColor = "hsl(172, 67%, 45%)";
    fifty.style.color = "hsl(183, 100%, 15%)";
})

custom = document.getElementById("custom")

custom.addEventListener("click", ()=>{
    resetButtons()
})

custom.addEventListener("input", ()=>{
    tipPercent = custom.value
    addTip()   
})

people = document.getElementById("num-people")
people.addEventListener("input", ()=>{
        numPeople = people.value   
        console.log(numPeople)
        if(numPeople>0){
            tipPerPerson = tipAmount/numPeople
            tip.textContent = tipPerPerson.toFixed(2)
            totalPerPerson = overall/numPeople
            total.textContent = totalPerPerson.toFixed(2)
        }else{
            reset()
        }
})

function reset(){
    overall = 0;
    tipAmount = 0;
    tipPercent = 0;
    numPeople = 1;
    tip.textContent = "0.00"
    total.textContent = "0.00"
    people.value = ""
    bill.value=""
    resetButtons()
}

document.getElementById("reset").addEventListener("click", reset)