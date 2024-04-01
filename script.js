const choices = ['rock','paper','scissors']

let player = document.getElementById('player')
let computer = document.getElementById('computer')
let finalresult = document.getElementById('finalresult')
let playerscore = document.getElementById('playerscore')
let computerscore = document.getElementById('computerscore')

let pscore = 0;
let cscore = 0;


function change(playerchoice)
{

    const random = choices[Math.floor(Math.random()*3)]
    
    let result = ''

    if(playerchoice == random)
    {
        result = 'Its a tie'
    }
    else
    {
        switch(playerchoice)
        {
            case 'rock':
              result = (random == 'scissors') ? 'You Win' :'You Lose'
                break;
            case 'paper':
                result = (random == 'rock') ? 'You Win' :'You Lose'
                break;
            case 'scissors':
               result =  (random == 'paper') ? 'You Win' :'You Lose'
                break;
        }
    }

    player.textContent = `Player : ${playerchoice}`
    computer.textContent =`computer : ${random}`
    finalresult.textContent = result

    finalresult.classList.remove('greentext','redtext')

    switch(result)
    {
        case 'You Win':
            pscore++;
            finalresult.classList.add('greentext')
            playerscore.textContent = pscore
           
            pscore.classList.add('greentext')
            break;

        case 'You Lose':
            cscore++;
            finalresult.classList.add('redtext')
            computerscore.textContent = cscore   
           
            cscore.classList.add('redtext')
            break;
    }
    


}