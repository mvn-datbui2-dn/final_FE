let products  = [
    { 
        id: 1,
        name: 'GEFORE GTX 1060',
        image:'',
        manufacturer:'GIGABYTE',
        price: 1000
    },
    { 
        id: 2,
        name: 'GEFORE GTX 1060ti',
        image:'',
        manufacturer:'ASUS',
        price: 1500
    },
    { 
        id: 3,
        name: 'GEFORE GTX 1070',
        image:'',
        manufacturer:'GIGABYTE',
        price: 2000
    },
    { 
        id: 4,
        name: 'GEFORE GTX 1070ti',
        image:'',
        manufacturer:'MSI',
        price: 2500
    },
    { 
        id: 5,
        name: 'GEFORE GTX 1080',
        image:'',
        manufacturer:'MSI',
        price: 3000
    },
    { 
        id: 6,
        name: 'GEFORE GTX 1080ti',
        image:'',
        manufacturer:'ZOTAC',
        price: 3500
    },
    { 
        id: 7,
        name: 'GEFORE RTX 2060',
        image:'',
        manufacturer:'ASUS',
        price: 4000
    },
    { 
        id: 8,
        name: 'GEFORE RTX 3090',
        image:'/images/nvidia-geforce-466-77-cung-cap-hang-loat-toi-uu-khi-choi-game.jpeg',
        manufacturer:'GIGABYTE',
        price: 4500
    }
]
// localStorage.setItem('products',JSON.stringify(products));
let getProducts = JSON.parse(localStorage.getItem('products'));
//print data
function loadData(){
    let showproduct = '';
    getProducts.forEach(element => {
        showproduct += `
        <label for="" class="title">Name</label> <br>
            <input type="text" id="name" required> <br>
            <label for="" class="title">Image</label> <br>
            <input type="file" id="image" required> <br>
            <label for="" class="title">Manufacturer</label> <br>
            <input type="text" id="manufacturer"> <br>
            <label for="" class="title">Price</label> <br>
            <input type="number" id="price"> <br>
            <a href="/index.html" onclick="createData()">Create</a>    `
        id++;
    });
    document.getElementById('show-product').innerHTML= showproduct;
}
loadData();
//delete
function deleteProduct(id){
    let productsList = JSON.parse(localStorage.getItem("products"));
    for(let i = 0; i < productsList.length; i++){
        if (productsList[i].id === id) {
            productsList.splice(i,1);
        }
    }
    localStorage.setItem('products',JSON.stringify(productsList));
}
//update
function updateProduct(id){
    let productsList = JSON.parse(localStorage.getItem("products"));
    for(let i = 0; i < productsList.length; i++){
        if (productsList[i].id === id) {
            let id = productsList[i].id
            let name = productsList[i].name
            let image = productsList[i].image
            let manufacturer = productsList[i].manufacturer
            let price = productsList[i].price
            object = {
                id: id,
                name: name,
                image: image,
                manufacturer: manufacturer,
                price: price
            }
            getInfoProduct=localStorage.setItem('infoProduct',JSON.stringify(object));
        }
    }
}
