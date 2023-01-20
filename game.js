const cards = document.querySelectorAll('.memorycard');
let  flippedCards= [];
let  matchedCards= [];

cards.forEach(card => card.addEventListener('click', flipCard));


function flipCard() {
  if (flippedCards.length === 2) return;
  /*The 'return' statement in the code means if the gameState.flippedCards.length is equal to 2, 
  the function will stop executing and exit and no more cards can be flipped (no possibility for flipping 3rd card)*/
  this.classList.add('flip');
  this.classList.add('rotate');
  flippedCards.push(this);
  if (flippedCards.length === 2) {
    checkForMatch();
  }
}

function checkForMatch() {
  if (flippedCards[0].dataset.id === flippedCards[1].dataset.id) {
    matchedCards.push(...flippedCards);
    /*  ...flippedCards is spreading the elements of the flippedCards array into individual elements. 
    matchedCards.push(flippedCards[0]);
    matchedCards.push(flippedCards[1]);
    */
    flippedCards[0].removeEventListener("click", flipCard);
    flippedCards[1].removeEventListener("click", flipCard);
    /* removing the click event listener from the matched cards to prevent them from being clicked again.  */
    flippedCards = [];
  } else {
    setTimeout(resetCards, 1000);
  }
}

function resetCards() {
flippedCards.forEach(card => {
    card.classList.remove('flip');
    card.classList.remove('rotate');
  });
  flippedCards = [];
}

function shuffleCards(){
    cards.forEach(card => {                             /*every '.memorycard' will be placed in the parameter card */
        let random = Math.floor(Math.random() * 16)
        card.style.order = random
    })
}
shuffleCards()

