let products = 
    JSON.parse(localStorage.getItem("products")).length?
    JSON.parse(localStorage.getItem("products")) :
    JSON.parse(localStorage.setItem("products",
    JSON.stringify(
        [
            {
                id: 1,
                name:"Acer",
                price:"10000"
            },
            {
                id: 2,
                name:"Lenvo",
                price:"20000"
            },
            {
                id: 3,
                name:"Dell",
                price:"30000"
            },
        ]
    )
    ) )
    document.querySelector("#productListings")
    productsListing.innerHtml = ""
    products.forEach(products=>{
        productsListing.innerHtml +=
        `<div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${products.name}</h5>
          <p class="card-text">Price R<span>${products.price}</span></p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
        `
    })