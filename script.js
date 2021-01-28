const buttons = Array.from(document.querySelectorAll('#play'))
let playerscore = document.querySelector('#youscore')
let pcscore = document.querySelector('#pcscore')
let container = document.querySelector('.playbuttons')
let reset = document.querySelector('#reset')
let sb = document.querySelector('.points')
let plsc = 0
let pcsc = 0

function csselect(){
    let gameArray = ['Rock', 'Paper','Scissors']
    return  gameArray[Math.floor(Math.random()*gameArray.length)]
}
reset.addEventListener('click',()=>window.location.reload())

let announcer = document.querySelector('#announcer')


function game(){
    let playerSelection
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        playerSelection = button.innerText
        let computerSelection = csselect()
        playRound(playerSelection,computerSelection)
    })
})
    function playRound(ps,cs){
        ps = ps.toLowerCase()
        cs = cs.toLowerCase()

        if(ps==='rock'&&cs==='paper'||ps==='paper'&&cs==='scissors'||ps==='scissors'&&cs==='rock'){
            announcer.textContent = 'You lose '+cs+' defeats '+ps
            pcsc += 1
            pcscore.textContent = 'PC: '+pcsc
            playerscore.textContent = 'You: '+plsc
            console.log(pcsc)
        }
        else if(ps===cs){
            announcer.textContent = 'It\'s a tie'
            console.log(pcsc)
        }
        else{
            announcer.textContent = 'You win '+ps+' defeats '+cs
            plsc += 1
            pcscore.textContent = 'PC: '+pcsc
            playerscore.textContent = 'You: '+plsc
            console.log(pcsc)
        }
        if(pcsc>=5||plsc>=5){
            if(pcsc>plsc){
                announcer.textContent = 'DEFEAT! You have lost to your PC'
                pcscore.textContent = ''
                playerscore.textContent = ''
                sb.innerText = ''
                pcsc +=1000
            }
            else{
                announcer.textContent = 'VICTORY! You have defeated your PC'
                pcscore.textContent = ''
                playerscore.textContent = ''
                sb.innerText = ''
                plsc +=1000
            }

        }
        return pcsc,plsc
    }
}

game()
