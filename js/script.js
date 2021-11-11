{
  var compScore = 0, playerScore = 0, round = 1;
  
  
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
  

  
    function roundUp() {
      round += 1;
      document.getElementById("round").innerHTML  = 'Runda '+round;
    }
    roundUp()

    const displayResult = function(argComputerMove, argPlayerMove) {
        printMessage('Zagrałeś ' + argComputerMove + ', a ja ' + argPlayerMove);
        
      if( argComputerMove == argPlayerMove){
        printMessage('Remis!');
      }
      else if(
        (argComputerMove == 'kamień' && argPlayerMove == 'papier') || 
        (argComputerMove == 'papier' && argPlayerMove == 'nożyce') || 
        (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
      ){
        printMessage('Wygrywasz!');
        playerScore++;
        document.getElementById("playerScore").innerHTML = playerScore;
      }
      else {
        printMessage('Przegrywasz!')
        compScore++;
        document.getElementById("compScore").innerHTML = compScore;
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
  

  }