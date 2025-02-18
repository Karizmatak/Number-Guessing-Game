let randomNum = Math.floor(Math.random() * 100) + 1;
let guesses = 5;
function generate(){
  function resetGame(){
    window.location.reload();
  }
  let guessNumber = Number(document.getElementById("guessNumber").value);
  let checkAnswer = document.getElementById("checkAnswer");
  let guessCount = document.getElementById("guessCount");
  let inputField = document.getElementById("guessNumber");
  let guessButton = document.getElementById("guessButton");
  if (guesses === 0) {
    return;
  }

  if (!guessNumber || guessNumber < 1 || guessNumber > 100){
    guessCount.textContent = "lütfen geçerli bir sayi gir!"
    return
  }

  if(guessNumber > randomNum){
    checkAnswer.textContent = `tahminin doğru sayidan büyük!`
    guesses--;
    guessCount.textContent = `Hak Sayisi: ${guesses}`
  }
  else if(guessNumber < randomNum){
    checkAnswer.textContent = `tahminin doğru sayidan kücük!`
    guesses--;
    guessCount.textContent = `Hak Sayisi: ${guesses}`
  }
  else if(guessNumber === randomNum){
    checkAnswer.textContent = `Doğru Bildin! Doğru sayi: ${randomNum}`
    setTimeout(resetGame, 2000);
    guessButton.disabled = true;
    inputField.disabled = true;
    return;
  }

  if(guesses === 0){
    checkAnswer.textContent = `Hakkiniz Bitti! Doğru Sayi: ${randomNum} Oyun Yeniden Baslatiliyor`;
    setTimeout(resetGame, 2000);
    guessCount.textContent = `Hak Sayisi: ${guesses}`
    guessButton.disabled = true;
    inputField.disabled = true;
    
  }
  
}

