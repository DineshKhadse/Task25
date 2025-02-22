function myFunction(divId) {
  //alert(divId);
  const elem = document.getElementsByClassName("box");
 // alert(elem[0]);
  for (let i = 0; i < elem.length; i++) {
  elem[i].style.height= "30px";
  elem[i].style.border="solid 1px pink";
  elem[i].style.overflow="hidden";
}
 //elem[0].style.height= "30px";
 //elem[1].style.height= "30px";
 //elem[2].style.height= "30px";
 // elem.style.border="solid 1px pink";
//  elem.style.overflow="hidden";
  const element = document.getElementById(divId);
  //alert(element);
  element.style.height = "auto";
  element.style.border= "solid 5px pink";
}


function check(price) { 
var PriceLabel="Total : "+ price;
// alert(PriceLabel);
  document.getElementById("box4-span1").innerHTML=PriceLabel;
  
  
}