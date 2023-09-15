// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

coffemachine = [550, 400, 540, 120, 9];

function buyCoffee(coffemachine, option) {
    if (option === "back") {
        return
    }
    if (option === "1") {
        if (coffemachine[1] >= 250 && coffemachine[2] >= 0 && coffemachine[3] >= 16 && coffemachine[4] >= 1) {
            console.log("I have enough resources, making you a coffee!")
            coffemachine[1] -= 250
            coffemachine[2] -= 0
            coffemachine[3] -= 16
            coffemachine[4] -= 1
            coffemachine[0] += 4
            return coffemachine
        }
        else {
            if (coffemachine[1] < 250) {
                console.log("Sorry, not enough water!")
                return coffemachine
            }
            if (coffemachine[3] < 16) {
                console.log("Sorry, not enough coffee beans!")
                return coffemachine
            }
            if (coffemachine[4] < 1) {
                console.log("Sorry, not enough disposable cups!")
                return coffemachine
            }
        }
    }
    if (option === "2") {
        if (coffemachine[1] >= 350 && coffemachine[2] >= 75 && coffemachine[3] >= 20 && coffemachine[4] >= 1) {
            console.log("I have enough resources, making you a coffee!")
            coffemachine[1] -= 350
            coffemachine[2] -= 75
            coffemachine[3] -= 20
            coffemachine[4] -= 1
            coffemachine[0] += 7
            return coffemachine
        }
        else {
            if (coffemachine[1] < 350) {
                console.log("Sorry, not enough water!")
                return coffemachine
            }
            if (coffemachine[2] < 75) {
                console.log("Sorry, not enough milk!")
                return coffemachine
            }
            if (coffemachine[3] < 20) {
                console.log("Sorry, not enough coffee beans!")
                return coffemachine
            }
            if (coffemachine[4] < 1) {
                console.log("Sorry, not enough disposable cups!")
                return coffemachine
            }
        }
    }
    if (option === "3") {
        if (coffemachine[1] >= 200 && coffemachine[2] >= 100 && coffemachine[3] >= 12 && coffemachine[4] >= 1) {
            console.log("I have enough resources, making you a coffee!")
            coffemachine[1] -= 200
            coffemachine[2] -= 100
            coffemachine[3] -= 12
            coffemachine[4] -= 1
            coffemachine[0] += 6
            return coffemachine
        }
        else {
            if (coffemachine[1] < 200) {
                console.log("Sorry, not enough water!")
                return coffemachine
            }
            if (coffemachine[2] < 100) {
                console.log("Sorry, not enough milk!")
                return coffemachine
            }
            if (coffemachine[3] < 12) {
                console.log("Sorry, not enough coffee beans!")
                return coffemachine
            }
            if (coffemachine[4] < 1) {
                console.log("Sorry, not enough disposable cups!")
                return coffemachine
            }
        }
    }
}

function takeMoney(coffemachine) {
    console.log(`I gave you $${coffemachine[0]}`)
    coffemachine[0] -= coffemachine[0]
    return coffemachine
}

function remainingStock (coffemachine) {
    console.log("The coffee machine has: ")
    console.log(`${coffemachine[1]} ml of water`)
    console.log(`${coffemachine[2]} ml of milk`)
    console.log(`${coffemachine[3]} g of coffee beans`)
    console.log(`${coffemachine[4]} of disposable cups`)
    console.log(`$${coffemachine[0]} of money`)
}

let firstoption;

while (true) {
    console.log("Write action (buy, fill, take, remaining, exit): ")
    firstoption = input()
    if (firstoption === "buy") {
        console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino: ")
        firstfirstoption = input()
        if (firstfirstoption === "1") {
            coffemachine = buyCoffee(coffemachine, "1")
        }
        if (firstfirstoption === "2") {
            coffemachine = buyCoffee(coffemachine, "2")
        }
        if (firstfirstoption === "3") {
            coffemachine = buyCoffee(coffemachine, "3")
        }
    }
    if (firstoption === "fill") {
        let placeholder = [coffemachine[0], coffemachine[1], coffemachine[2], coffemachine[3], coffemachine[4]]
        console.log("Write how many ml of water you want to add: ")
        addw = parseInt(input())
        console.log("Write how many ml of milk you want to add: ")
        addm = parseInt(input())
        console.log("Write how many grams of coffee beans you want to add: ")
        addb = parseInt(input())
        console.log("Write how many disposable cups you want to add: ")
        addc = parseInt(input())
        placeholder[1] += addw
        placeholder[2] += addm
        placeholder[3] += addb
        placeholder[4] += addc
        coffemachine = placeholder
    }
    if (firstoption === "take") {
        takeMoney(coffemachine)
    }
    if (firstoption === "remaining") {
        remainingStock(coffemachine)
    }
    if (firstoption === "exit") {
        break
    }
}
