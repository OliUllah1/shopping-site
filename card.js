const addProduct=()=>{
    const productField = document.getElementById("input-field");
    const quantityField = document.getElementById("quantity-field");
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';
    displayData(product,quantity);
    saveProductToLocalStorage(product,quantity);
    
}
const displayData= (product,productQuantity)=>{
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText =`${product}:${productQuantity}`;
    ul.appendChild(li);
}

const getStorageShoppingCard =()=>{
    let card ={};
    const localCard = localStorage.getItem('card');
    if(localCard){
        card = JSON.stringify(localCard);
    }
    return card;
}

const saveProductToLocalStorage=(product,quantity)=>{
    const card = getStorageShoppingCard();
    card[product] = quantity;
    const cardStringFide = JSON.stringify(card);
    localStorage.setItem('card',cardStringFide);
}