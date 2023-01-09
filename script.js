// Currency Converter

// Global Variables 
let inputEl = document.getElementById("input");
let outputEl = document.getElementById("output");
let outputMenuEl = document.getElementById("output-menu");
let inputMenuEl = document.getElementById("input-menu");
let btnEl = document.getElementById("button")

// Change the outcome based on whats selected 

btnEl.addEventListener("click", calculate)

function calculate() {
    let menu1 = inputMenuEl.value;
    let menu2 = outputMenuEl.value;
    let inputAmount = inputEl.value;
    let outputAmount = outputEl.innerHTML;

    // Run this 
    // if (menu1 === "euro" && menu2 === "USD") {
    //     euroToUSD(inputAmount);
    // } else if (menu1 === "yen" && menu2 === "USD") {
    //     yenToUSD(inputAmount);
    // } else {
    //     return;
    // }
    

    
    if (menu1 === "USD") {
        console.log("USD")
    } else if (menu1 === "euro") {
        console.log("euro")
    } else if (menu1 === "yen") {
        console.log("yen")
    }else if (menu1 === "pound") {
        console.log("pound")
    }else if (menu1 === "chinese") {
        console.log("chinese")
    }else if (menu1 === "Australian") {
        console.log("Aust")
    }else if (menu1 === "Canadian") {
        console.log("Canada")
    }else if (menu1 === "rupee") {
        console.log("Rupee")
    }else if (menu1 === "peso") {
        console.log("Peso")
    }else if (menu1 === "ruble") {
        console.log("Ruble")
    }else if (menu1 === "won") {
        console.log("Won")
    }

    if (menu2 === "USD") {
        console.log("USD")
    } else if (menu2 === "euro") {
        console.log("euro")
    } else if (menu2 === "yen") {
        console.log("yen")
    }else if (menu2 === "pound") {
        console.log("pound")
    }else if (menu2 === "chinese") {
        console.log("chinese")
    }else if (menu2 === "Australian") {
        console.log("Aust")
    }else if (menu2 === "Canadian") {
        console.log("Canada")
    }else if (menu2 === "rupee") {
        console.log("Rupee")
    }else if (menu2 === "peso") {
        console.log("Peso")
    }else if (menu2 === "ruble") {
        console.log("Ruble")
    }else if (menu2 === "won") {
        console.log("Won")
    }

//     console.log(inputAmount);
//     console.log(outputAmount);
}

// Convert Euro to USD
function euroToUSD(input) {
    let output = input * 1.05
    console.log(output);
    outputEl.innerHTML == output;
}

// Convert Yen to USD
function yenToUSD(input) {
    let output = input * 132.43
    console.log(output);
}

//Convert Pound to USD

//Convert Renb to USD

//Convert Aust Dollar to USD

//Convert Canadian to USD

//Convert Rupee to USD

//Convert Peso to USD

//Convert Ruble to USD

//Convert Won to USD

//Convert USD to USD
