let totalamount = document.querySelectorAll(".totalamount");
let amountbyitem = document.querySelectorAll("input[name=txtprice]");
let totalitem = document.querySelectorAll(".totalQuantity");
let itemcountbyeachprod = document.querySelectorAll("input[name=item]");

document.querySelectorAll(".bi-cart-plus-fill").forEach(item =>{
   item.addEventListener("click",function(){
      removeitemfromcart(item);

   })
})

document.querySelectorAll(".bi bi-cart-dash").forEach(item =>{
   item.addEventListener("click",function(){
      additemtocart(item);

   })
})

function additemtocart(item){
   
   let closetTr = item.closest("td").parentNode;
   let closestprice = closetTr.cell[2].querySelector("input[name=txtprice]").value;
   let closestTotalprice = closetTr.cell[2].querySelector("input[name=totaltxtprice]");

   let itemcount = item.closest("td").querySelector("input[name=item]");

   itemcount.value = parseFloat(itemcount.value) + 1;

   closestTotalprice.value = parseFloat(closestprice) * parseFloat(itemcount.value)
   
   let temptotalamount = 0;
   amountbyitem.forEach(item => {
      temptotalamount = temptotalamount + parseFloat(item.value)
      
   })
   totalamount.forEach(item =>{
      totalamount.innerHTML = temptotalamount;
   })
   let tempitemcount = 0;
   itemcountbyeachprod.forEach(item =>{
      tempitemcount = tempitemcount + parseFloat(item.value);
   })
   totalitem.innerHTML = tempitemcount;

}

function removeitemfromcart(item){
   
   let closetTr = item.closest("td").parentNode;
   let closestprice = closetTr.cell[2].querySelector("input[name=txtprice]").value;
   let closestTotalprice = closetTr.cell[2].querySelector("input[name=totaltxtprice]");

   let itemcount = item.closest("td").querySelector("input[name=item]");

   itemcount.value = parseFloat(itemcount.value) - 1;

   closestTotalprice.value = parseFloat(closestprice) * parseFloat(itemcount.value)
   
   let temptotalamount = 0;
   amountbyitem.forEach(item => {
      temptotalamount = temptotalamount + parseFloat(item.value)
      
   })
   totalamount.forEach(item =>{
      totalamount.innerHTML = temptotalamount;
   })
   let tempitemcount = 0;
   itemcountbyeachprod.forEach(item =>{
      tempitemcount = tempitemcount + parseFloat(item.value);
   })
   totalitem.innerHTML = tempitemcount;

}