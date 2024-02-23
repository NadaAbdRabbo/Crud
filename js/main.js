//GLOBAL//
var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productModel = document.getElementById("productModel");
var productDesc = document.getElementById("productDesc");
 
var productList = [];

//console.log(productModel);


function addProduct(){
    var product = {
        name: productName.value ,
        price: productPrice.value ,
        model: productModel.value,
        desc: productDesc.value
    }
    productList.push(product);
    displayProduct(productList);
    console.log(product);
}

function displayProduct(list){

    var cartona = ``;
    for (var i = 0; i < list.length; i++) {
       cartona += `<tr>
       <td>0</td>
       <td>${list[i].name}</td>
       <td>${list[i].price}</td>
       <td>${list[i].model}</td>
       <td>${list[i].desc}</td>
       <td><button class="btn btn-warning btn-small">Update</button></td>
       <td><button class="btn btn-danger btn-small">Delete</button></td>
   </tr>`;
        
    }
    document.getElementById("tBody").innerHTML = cartona;
}