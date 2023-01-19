const memoryCards = document.querySelectorAll('.memorycard');
memoryCards.forEach(card => card.addEventListener('click', flipCard));


function flipCard() {
    this.classList.toggle('rotate');
    this.classList.toggle('flip');
    
}

(function shuffle(){
    memoryCards.forEach(card => {                    /*every '.memorycard' will be placed in the parameter card */
        let random = Math.floor(Math.random() * 16)
        card.style.order = random
    })
}());



(function checkforMatch () {
let previousCard = null;
memoryCards.forEach(function(card) {
  card.addEventListener("click", function() {
    
    let currentCard = card.querySelector("img").src;
    if (previousCard !== null) {
      if (currentCard === previousCard) {
        console.log("Images are the same");
      } else {
        console.log("Images are different");
      }
    }
    previousCard = currentCard;
  });
});
} ())














