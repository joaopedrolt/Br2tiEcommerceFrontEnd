let active = document.querySelector(".active");
let navLink = document.querySelectorAll(".nav-link");

navLink.forEach(item => {
    item.addEventListener('mouseover', ()=>{
        if(item.classList.contains("active") == false){
            active.style.backgroundColor = "white";
            active.style.color = "black";
        }
    })
    item.addEventListener('mouseout', ()=>{
        active.removeAttribute("style");
    })
});



