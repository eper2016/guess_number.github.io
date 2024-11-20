let button = document.getElementById('btn1'); 
let hint_button = document.getElementById('btn2');
let reset_btn = document.getElementById('btn3');
let guess_number = document.getElementById('guess_num');
let text_result = document.getElementById('message'); 
let num_tries = document.getElementById('tries'); 
let game_over = document.getElementById('reset'); 
let hint_msg = document.getElementById('hint'); 
let tries = 3; 
let hint = 1; 
let r1; 
r1 = generate_randNum();

function generate_randNum() 
{
    // produce a random number that has a maximum of 100 
    return Math.floor(Math.random() * 100); 
}
function isPerfectSquare(n) 
{
    // check to see if a given number is a perfect square 
    if (n >= 0)
    {
        let m = Math.sqrt(n); 
       
        //console.log(n);
        //console.log(m);
    
        
        if (m * m == n && Number.isInteger(m))
        {
            // if the number is a perfect square and an integer 
            return 1; 
        }
        else {
            return 0; 
        }
    }
    else {
        return 0; 
    }
}
function resetGame(num) 
{
    if (num == 0)
    {
        text_result.innerHTML = "GAME OVER!"; 
        game_over.innerHTML = "My number was: " + r1; 
    }  
    
    // console.log(tries);
    tries = 3;
    num_tries.innerHTML = "Resetting..."; 
    hint_msg.innerHTML =""; 
    document.getElementById('btn2').disabled = false;
    r1 = generate_randNum(); 
}


function evaluation_num() 
{
    game_over.innerHTML = ""; 
    text_result.innerHTML = "";

    let g1 = document.getElementById('guess_num').value;
    let new_msg; 
        
    /* get the absolute differencec of the 
    random number and the inputted number. */
    let t = Math.abs(r1 - g1); 
    
    if(tries == 1) {

        if (g1 == r1)
        {
            // last chance and you got the right number 
            text_result.innerHTML = "WINNER WINNER<br>CHICKEN DINNER"; 
            resetGame(1);
            return;
        }
        else 
        {
            resetGame(0);
            return;
        }
    } 
    else {
        
        if (g1 == r1) {
            // you got the right number with try > 1 
            text_result.innerHTML = "GREAT, YOU GOT IT";
            resetGame(1);
            return;
        }
        else if (t <= 20) { 
            new_msg = "Hot Potato";
            if (t <= 10)
            {
                new_msg = "Hotter";
                if (t <= 5)
                {
                    new_msg = "Potato on FIRE!"; 
                }
            }  
        }
        else if (t > 20) 
        {
            new_msg = "Cold Potato";
            if (t >= 30)
            {
                new_msg = "Colder"; 

                if (t >= 40)
                {
                    new_msg = "Frozen Potato";
                }
            }
        }
        else {
            new_msg = "error";
        }
        text_result.innerHTML = new_msg;
    }
    tries--; 
    num_tries.innerHTML = tries; 
}
function hint_odd_even() 
{
    console.log(r1); 
    console.log(hint); 
    let m1; 
    

    if (r1 % 2 == 0)
    {
        m1 = "It's an even number!"
        if (isPerfectSquare(r1) == 1)
        {
            hint_msg.innerHTML = m1 + "<br>Also, a perfect square!";
        }
        else 
        {
            hint_msg.innerHTML = m1; 
        }
    }
    else {
        m1 = "It's an odd number"; 
        
        if (isPerfectSquare(r1) == 1)
        { 
            hint_msg.innerHTML = m1 + "<br>Also, a perfect square!";
        }
        else
        {
            hint_msg.innerHTML = m1; 
        }
    }
    // disables the button after clicking it 
    document.getElementById('btn2').disabled = true; 
}

button.addEventListener("click", evaluation_num);
hint_button.addEventListener("click", hint_odd_even);
reset_btn.addEventListener("click", resetGame);