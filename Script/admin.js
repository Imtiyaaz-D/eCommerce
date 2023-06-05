let products = JSON.parse(localStorage.getItem('products'))
let dataRow = document.querySelector('#data-row')
products.forEach(products =>{
    dataRow.innerHTML +=
    `<tr>
    </tr>
    `
})