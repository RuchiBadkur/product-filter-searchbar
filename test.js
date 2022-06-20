function searchfun(){
    let searchBox = document.getElementById("search").value.toUpperCase();
    let storeItems = document.getElementById("product-list");
    let product = document.querySelectorAll(".product");
    let productName = storeItems.getElementsByTagName("h2");
    
    for(var i = 0; i < productName.length; i++){
        let match = product[i].getElementsByTagName('h2')[0];

        if(match){
            let textValue = match.textContent || match.innerHTML

            if (textValue.toUpperCase().indexOf(searchBox) > -1 ){
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";
            }
        }
    }
}
