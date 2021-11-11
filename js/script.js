{
  var compScore = 0;
  var playerScore = 0;
  var round = 1;
  
  
  const playGame = function(playerInput) {
    clearMessages();
    const getMoveName = function(argMoveId){
      
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
  
    roundUp()
  
    function roundUp() {
      round += 1;
      document.getElementById("round").innerHTML  = 'Runda '+round;
    }
  
  
    const displayResult = function(argComputerMove, argPlayerMove) {
      console.log('moves' + argComputerMove + argPlayerMove);
      printMessage('Zagrałeś ' + argComputerMove + ', a ja ' + argPlayerMove);
      if( argComputerMove == argPlayerMove){
        printMessage('Remis!');
      }
      else if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
          printMessage('Wygrywasz!');
          playerScore += 1;
      }
      else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
          printMessage('Przegrywasz!');
          compScore += 1;
      }
      else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
          printMessage('Wygrywasz!');
          playerScore += 1;
      }
      else if(argComputerMove == 'papier' && argPlayerMove == 'kamień') {
          printMessage('Przegrywasz!');
          compScore += 1;
      }
      else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
          printMessage('Wygrywasz!');
          playerScore += 1;
      }
      else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
          printMessage('Przegrywasz');
          compScore += 1;
      }
    }
  
    const randomNumber = Math.floor(Math.random() * 3 + 1);
  
    const computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove);
  
    const playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);
    displayResult(playerMove, computerMove);
  }
  document.getElementById('play-rock').addEventListener('click', function(){
    playGame('1');
  });
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame('2');
  });
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame('3');
  });
  document.getElementById("playerScore").innerHTML = playerScore;
  document.getElementById("compScore").innerHTML = compScore;
  }