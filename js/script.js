function getMoveName(argMoveId){
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId)
  if(argMoveId == 1){
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
}


function displayResult(argComputerMove, argPlayerMove) {
  console.log('moves' + argComputerMove + argPlayerMove);
  printMessage('Zagrałeś ' + argComputerMove + ', a ja ' + argPlayerMove);
  if( argComputerMove == argPlayerMove){
    printMessage('Remis!');
  }
  else if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Wygrywasz!');
  }
  else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
      printMessage('Przegrywasz!');
  }
  else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
      printMessage('Wygrywasz!');
  }


}


let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);
/*
if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2) {
  computerMove = 'nożyce';
} else if (randomNumber == 3) {
  computerMove = 'papier';
}
*/
printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);
/*
if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == '3') {
  playerMove = 'nożyce';
} else if (playerInput == '2') {
  playerMove = 'papier'
}
*/
printMessage('Twój ruch to: ' + playerMove);
displayResult(playerMove, computerMove);
/*
if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
}
if( computerMove == 'kamień' && playerMove == 'nożyce'){
  printMessage('Ty przegrywasz!');
}
if( computerMove == 'kamień' && playerMove == 'kamień'){
  printMessage('Mamy remis!');
}
if( computerMove == 'kamień' && playerMove == 'nieznany ruch'){
  printMessage('Tylko 1,2,3!');
}

if( computerMove == 'papier' && playerMove == 'nożyce'){
  printMessage('Ty wygrywasz!');
}
if( computerMove == 'papier' && playerMove == 'kamień'){
  printMessage('Ty przegrywasz!');
}
if( computerMove == 'papier' && playerMove == 'papier'){
  printMessage('Mamy remis!');
}
if( computerMove == 'papier' && playerMove == 'nieznany ruch'){
  printMessage('Tylko 1,2,3!');
}

if( computerMove == 'nożyce' && playerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
}
if( computerMove == 'nożyce' && playerMove == 'papier'){
  printMessage('Ty przegrywasz!');
}
if( computerMove == 'nożyce' && playerMove == 'nożyce'){
  printMessage('Mamy remis!');
}
if( computerMove == 'nożyce' && playerMove == 'nieznany ruch'){
  printMessage('Tylko 1,2,3!');
}
*/
