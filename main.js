const productcontainer = document.querySelector("#container");
const productTemplate = document.querySelector("#producttemplate");
import homeQuantityToggle from './homeQuantityToggle.js'
import addToCart from './addToCart.js'

const fetchProducts = async () => {
    const response = await fetch("./api/product.json");
    if (!response.ok) {
      return("Network response was not ok");
    }
    return await response.json(); // Return the parsed JSON data
};

const showProductContainer = async () => {
  const products = await fetchProducts(); // Await the fetch operation
  if (!products) {
    return false; // Stop if there are no products
  }
  console.log(products);
  products.forEach((products) => {
    const {name, category, price ,description,stock,img,id} = products;

    // Clone the template content
    const productClone = document.importNode(productTemplate.content, true);

    // Fill the template with product data
    productClone.querySelector(".productname").textContent = name;
    productClone.querySelector(".productactualprice").textContent = `₹${price}`;
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productimg").src = img;
    productClone.querySelector(".realprice").textContent = `₹${
        price * 4
    }`;
    productClone.querySelector(".productdescription").textContent = description;
    productClone.querySelector("#cardvalue").setAttribute('id',`cardvalue${id}`);
    productClone.querySelector(".productstock").textContent = stock;
    productClone.querySelector(".stockelement").addEventListener('click',(evt)=>{
        homeQuantityToggle(evt,id,stock);
    })
    productClone.querySelector(".addtocart").addEventListener('click',(evt)=>{
      addToCart(evt,id,stock);
  })
    // Append the cloned product element to the container
    productcontainer.append(productClone);
  });
};



//color change on veg and non veg basis
let colorchange = async()=>{
  await showProductContainer();

  const categoryElements=document.getElementsByClassName("category")


  if(categoryElements.length==0){
    console.error("No elements found with class 'category'");
    return;
  }
  for(let i=0; i<categoryElements.length; i++){

    const categoryElement=categoryElements[i];
  

    if (categoryElement && categoryElement.textContent.trim() === "Veg Roll") {
      categoryElement.style.backgroundColor = "green"; // Change background to green
    } else if (categoryElement) {
      categoryElement.style.backgroundColor = "red"; // Change background to red
    } else {
      console.error("Element is undefined");
    }
  }

}


//stock element




colorchange();
/*
let colorchange = async () => {
  await showProductContainer(); // Ensure products are loaded before changing color
  
  // Get all elements with the class 'category'
  const categoryElements = document.getElementsByClassName("category");
  
  if (categoryElements.length === 0) {
    console.error("No elements found with class 'category'");
    return;
  }

  // Loop through all category elements
  for (let i = 0; i < categoryElements.length; i++) {
    const categoryElement = categoryElements[i];

    // Check if the text content is 'Veg Roll'
    if (categoryElement && categoryElement.textContent.trim() === "Veg Roll") {
      categoryElement.style.backgroundColor = "green"; // Change background to green
    } else if (categoryElement) {
      categoryElement.style.backgroundColor = "red"; // Change background to red
    } else {
      console.error("Element is undefined");
    }
  }
};

colorchange();
*/