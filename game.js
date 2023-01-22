const cards = document.querySelectorAll('.memorycard');
let  flippedCards= [];
let  matchedCards= [];

cards.forEach(card => card.addEventListener('click', flipCard));


function flipCard() {
  if (flippedCards.length === 2) return;
  /*The 'return' statement in the code means if the gameState.flippedCards.length is equal to 2, 
  the function will stop executing and exit and no more cards can be flipped (no possibility for flipping 3rd card)*/
  if(flippedCards.includes(this)) return;
  /* checking if the card that is being clicked (this) is already in the flippedCards array before adding it.
   If it is already in the array, it will return from the function and prevent it from being added again (avoiding fake match) */
  this.classList.add('flip');
  this.classList.add('rotate');
  flippedCards.push(this);
  if (flippedCards.length === 2) {
    checkForMatch();
  }
}

let index = 0; 
let matchCounter = document.querySelector('.match-counter')
let youWin = document.querySelector ('.win')
let restartBtn = document.querySelector('.btn')
function checkForMatch() {
  if (flippedCards[0].dataset.id === flippedCards[1].dataset.id) {
    index++
    matchCounter.innerHTML = `Score : ${index}`;
    // console.log(index)
    if (index === 8) {
      console.log('You made it, congrats !')
      youWin.classList.add('show')
      restartBtn.classList.add('show')
      clearInterval(interval);                               /*to stop the timer from decrementing */
    }
    matchedCards.push(...flippedCards);
    /*  ...flippedCards is spreading the elements of the flippedCards array into individual elements. 
    matchedCards.push(flippedCards[0]);
    matchedCards.push(flippedCards[1]);
    */
    flippedCards[0].removeEventListener("click", flipCard);
    flippedCards[1].removeEventListener("click", flipCard);
    /* removing the click event listener from the matched cards to prevent them from being clicked again.
    (cause if they're click again, they can be compared with other cards)  */
    flippedCards = [];
  } else {
    setTimeout(resetCards, 1000);
    /*setTimeout is a Js function that iused to execute
     the function restCards after a 1000 milliseconds */
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
        card.style.order = random                       /*we used the order css property, in order to change the position of cards
                                                        that's why we generate a random number that we will give for each card */
    })
}
shuffleCards()


let timer = 61;
let interval = setInterval(countdown ,1000)
/*setInterval is a JS function, it will execute the function 'countdown' repeatedly every 1000 milliseconds. 
 It takes two arguments: the first argument is the function that you want to execute,
 and the second argument is the time interval (in milliseconds) between each execution of the function.*/


function countdown () { 
  timer--;
  /* the countdown function is called every 1000 milliseconds (1 second) 
  using  the setInterval function, the timer variable is decremented by 1 */
  // console.log(timer)
  let timeLeft = document.querySelector('.time-left');
  timeLeft.innerHTML= `Time left : ${timer} sec`
  if (timer === 0) {
      clearInterval(interval);
      /* clearInterval() is a function that is used to stop a timer 
      that was previously set using the setInterval() function, and 
      that will automatically will stop the execution of the function
      (result : the timer will stop) */
      cards.forEach(card => {
      card.classList.remove('flip');                  /*initialize the cards position */
      card.removeEventListener("click", flipCard)     /*remove clicking from cards */
      })
      console.log("Time is up, you lost!");
      timeLeft.innerHTML = "Time is up, you lost!"
      timeLeft.style.backgroundColor = 'red'
      restartBtn.classList.add('show')
      }
}

let restart = document.querySelector('.btn')
restart.addEventListener('click',function() {
    location.reload();
  })