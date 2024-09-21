import getcartproductfromls from './getcartfromls.js';

const addToCart = (evt,id,stock)=>{

    let arrlocalstorage =getcartproductfromls();
    console.log(arrlocalstorage);
    const currProductElement = document.querySelector(`#cardvalue${id}`)
    console.log(currProductElement);
    let quantity=currProductElement.querySelector(".productquantity").innerHTML;
    let price=currProductElement.querySelector(".productactualprice").innerHTML;
    price=price.replace("₹","")
    price=price*quantity;

    arrlocalstorage.push({id,quantity,price});
    localStorage.setItem("cartProductLS", JSON.stringify(arrlocalstorage));

}
export default addToCart;