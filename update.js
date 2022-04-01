let getProducts = JSON.parse(localStorage.getItem('products'));
let infoProduct = JSON.parse(localStorage.getItem('infoProduct'))
console.log(infoProduct);
function loadData(){
    let showproducts = '';
        showproducts = `
        <label for="" class="title">Name</label> <br>
        <input type="text" id="name" value="`+infoProduct.name+`" required> <br>
        <label for="" class="title">Image</label> <br>
        <input type="file" id="image" value="`+''+infoProduct.image+`" required> <br>
        <label for="" class="title">Manufacturer</label> <br>
        <input type="text" id="manufacturer" value="`+infoProduct.manufacturer+`"> <br>
        <label for="" class="title">Price</label> <br>
        <input type="number" id="price" value="`+infoProduct.price+`"> <br>
        <a href="/index.html" onclick="createData()">Update</a>`
    document.getElementById('data-product').innerHTML= showproducts;
}
loadData();