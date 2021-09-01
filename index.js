// FOR DICE 1

// for making the range from 1-6
let randomDiceNumber1=Math.random()*6;
randomDiceNumber1=Math.floor(randomDiceNumber1) + 1;

// dice1.png - dice6.png
let randomDiceImage="dice" + randomDiceNumber1 + ".png";

// setting the new source for image
let randomImageSource="images/"+randomDiceImage;

// setting the src attribute to new random source fro first image
let image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);



// FOR DICE 2

let randomDiceNumber2=Math.floor(Math.random()*6)+1;
let randomDICEimage="dice" + randomDiceNumber2 + ".png";
let randomDICEsource="images/" + randomDICEimage;
let image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDICEsource);


if(randomDiceNumber1 > randomDiceNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if(randomDiceNumber2 > randomDiceNumber1)
{
    document.querySelector("h1").innerHTML="Player 2 wins!";
}
else
{
    document.querySelector("h1").innerHTML="Draw!";
}