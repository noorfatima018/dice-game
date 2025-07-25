'use strict'

//  selecting elements

const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');

const score0El=document.querySelector('#score--0');
const score1El=document.getElementById('score--1');

const current0El=document.getElementById('current--0');
const current1El=document.getElementById('current--1');

const diceEl=document.querySelector('.dice');
const btnnew=document.querySelector('.btn--new');
const btnroll=document.querySelector('.btn--roll');
const btnhold=document.querySelector('.btn--hold');

let score, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();




// switchpalyer ka function

 const switchplayer= function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
        currentScore=0;
        activePlayer=activePlayer=== 0 ? 1:0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
 };



// roll dice functionallity

btnroll.addEventListener('click', function(){

    if (playing) {

        //1. generate random number for dice
    
        const dice= Math.trunc(Math.random()*6)+1;
       // console.log(dice);
    
        //2. display dice
        diceEl.classList.remove('hidden');
        diceEl.src=`dice-${dice}.png`;
    
    
        //3. if number 1 is display then kya krna 
    
        if(dice!==1){
            // add kr do score ko current score mai
    
            currentScore=currentScore+dice;
            document.getElementById(`current--${activePlayer }`).textContent=currentScore;
           
        }
        else{
            
            // player ko switch kr do
           switchplayer();
    
        }
    }

});

btnhold.addEventListener('click', function(){
    if (playing) {

        //1. jitna score bana usay active player mai add 
        score[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent=score[activePlayer];
    
        //2. agr score 100 sy bara to game finish kr do
    
        if(score[activePlayer]>=10){
    
            playing=false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');    
        }
        else{
            
            switchplayer();
        }
        
    }

});

btnnew.addEventListener('click', init);
