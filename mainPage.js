let buttonEl = document.getElementById('button')
let quote1El = document.getElementById('quote1')
let quote2El = document.getElementById('quote2')
let fact1El = document.getElementById('fact1')
let fact2El = document.getElementById('fact2')
let story1El = document.getElementById('story1')
let drawing1El = document.getElementById('drawing1')
let drawing2El = document.getElementById('drawing2')

function buttonClicked (){
    getRidOf()
    let randomNumber = getRandomInt(7) + 1

function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max))
}
    console.log(`${randomNumber}`)

    if (randomNumber === 1){
        quote1El.classList.remove('remove')
    }
    if (randomNumber === 2){
        quote2El.classList.remove('remove')
    }
    if (randomNumber === 3){
        fact1El.classList.remove('remove')
    }
    if (randomNumber === 4){
        fact2El.classList.remove('remove')
    }
    if (randomNumber === 5){
    
    let person1 = prompt('Enter an name')
    let adj1 = prompt('Enter an adjective')
    let adj2 = prompt('Enter an adjective')
    let noun1 = prompt('Enter an noun')
    let adj3 = prompt('Enter an adjective')
    let noun2 = prompt('Enter an noun')
    let color1 = prompt('Enter a color')
    let verb1 = prompt('Enter a verb in present tense (ex. I jump)')
    let verb2 = prompt('Enter a verb in present tense (ex. I fall)')
    let verb3 = prompt('Enter a verb in past tense')
    let story1El = document.getElementById('story1')
    story1El.classList.remove('remove')
    
    story1El.innerHTML=`Yesterday, ${person1} and I went to the park. On our way to the ${adj1} park, we saw a ${adj2} ${noun1} on a bike.
    We also saw big ${adj3} balloons tied to a ${noun2}. Once we got to the ${adj1} park, the sky turned ${color1}. It started to ${verb1}
    and ${verb2}. ${person1} and I ${verb3} all the way home. Tommorow, we will try to go to the ${adj1} park again, and hopefully it dosen't
    ${verb1} and ${verb2} again.`
    }

    if (randomNumber === 6){
        drawing1El.classList.remove('remove')
    }

    if (randomNumber === 7){
        drawing2El.classList.remove('remove')
    }

}//Click button end

//Clear home?
function getRidOf(){
    quote1El.classList.add('remove')
    quote2El.classList.add('remove')
    fact1El.classList.add('remove')
    fact2El.classList.add('remove')
    story1El.classList.add('remove')
    drawing1El.classList.add('remove')
    drawing2El.classList.add('remove')
}


   //shrink + grown on click
function shrink() {
    buttonEl.classList.add('shrink')
}
function grow() {
buttonEl.classList.remove('shrink')
} 
buttonEl.addEventListener('click', buttonClicked)
buttonEl.addEventListener('mousedown', shrink)
buttonEl.addEventListener('mouseup', grow)