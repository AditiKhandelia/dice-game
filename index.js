var num1=Math.random();
num1=Math.floor(num1*6)+1;
var num2=Math.random();
num2=Math.floor(num2*6)+1;
document.querySelector(".img1").setAttribute("src","./images/dice"+num1+".png");
document.querySelector(".img2").setAttribute("src","./images/dice"+num2+".png");
if(num1>num2)
{
    
    document.querySelector("h1").textContent="Player 1 wins!";
}
else if(num2>num1)
{
    document.querySelector("h1").textContent="Player 2 wins!";
}
else
{
    document.querySelector("h1").textContent="Both scored the same!";
}