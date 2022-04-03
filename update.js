let infoProduct = JSON.parse(localStorage.getItem('infoProduct'));
function loadData(){
    let showproducts = '';
        showproducts = `
        <input type="hidden" id="id" value="${infoProduct.id}" required>
        <label for="" class="title">Name</label> <br>
        <input type="text" id="name" value="${infoProduct.name}" required> <br>
        <label for="" class="title">Image</label> <br>
        <input type="file" id="image"  onchange="newPicture()" required> <br>
        <img src="${infoProduct.image}" id="showimage" class="image-product"><br>
        <label for="" class="title">Manufacturer</label> <br>
        <input type="text" id="manufacturer" value="${infoProduct.manufacturer}"> <br>
        <label for="" class="title">Price</label> <br>
        <input type="number" id="price" value="${infoProduct.price}"> <br>
        <a href="/index.html" onclick="updateData()">Update</a>`
    document.getElementById('data-product').innerHTML= showproducts;
}
loadData();
// change picture
function newPicture(){
    let oldPic = "/images/"+document.getElementById('image').files[0].name;
    document.getElementById("showimage").src = oldPic;
}
//update data
function updateData(){
    let productId =  document.getElementById('id').value
    let productName = document.getElementById('name').value;
    let productImage = "/images/"+document.getElementById('image').files[0].name;
    let productManufacturer = document.getElementById('manufacturer').value;
    let productPrice = document.getElementById('price').value;
    let getProducts = JSON.parse(localStorage.getItem('products'));
    objIndex = getProducts.findIndex((obj => obj.id == productId))
    getProducts[objIndex].name = productName;
    getProducts[objIndex].image = productImage;
    getProducts[objIndex].manufacturer = productManufacturer;
    getProducts[objIndex].price = productPrice;
    localStorage.setItem("products", JSON.stringify(getProducts));
}
