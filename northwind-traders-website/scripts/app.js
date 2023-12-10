

let selectProduct;
let selectCategory;
let productsContainer, productContainerTemplate;

document.addEventListener("DOMContentLoaded", () => {
    
    allDataService = new AllDataService();

    // Set variables
    selectProduct = document.getElementById("selectProduct");
    selectCategory = document.getElementById("selectCategory");
    productContainerTemplate = document.getElementById("productContainerTemplate");
    productsContainer = document.getElementById("productsContainer");

    // Register events
    selectProduct.addEventListener("change", filterProducts);
    
    addProductList();
    addCategories();
})

async function addProductList() {
    selectProduct = document.getElementById("selectProduct");

    let products = await allDataService.productsData();

    products.forEach(product => {
        let option = new Option(product.productName, product.id);
        selectProduct.appendChild(option);
    });
}

async function addCategories() {
    let categories = await allDataService.categoriesData();

    categories.forEach(category => {
        let option = new Option(category.name, category.id);
        selectCategory.appendChild(option);
    });
}

async function filterProducts(){
    if (selectProduct.value == "00") {
        let products = await allDataService.productsData();
        let catergories = await allDataService.categoriesData();
        let productCategory;

        products.forEach(product => {
            
            catergories.forEach(category => {
                if (category.id == product.categoryId) productCategory = category.name;
            })

            displayProducts(product, productCategory);
        })
    }
}

function displayProducts(product, productCategory) {
    let card = productContainerTemplate.content.cloneNode(true);

    card.getElementById("productName").innerText = product.productName;
    card.getElementById("productCategory").innerText = productCategory;
    card.getElementById("productPrice").innerText = product.unitPrice;
     
    productsContainer.appendChild(card);
    
}

