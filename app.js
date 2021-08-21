function updateProductNumber(product, price, isIncreasing){
    // debugger;
    const productInput = document.getElementById(product +'-number');
    // console.log(caseInput)
    
    let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    } else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    // update inputField value
    productInput.value = productNumber;
    // update total 
    const productTotal = document.getElementById( product + '-total');
    productTotal.innerText = productNumber * price;

    calculateTotal();
   
}

function getInputValue(product){
    // debugger;
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal(){
    
   const phoneToatal = getInputValue('phone') * 1219;
   const caseToatal = getInputValue('case') * 59;

   const subTotal = phoneToatal + caseToatal;
   const tax = subTotal / 10 ;
   const total = subTotal + tax;
  
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;
}

//  phone increasing and decreasing 
document.getElementById('phone-puls').addEventListener('click', function(){
    updateProductNumber('phone', 1219, true);
});

document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, false);
})

// case increasing and decreasing 
document.getElementById('case-plus').addEventListener('click', function(){
//    debugger;
    updateProductNumber('case', 59, true);  
})

document.getElementById('case-minus').addEventListener('click', function(){

    updateProductNumber('case', 59, false);    
   
})