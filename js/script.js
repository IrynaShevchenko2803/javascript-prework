
function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }  

    if(argMoveId == '2'){
        return 'papier';
    }

    if(argMoveId == '3'){
        return 'nożyce';
    }

    printMessage('Nie znam ruchu o id ' + argMoveId + '.', 'messages');
    return 'nieznany ruch';
}
  
function displayResult(argComputerMove, argPlayerMove){ 
        
    console.log('moves:', argComputerMove, argPlayerMove);
    
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove, 'messages');
    if( argComputerMove ==  argPlayerMove ){
        printMessage('Mamy ramis!', 'messages'); 
        return;
    }

    if( (argComputerMove == 'kamień' && argPlayerMove == 'papier')||
        (argComputerMove == 'papier' && argPlayerMove == 'nożyce')||
        (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
    ){
    printMessage('Ty wygrywasz!', 'messages');
    scorePlayer = scorePlayer + 1;
    
    }

    else {
    printMessage('Tym razem przegrywasz :(', 'messages');
    scoreComputer = scoreComputer + 1;
    }
}


let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);
console.log(computerMove)

/*if(randomNumber == 1){
  computerMove = 'kamień';
}

printMessage('Mój ruch to: ' + computerMove);

if (randomNumber ==2){
    computerMove = 'nożyce'
}

printMessage('Mój ruch to: ' + computerMove);

if (randomNumber ==3){
    computerMove = 'papier'
}

printMessage('Mój ruch to: ' + computerMove);*/









let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*if(playerInput == '1'){
  playerMove = 'kamień';
}

printMessage('Twój ruch to: ' + playerMove);

if(playerInput == '2'){
    playerMove = 'papier'
}
printMessage('Twój ruch to: ' + playerMove);


if(playerInput == '3'){
    playerMove = 'nożyce'
}
printMessage('Twój ruch to: ' + playerMove);




if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }

if( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Mamy ramis!');
  }
  if( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Ty przegrywasz!');
  }




  

  if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  }
  if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Ty przegrywasz!');
  }
  if(computerMove =='papier' && playerMove =='papier'){
    printMessage('Mamy ramis!')
}





  if( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty przegrywasz!');
  }
  if( computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Mamy ramis!');
  }
  if( computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Ty przegrywasz!');
  }



  if( computerMove == 'nożyce' && playerMove == 'nieznany ruch'){
    printMessage('Nieznany ruch!');
  }
  if( computerMove == 'kamień' && playerMove == 'nieznany ruch'){
    printMessage('Nieznany ruch!');
  }
  if( computerMove == 'papier' && playerMove == 'nieznany ruch'){
    printMessage('Nieznany ruch!');
  }*/
