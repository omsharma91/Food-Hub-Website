const homeQuantityToggle=(eventt,id,stock)=>{
    const currelement =document.querySelector(`#cardvalue${id}`)

    const productQuantity=currelement.querySelector(".productquantity");
    
    let quantity=parseInt(productQuantity.getAttribute("data-Quantity")) || 1;
    if(eventt.target.className==="cartincrement"){
        if(quantity<stock){
            quantity+=1;
        }
        else if(quantity===stock){
            quantity=stock
        }
    }
    if(eventt.target.className==="cartdecrement"){
        if(quantity>1){
            quantity-=1
        }
    }
    productQuantity.innerHTML=quantity
    productQuantity.setAttribute("data-quantity",quantity)
}
export default homeQuantityToggle;
