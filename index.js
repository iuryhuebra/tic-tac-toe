const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')
const turnPlayer = document.getElementById('turnPlayer')

document.getElementById('start').addEventListener('click', ()=> {
    let namePlayer1 = player1.value
    let namePlayer2 = player2.value
    turnPlayer.innerText = namePlayer1
    
    document.querySelectorAll('#gameBoard span').forEach((element) => {
        element.innerText = ''
        element.classList.remove('win')
        element.onclick = () => {
            if (element.innerText === '') {
                if (turnPlayer.innerText === namePlayer1) {
                    element.innerText = 'X'
                    turnPlayer.innerText = namePlayer2

                } else if (turnPlayer.innerText === namePlayer2) {
                    element.innerText = 'O'
                    turnPlayer.innerText = namePlayer1
                }
                let gameFinished = checkGame()
                if (gameFinished) {
                    document.querySelectorAll('#gameBoard span').forEach((element) => {
                        element.onclick = null
                    })
                }
            } 

        }
    })
})

function checkGame() {
    const board = {}
    document.querySelectorAll('#gameBoard span').forEach((element) => {
        let region = element.dataset.region.split('.')
        let row = region[0]
        let column = region[1]
        if (column == 0) {
            board[`${row}`] = [element.innerText]
        
        } else {
            board[`${row}`].push(element.innerText)
        }
    })
    
    for (let key in board) {
        console.log(board[key][0]);
        
        if (board[key][0] == board[key][1] && board[key][0] == board[key][2] && board[key][1] == board[key][2]
            && board[key][0] && board[key][1] && board[key][2]
        ) {
            document.querySelector(`span[data-region="${key}.${0}"]`).classList.add('win')
            document.querySelector(`span[data-region="${key}.${1}"]`).classList.add('win')
            document.querySelector(`span[data-region="${key}.${2}"]`).classList.add('win')
            return true

        } else if (board[0][key] == board[1][key] && board[0][key] == board[2][key] && board[1][key] == board[2][key]
            && board[0][key] && board[1][key] && board[2][key]
        ) {
            document.querySelector(`span[data-region="${0}.${key}"]`).classList.add('win')
            document.querySelector(`span[data-region="${1}.${key}"]`).classList.add('win')
            document.querySelector(`span[data-region="${2}.${key}"]`).classList.add('win')
            return true
        
        } else if (board[0][0] == board[1][1] && board[0][0] == board[2][2] && board[1][1] == board[2][2]
            && board[0][0] && board[1][1] && board[2][2]
        ) {
            document.querySelector(`span[data-region="0.0"]`).classList.add('win')
            document.querySelector(`span[data-region="1.1"]`).classList.add('win')
            document.querySelector(`span[data-region="2.2"]`).classList.add('win')

        } else if (board[0][2] == board[1][1] && board[0][2] == board[2][0] && board[1][1] == board[2][0]
            && board[0][2] && board[1][1] && board[2][0]
        ) {
            document.querySelector(`span[data-region="0.2"]`).classList.add('win')
            document.querySelector(`span[data-region="1.1"]`).classList.add('win')
            document.querySelector(`span[data-region="2.0"]`).classList.add('win')
        } 
    }
}
