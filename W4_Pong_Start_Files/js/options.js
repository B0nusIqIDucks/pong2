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
const up = document.querySelectorAll(".u");
for (let i=0; i < up.length; i++)
{
    const output = up[i].nextElementSibling;
    up[i].value = player[i].keys.u;
    output.innerHTML = player[i].keys.u;
    up[i].addEventListener("keydown", function(e)
    {
        player[i].keys.u = e.key;
        up[i].value = e.key;
        output.innerHTML = e.key;
    });
    up[i].addEventListener("focus", function(e)
    {
        currentState = "pause";
    });
}
//Down
const down = document.querySelectorAll(".d");
for (let i=0; i < down.length; i++)
{
    const output = down[i].nextElementSibling;
    down[i].value = player[i].keys.d;
    output.innerHTML = player[i].keys.d;
    down[i].addEventListener("keydown", function(e)
    {
        player[i].keys.d = e.key;
        down[i].value = e.key;
        output.innerHTML = e.key;
    });
    down[i].addEventListener("focus", function(e)
    {
        currentState = "pause";
    });
}
//straight???
const str8 = document.querySelectorAll(".s");
for (let i=0; i < str8.length; i++)
{
    const output = str8[i].nextElementSibling;
    str8[i].value = player[i].keys.s;
    output.innerHTML = player[i].keys.s;
    str8[i].addEventListener("keydown", function(e)
    {
        player[i].keys.s = e.key;
        str8[i].value = e.key;
        output.innerHTML = e.key;
    });
    str8[i].addEventListener("focus", function(e)
    {
        currentState = "pause";
    });
}
//stroke
const toast = document.querySelectorAll(".stroke");
for (let i=0; i < toast.length; i++)
{
    toast[i].value = player[i].stroke;
    const output = toast[i].nextElementSibling;
    output.innerHTML = player[i].stroke;
    toast[i].addEventListener("input", function(e)
    {
        player[i].stroke = e.target.value;
        player[i].pad.stroke = player[i].stroke;
        output.innerHTML = player[i].stroke;
    });
}