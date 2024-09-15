const Signin= document.querySelector("#signin");
const closeButton=document.querySelector("#cross");
const sidebar=document.getElementById("sidebar");
const submit=document.querySelector("#submit");
const navBar=document.querySelector("#navbar");
const listProduct=document.querySelector("#product");
const slider=document.querySelector("#carouselExampleControls");
const offer=document.querySelector("#offer");
const combo=document.querySelector("#combo");
const search=document.getElementById("searchh");
const searchPage=document.getElementById("searchpage");
const offerpage=document.getElementById('offerpage');
const home=document.getElementById('home');
const help=document.getElementById("help");
const helpPage=document.getElementById("accordionPanelsStayOpenExample");
const cart =document.getElementById("cart");
const cartpage=document.getElementById("cartpages");
const rollimg =document.querySelector("#roll");
const rollpage =document.querySelector("#rollpage");
const briyaniimg=document.querySelector("#briyani");
const briyanipage=document.querySelector("#briyanipage");
const momoimg=document.querySelector("#momo");
const momopage=document.querySelector("#momospage");
const dimsumimg=document.querySelector("#dimsum");
const dimsumpage=document.querySelector("#dimsumpage");
const burgerimg=document.querySelector("#Burger");
const burgerpage=document.querySelector("#burgerpage");
const pizzaimg=document.querySelector("#pizza");
const pizzapage=document.querySelector("#pizzapage");
const bakreyimg=document.querySelector("#bakery");
const bakreypage=document.querySelector("#bakreypage");

//home button showing in page
home.addEventListener('click',()=>{
    offerpage.classList.add("hide");
    listProduct.classList.remove("hide");
    slider.classList.remove("hide");
    combo.classList.remove("hide");
    searchPage.classList.add("hide");
    helpPage.classList.add("hide");
    cartpage.classList.add("hide");
    rollpage.classList.add("hide");
    briyanipage.classList.add("hide");
    momopage.classList.add("hide");
    burgerpage.classList.add("hide");
    pizzapage.classList.add("hide");
    dimsumpage.classList.add("hide");
    bakreypage.classList.add("hide");
})

//sign in button show hide on click
Signin.addEventListener('click', () => {
    sidebar.classList.remove("hide");
    offerpage.classList.add("hide");
    listProduct.classList.remove("hide");
    slider.classList.remove("hide");
    combo.classList.remove("hide");
    searchPage.classList.add("hide");
    helpPage.classList.add("hide");
    cartpage.classList.add("hide");
    rollpage.classList.add("hide");
    briyanipage.classList.add("hide");
    momopage.classList.add("hide");
    burgerpage.classList.add("hide");
    pizzapage.classList.add("hide");
    dimsumpage.classList.add("hide");
    bakreypage.classList.add("hide");
})

closeButton.addEventListener("click",()=>{
    sidebar.classList.add("hide");
})

submit.addEventListener('click',()=>{
    alert("You log in sucessfully");
    sidebar.classList.add("hide");
})

//offer page show hide on click

offer.addEventListener('click', () => {
    offerpage.classList.remove("hide");
    listProduct.classList.add("hide");
    slider.classList.add("hide");
    combo.classList.add("hide");
    searchPage.classList.add("hide");
    helpPage.classList.add("hide");
    sidebar.classList.add("hide");
    cartpage.classList.add("hide");
    rollpage.classList.add("hide");
    briyanipage.classList.add("hide");
    momopage.classList.add("hide");
    burgerpage.classList.add("hide");
    pizzapage.classList.add("hide");
    dimsumpage.classList.add("hide");
    bakreypage.classList.add("hide");
})

//search button page loader on click

search.addEventListener('click', () => {
    searchPage.classList.remove("hide");
    listProduct.classList.add("hide");
    slider.classList.add("hide");
    combo.classList.add("hide");
    offerpage.classList.add("hide");
    helpPage.classList.add("hide");
    sidebar.classList.add("hide");
    cartpage.classList.add("hide");
    rollpage.classList.add("hide");
    briyanipage.classList.add("hide")
    momopage.classList.add("hide");
    burgerpage.classList.add("hide");
    pizzapage.classList.add("hide");
    dimsumpage.classList.add("hide");
    bakreypage.classList.add("hide");
})

//help button on help page`
help.addEventListener('click',()=>{
    helpPage.classList.remove("hide");
    searchPage.classList.add("hide");
    listProduct.classList.add("hide");
    slider.classList.add("hide");
    combo.classList.add("hide");
    offerpage.classList.add("hide");
    sidebar.classList.add("hide");
    cartpage.classList.add("hide");
    rollpage.classList.add("hide");
    briyanipage.classList.add("hide")
    momopage.classList.add("hide");
    burgerpage.classList.add("hide");
    pizzapage.classList.add("hide");
    dimsumpage.classList.add("hide");
    bakreypage.classList.add("hide");
})

//cart page loader on click
cart.addEventListener("click",()=>{
    cartpage.classList.remove("hide");
    helpPage.classList.add("hide");
    searchPage.classList.add("hide");
    listProduct.classList.add("hide");
    slider.classList.add("hide");
    combo.classList.add("hide");
    offerpage.classList.add("hide");
    sidebar.classList.add("hide");
    rollpage.classList.add('hide');
    briyanipage.classList.add("hide")
    momopage.classList.add("hide");
    burgerpage.classList.add("hide");
    pizzapage.classList.add("hide");
    dimsumpage.classList.add("hide");
    bakreypage.classList.add("hide");
})
//roll page on click 
rollimg.addEventListener('click',()=>{
    rollpage.classList.remove("hide")
    cartpage.classList.add("hide");
    helpPage.classList.add("hide");
    searchPage.classList.add("hide");
    listProduct.classList.add("hide");
    slider.classList.add("hide");
    combo.classList.add("hide");
    offerpage.classList.add("hide");
    sidebar.classList.add("hide");
    briyanipage.classList.add("hide");
    momopage.classList.add("hide");
    burgerpage.classList.add("hide");
    pizzapage.classList.add("hide");
    dimsumpage.classList.add("hide");
    bakreypage.classList.add("hide");
});
//briyani page loader
briyaniimg.addEventListener('click',()=>{
    briyanipage.classList.remove("hide");
    rollpage.classList.add("hide");
    cartpage.classList.add("hide");
    helpPage.classList.add("hide");
    searchPage.classList.add("hide");
    listProduct.classList.add("hide");
    slider.classList.add("hide");
    combo.classList.add("hide");
    offerpage.classList.add("hide");
    sidebar.classList.add("hide");
    momopage.classList.add("hide");
    burgerpage.classList.add("hide");
    pizzapage.classList.add("hide");
    dimsumpage.classList.add("hide");
    bakreypage.classList.add("hide");
})
//momos page loader
momoimg.addEventListener('click',()=>{
    momopage.classList.remove("hide");
    briyanipage.classList.add("hide");
    rollpage.classList.add("hide");
    cartpage.classList.add("hide");
    helpPage.classList.add("hide");
    searchPage.classList.add("hide");
    listProduct.classList.add("hide");
    slider.classList.add("hide");
    combo.classList.add("hide");
    offerpage.classList.add("hide");
    sidebar.classList.add("hide");
    bakreypage.classList.add("hide");
    dimsumpage.classList.add("hide");
    pizzapage.classList.add("hide");
    burgerpage.classList.add("hide");
})
dimsumimg.addEventListener('click',()=>{
    dimsumpage.classList.remove("hide")
    momopage.classList.add("hide");
    briyanipage.classList.add("hide");
    rollpage.classList.add("hide");
    cartpage.classList.add("hide");
    helpPage.classList.add("hide");
    searchPage.classList.add("hide");
    listProduct.classList.add("hide");
    slider.classList.add("hide");
    combo.classList.add("hide");
    offerpage.classList.add("hide");
    sidebar.classList.add("hide");
    bakreypage.classList.add("hide");
    burgerpage.classList.add("hide");
    pizzapage.classList.add("hide")
})
burgerimg.addEventListener('click',()=>{
    burgerpage.classList.remove("hide")
    momopage.classList.add("hide");
    briyanipage.classList.add("hide");
    rollpage.classList.add("hide");
    cartpage.classList.add("hide");
    helpPage.classList.add("hide");
    searchPage.classList.add("hide");
    listProduct.classList.add("hide");
    slider.classList.add("hide");
    combo.classList.add("hide");
    offerpage.classList.add("hide");
    sidebar.classList.add("hide");
    bakreypage.classList.add("hide");
    pizzapage.classList.add("hide");
    dimsumpage.classList.add("hide")
})
pizzaimg.addEventListener('click',()=>{
    pizzapage.classList.remove("hide")
    momopage.classList.add("hide");
    briyanipage.classList.add("hide");
    rollpage.classList.add("hide");
    cartpage.classList.add("hide");
    helpPage.classList.add("hide");
    searchPage.classList.add("hide");
    listProduct.classList.add("hide");
    slider.classList.add("hide");
    combo.classList.add("hide");
    offerpage.classList.add("hide");
    sidebar.classList.add("hide");
    bakreypage.classList.add("hide");
    burgerpage.classList.add("hide");
    dimsumpage.classList.add("hide")
})
bakreyimg.addEventListener('click',()=>{
    bakreypage.classList.remove("hide")
    momopage.classList.add("hide");
    briyanipage.classList.add("hide");
    rollpage.classList.add("hide");
    cartpage.classList.add("hide");
    helpPage.classList.add("hide");
    searchPage.classList.add("hide");
    listProduct.classList.add("hide");
    slider.classList.add("hide");
    combo.classList.add("hide");
    offerpage.classList.add("hide");
    sidebar.classList.add("hide");
    burgerpage.classList.add("hide");
    pizzapage.classList.add("hide");
    dimsumpage.classList.add("hide")
})