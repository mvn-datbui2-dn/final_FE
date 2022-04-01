//create
if(localStorage.getItem('products') == null){
    let products= [];
    localStorage.setItem('products',JSON.stringify(products));
}
function randomId(){
    return Math.floor(Math.random()*(100)) + 1;

}
function createData(){
    let productId = randomId();
    let productName = document.getElementById('name').value;
    let productImage = "/images/"+document.getElementById('image').files[0].name;
    let productManufacturer = document.getElementById('manufacturer').value;
    let productPrice = document.getElementById('price').value;
    let newProduct = {
        id: productId,
        name: productName,
        image: productImage,
        manufacturer: productManufacturer,
        price: productPrice
    }
    let productList = JSON.parse(localStorage.getItem("products"));
    productList.push(newProduct);
    localStorage.setItem("products", JSON.stringify(productList));
}


  