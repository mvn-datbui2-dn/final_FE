//create data begin
let products  = [
    { 
        id: 1,
        name: 'GEFORE GTX 1060',
        image:'/images/21507_20160817154240_big.png',
        manufacturer:'GIGABYTE',
        price: 1000
    },
    { 
        id: 2,
        name: 'GEFORE GTX 1060ti',
        image:'/images/20616_anphatpc_vga_asus_geforce_gtx_1060_6gb_rog_strix_strix_gtx1060_o6g_gaming_1.png',
        manufacturer:'ASUS',
        price: 1500
    },
    { 
        id: 3,
        name: 'GEFORE GTX 1070',
        image:'/images/giga1.png',
        manufacturer:'GIGABYTE',
        price: 2000
    },
    { 
        id: 4,
        name: 'GEFORE GTX 1070ti',
        image:'/images/24160_vga_msi_geforce_gtx_1070ti_gaming_8gb_1.png',
        manufacturer:'MSI',
        price: 2500
    },
    { 
        id: 5,
        name: 'GEFORE GTX 1080',
        image:'/images/product_7_20180417114054_5ad56cc69030c.png',
        manufacturer:'MSI',
        price: 3000
    },
    { 
        id: 6,
        name: 'GEFORE GTX 1080ti',
        image:'/images/74457dcae5144c76af6af27d9f43ceeb.jpg',
        manufacturer:'ZOTAC',
        price: 3500
    },
    { 
        id: 7,
        name: 'GEFORE RTX 2060',
        image:'/images/1-800x600.jpg',
        manufacturer:'ASUS',
        price: 4000
    },
    { 
        id: 8,
        name: 'GEFORE RTX 3090',
        image:'/images/34419_1.png',
        manufacturer:'GIGABYTE',
        price: 4500
    }
]
// localStorage.setItem('products',JSON.stringify(products));
let getProducts = JSON.parse(localStorage.getItem('products'));
//print data
function loadData(product){
    let showproduct = '';
    let id = 1;
    for(let i = 0; i < product.length; i++){
        showproduct += `
        <tr>
            <td class="product-item">${id}</td>
            <td class="product-item">${product[i].name}</td>
            <td class="product-item product-img"><img src="${product[i].image}"  class="product-image" alt="no image"></td>
            <td class="product-item">${product[i].manufacturer}</td>
            <td class="product-item">${product[i].price}</td>
            <td class="product-item"><a href="/updateProduct.html"  onclick="updateProduct(${product[i].id})" ><i class="fa-solid fa-pen"></i></a></td>
            <td class="product-item"><a href="/index.html" onclick="deleteProduct(${product[i].id})" ><i class="fa-solid fa-trash-can"></i></td>
        </tr>`
        id++;
    };
    document.getElementById('show-product').innerHTML= showproduct;

}
loadData(getProducts);
//delete
function deleteProduct(id){
    confirm('Are you sure you want to delete this product?')
    if (confirm('Are you sure you want to delete this product?') == false) {
        return false;
    } else {  
    for(let i = 0; i < getProducts.length; i++){
        if (getProducts[i].id === id) {
            getProducts.splice(i,1); //get key i and delete one key i
        }
    }
    localStorage.setItem('products',JSON.stringify(getProducts));
}
}
//update
function updateProduct(id){
    for(let i = 0; i < getProducts.length; i++){
        if (getProducts[i].id === id) {
            object = getProducts[i]
            getInfoProduct=localStorage.setItem('infoProduct',JSON.stringify(object));
        }
    }
}
//search by name
const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup', (search) =>{
    const searchString = search.target.value.toLowerCase();
    const filteredProduct = getProducts.filter((product) => {
    return product.name.toLowerCase().includes(searchString)  
    })
    // console.log(filteredProduct);
    loadData(filteredProduct);
}); 