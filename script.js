const buttons = document.querySelectorAll('.button')
// console.log(buttons);
const body = document.querySelector("body")
// console.log(body);
const black = document.querySelector("#black")

buttons.forEach(function(button)  {
    // console.log(button);
    button.addEventListener('click', function(event){
     console.log(event);
     console.log(event.target);
     if (event.target.id === 'grey') {
        body.style.backgroundColor = event.target.id;
     }
     if (event.target.id === 'white') {
        body.style.backgroundColor = event.target.id
     }
    
    if(event.target.id === 'red') {
        body.style.backgroundColor = event.target.id
    }
    if(event.target.id === 'black') {
        body.style.backgroundColor = event.target.id
    }
     
    if (event.target.id === 'black' )
    { black.style.backgroundColor = " rgb(45, 44, 44)"}
        else {black.style.backgroundColor = "black" , black.style.color = "white"}
    
  
   
}); 
});