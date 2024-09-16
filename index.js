var msg1=document.querySelector('#msg1');
var msg2=document.querySelector('#msg2');
var msg3=document.querySelector('#msg3');

var result = Math.floor(Math.random()*100);
console.log(result);

var no_of_guess=0;

var guessedNum = [];
function play()
{
    var userGuess = document.querySelector('#guess').value;

    if(userGuess < 1 || userGuess >100 )
    {
        alert('Please Enter the number between 1 to 100')
    }
    else{
         guessedNum.push(userGuess);
         no_of_guess=no_of_guess+1;

    if(userGuess<result)
    {
        msg1.textContent="Your guess is too low";
        msg2.textContent="Number of guesses :" +no_of_guess;
        msg3.textContent="Guessed Number :"+ guessedNum;

    }
    if(userGuess>result)
        {
            msg1.textContent="Your guess is too high";
            msg2.textContent="Number of guesses :" +no_of_guess;
            msg3.textContent="Guessed Number :" +guessedNum;
    
        }
        if(userGuess==result)
            {
                msg1.textContent="Your are the Winner";
                msg2.textContent="The lucky number is :" + result;
                msg3.textContent="Guessed Number :" +guessedNum;
        
            }
    }

}