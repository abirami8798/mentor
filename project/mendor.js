const products=[
{Name:'suresh',Timing:'9am-6pm',technologies:'{java,python,angularjs}',rating:5,experiance:5,number:7094876086,email:'suresh@gmail.com'},
{Name:'susma',Timing:'10am-7pm',technologies:'{java,python,angularjs,c}',rating:4,experiance:3,number:7094876099,email:'susma2@gmail.com'},
{Name:'rubika',Timing:'9am-6pm',technologies:'{java,python,angularjs,nodejs}',rating:4,experiance:2,number:7094878809,email:'rubika98@gmail.com'},
{Name:'mona',Timing:'11am-8pm',technologies:'{java,python,angularjs,c++}',rating:5,experiance:1,number:9494876086,email:'mona89@gmail.com'},
{Name:'sindhu',Timing:'9am-6pm',technologies:'{java,python,angularjs}',rating:3,experiance:4,number:9894876086,email:'sindhu4@gmail.com'},


];
const renderProducts=function(products)

{

let tabEl=document.querySelector("#prod-tab");

products.forEach(function(product){

let tr1=document.createElement("tr");

let td1=document.createElement("td");

td1.textContent=product.Name;

tr1.appendChild(td1);
let td2=document.createElement("td");

td2.textContent=product.Price;

tr1.appendChild(td2);
let td3=document.createElement("td");

td3.textContent=product.Active;

tr1.appendChild(td3);
let td4=document.createElement("td");

td4.textContent=product.Launch;

tr1.appendChild(td4);
let td5=document.createElement("td");

td5.textContent=product.Category;

tr1.appendChild(td5);
let td6=document.createElement("td");

td6.textContent=product.Free_Delivery;

tr1.appendChild(td6);

let td7=document.createElement("td");

let editLink=document.createElement('a');

editLink.setAttribute('id','link1');

editLink.href="practicecheck(adminedit).html?"+"name="+product.Name+"&price="+product.Price+"&active="+product.Active+"&dataofLaunch="+product.Launch+"&category="+product.Category+"&freeDelivery="+product.Free_Delivery;

editLink.textContent="Edit";

td7.appendChild(editLink);

tr1.appendChild(td7);

tabEl.appendChild(tr1);


})
document.querySelector('#link1').addEventListener('click',function(){

console.log(product);

})

}


renderProducts(products);