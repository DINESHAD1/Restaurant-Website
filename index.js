const breakfast = document.querySelector("#breakfast");
const home = document.querySelector("#home");
const lunch = document.querySelector("#lunch");
const dinner = document.querySelector("#dinner");
const cart = document.querySelector("#cart");
const containerchild = document.querySelectorAll(".containerchild");

// const buynow = document.querySelectorAll(".buynow");


home.addEventListener("click",()=>{
    window.location.href = 'index.html';
})
breakfast.addEventListener('click',() =>{
    window.location.href ='breakfast.html';
})

lunch.addEventListener("click",()=>{
    window.location.href = "lunch.html";
})

dinner.addEventListener("click",()=>{
    window.location.href = "dinner.html";
})

cart.addEventListener("click",()=>{
    window.location.href = "cart.html";
})


containerchild.forEach(item =>{
    item.addEventListener("click",()=>{
        window.location.href = "cart.html";
    })
})



function CreateElements(eletype,eleparent,eleclass){
    const ele = document.createElement(eletype);
    eleparent.append(ele);
    ele.classList.add(eleclass);
    return ele;
}