let card = document.querySelectorAll(".card-services");


card.forEach(item =>{
    item.addEventListener('mouseover', ()=>{
        item.children[0].classList.add("img-services")
        setTimeout(()=>{
            item.children[0].classList.remove("img-services") 
        }, 2500)
    })
});