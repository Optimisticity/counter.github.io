// Expert Counter Project! Coming Soon!

let count = 0;

const value = document.querySelector("#counting");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const carrier = e.currentTarget.classList;
        if (carrier.contains("decrease")){
            count--;
        }
        else if(carrier.contains("increase")){
            count++;
        }
        else {
            count = 0;
        }
        if (count>0){
            value.style.color = "Green"
        }
        else if (count < 0){
            value.style.color = "Red"
        }
        else{
            value.style.color = "Black"
        }
        value.textContent = count
    })
}) 