import data from "./data.js";
if(localStorage.getItem("prvo")===null){
    for (var i of data.categories) {    
        for (var j of i.products) {
            localStorage.setItem(j.name, "0");
        }
    }
    localStorage.setItem("sum", "0");
    localStorage.setItem("prvo", "1");
}
document.getElementsByClassName("logo")[0].addEventListener("click",function(){
    window.location.href = ".";
    for (var i of data.categories) {    
        for (var j of i.products) {
            localStorage.setItem(j.name, "0");
        }
    }
    localStorage.setItem("sum", "0");
})

var poc = data.categories.find(obj => obj.name === "Meso");
var brojac=1;
for (var j of poc.products) {
    if (localStorage.getItem(j.name) != "0") {
        //console.log(j.name+" "+localStorage.getItem(j.name))
        document.getElementsByClassName("quantity "+brojac)[0].innerText=localStorage.getItem(j.name)
        document.getElementsByClassName("quantity "+brojac)[0].style.display="flex"
    } else {
        document.getElementsByClassName("quantity "+brojac)[0].innerText=localStorage.getItem(j.name)
        document.getElementsByClassName("quantity "+brojac)[0].style.display="none"
    }
    brojac=brojac+1
}
if(localStorage.getItem("sum")!="0"){
    document.getElementsByClassName("quantity kos")[0].innerText=localStorage.getItem("sum")
    document.getElementsByClassName("quantity kos")[0].style.display="flex"
}

const list=document.getElementById("lista");
const items=list.getElementsByTagName("li");

for(let i of items){
    i.addEventListener("click",function(){
        for(let j of items){
            j.style.fontWeight="normal";
        }
    this.style.fontWeight='bold'
    var br=1
    for(let z of data.categories.find(category=>category.name==this.id).products){
        document.getElementById("slika"+br).src=z.image
        document.getElementById("par"+br).innerHTML=this.id+"<br>"+z.name
        //console.log(document.getElementById("par"+br).textContent)
        if(localStorage.getItem(z.name)=="0"){
            //console.log(z.name+" je nula")
            document.getElementsByClassName("quantity "+br)[0].style.display="none"
        }else if(localStorage.getItem(z.name)!="0"){
            //console.log(z.name+" nije nula")
            document.getElementsByClassName("quantity "+br)[0].innerText=localStorage.getItem(z.name)
            document.getElementsByClassName("quantity "+br)[0].style.display="flex"
        }
        br=br+1

        }
    document.getElementById("tren").textContent="Kategorija:"+this.id
    });
}
// for(let i of data.categories){
//     console.log(i.name)
//     for(let j of i.products){
//         console.log(i.name+" "+j.name)
//     }
    
// }

for(let i=1;i<6;i++){
    document.getElementById("prozkos"+i).addEventListener("click",function(){
        var el=document.getElementById("par"+i).innerText.substring(document.getElementById("par"+i).innerText.indexOf("\n")+1,document.getElementById("par"+i).innerText.length)
        //console.log(el)
        var num=localStorage.getItem(el)
        num=parseInt(num)+1
        localStorage.setItem("sum",parseInt(localStorage.getItem("sum"))+1)
        document.getElementsByClassName("quantity kos")[0].innerText=localStorage.getItem("sum")
        document.getElementsByClassName("quantity kos")[0].style.display="flex"
        localStorage.setItem(el,num)
        document.getElementsByClassName("quantity "+i)[0].innerText=num
        document.getElementsByClassName("quantity "+i)[0].style.display="flex"
        //console.log(localStorage.getItem(el.valueOf()))
        //console.log(localStorage)
    });

}