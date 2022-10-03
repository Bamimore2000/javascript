// document.getElementById("counter-el").innerText = 61

// let count = 12
// console.log(count);

// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log(count)

// let myAge = 23
// console.log(myAge)

// let myAge = 35
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// let count = 3
// count = 4
// console.log(count)

// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + bonusPoints
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 25
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 5
// console.log(bonusPoints)




// function increment(){
//     console.log("the button was clicked")
// }
// function countDown(){
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// countDown()
// function logging(){
//     console.log(42)
// }
// logging()
 
// let count1 = 34
// let count2 = 33
// let count3 = 36

// function adding(){
//     console.log(count1 + count2 + count3)
// }
// adding()

// function increment(){
    
// }
// let lapCompleted = 0

// function lapIncremet (){
//     console.log(lapCompleted + 1)
//     console.log(lapCompleted + 2)
//     console.log(lapCompleted + 3)
// }
// lapIncremet()
// function lapCount(){
//     lapCompleted = lapCompleted + 1
// }
// lapCount()
// lapCount()
// lapCount()

// console.log(lapCompleted)
// let count = 0
// let increase = document.getElementById("counter-el").innerText = 0
// function increment(){}
    // increase = document.getElementById("counter-el").innerText = 0 + 1
    // count = count + 1
    // console.log(count)
    let countEl = document.getElementById("counter-el")

    console.log(countEl)
    let count = 0

    function increment(){
        count += 1
        countEl.innerText = count
    }

    function decrease(){
        count -= 1
        countEl.textContent = count
    }
    let saveEl = document.getElementById("save-el")
    
    function save(){
        let countOperator = count + " - "
        saveEl.textContent += countOperator
        countEl.textContent = 0
        count = 0
    }

    let surname = "Bamimore"
    let firstName = "Sogo"
    let fullName = firstName + " " + surname
    let greeting = "Good morning, " + fullName
    console.log(greeting)


    let welcomeEl = document.getElementById("welcome-el")
    let ourName = "Bamimore Sogo. "
    let greetingIn = "Welcome Back, "
    let nameGreeting = greetingIn + ourName 
    welcomeEl.innerText = nameGreeting
    welcomeEl.innerText += "🐵"
    console.log(welcomeEl.innerText)
        
        let names = "Linda"
        let greetingss = "Hi there"

    function greetings(){
        console.log(greetingss + ", " + names + "!")
    }
    greetings()

    let myPoints = 3

    function addPoints(){
        myPoints = myPoints + 3
        console.log(myPoints)
    }
    function removePoints(){
        myPoints = myPoints - 1
        console.log(myPoints)
    }
    addPoints()
    addPoints()
    addPoints()
    removePoints()
    removePoints()
    console.log("my points: " + 5 + 9)

    let errorMessage = document.getElementById("error")
    function purchase(){
        let message = "You do not have enough credits"
        errorMessage.innerText = message
        
    }

    // calculator
    let num1 = 800
    let num2 = 8
    document.getElementById("num1").textContent = num1
    document.getElementById("num2").textContent = num2

    function addition(){
        let solution = num1 + num2
        document.getElementById("sum").innerText = solution
        document.getElementById("operator").innerText = "+"

    }
    function multiplication(){
        let solution = num1 * num2
        document.getElementById("sum").innerText = solution
        document.getElementById("operator").innerText = "x"
    }
    function division(){
        let solution = num1 / num2
        document.getElementById("sum").innerText = solution
        document.getElementById("operator").innerText = "/"
    }
    function subtraction(){
        let solution = num1 - num2
        document.getElementById("sum").innerText = solution
        document.getElementById("operator").innerText = "-"
    }
    
    
