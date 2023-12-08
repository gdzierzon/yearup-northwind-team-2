

let selectProduct;
let selectCategory;

document.addEventListener("DOMContentLoaded", () => {
    
    allDataService = new AllDataService();
    
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
    selectCategory = document.getElementById("selectCategory");

    let categories = await allDataService.categoriesData();

    categories.forEach(category => {
        let option = new Option(category.name, category.id);
        selectCategory.appendChild(option);
    });
}