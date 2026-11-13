/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div
---------*/
const heading = document.querySelector("h2")
const side = document.querySelector(".sides")
heading.addEventListener("click", function()
{
    side.classList.toggle("hidden")
});

/*---------
    Program the two fill inputs to do the following:
    . Display the correct colors on the inputs and outputs and paddles    
    . using an `input` event
        . Change the player's fill property to the value of the input
        . Change the pad's fill property  to the player's fill property
        . Show the fill's hex code in the output div 

-----------*/
const theFill = document.querySelectorAll(".fill");
for (let i=0; i < theFill.length; i++)
{
    theFill[i].value = player[i].fill;
    const output = theFill[i].nextElementSibling;
    output.innerHTML = player[i].fill;
    theFill[i].addEventListener("input", function(e)
    {
        player[i].fill = e.target.value;
        player[i].pad.fill = player[i].fill;
        output.innerHTML = player[i].fill;
    });
}


/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/
