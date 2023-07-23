"use strict"

const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
}
function optimizer(data){
    const updatedPriceData = {};
    for (const key in data) {
        const productName = key.toLowerCase();
        const price = parseFloat(data[key]).toFixed(2); 
        updatedPriceData[productName] = Number(price);
    }
    return updatedPriceData;
}
let updatedPriceData = optimizer(priceData);
    
console.log('lesson 2:', updatedPriceData);