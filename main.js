const memoryCards = document.querySelectorAll('.memorycard');
memoryCards.forEach(card => card.addEventListener('click', flipCard));

function flipCard() {
    if(this.classList.contains('flip')){                 
        this.classList.remove('flip');
    }else{
        this.classList.add('flip');
    }

    if(this.classList.contains('rotate')){
        this.classList.remove('rotate');
    }else{
        this.classList.add('rotate');
    }
}

/* the same thing 

 function flipCard() {
     this.classList.toggle('flip');
     this.classList.toggle('rotate');
 }

 the same thing */








