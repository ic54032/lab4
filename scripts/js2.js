import data from "./data.js";
document.getElementById("logo-cart").addEventListener("click", function() {
    window.location.href = "index.html";
});
if(localStorage.getItem("sum")=="0"){
    let list=document.getElementById("lista")
    let listEl=document.createElement("li")
    listEl.textContent="Košarica je prazna"
    list.appendChild(listEl)
}

for (var i of data.categories) {    
    for (var j of i.products) {
        if(localStorage.getItem(j.name)!="0"){
            let list=document.getElementById("lista")
            let listEl=document.createElement("li")
            listEl.textContent=j.name
            listEl.style.position="relative"
            listEl.style.fontSize="22px"
            listEl.style.display="flex"
            listEl.style.justifyContent="center"
            listEl.style.alignItems="center"
            list.appendChild(listEl)
            let minus=document.createElement("span")
            minus.textContent="-"
            minus.style.backgroundColor="red"
            minus.style.borderRadius="40%"
            minus.style.display="flex"
            minus.style.justifyContent="center"
            minus.style.alignItems="center"
            minus.style.position="absolute"
            minus.style.bottom="20%"
            minus.style.left="107%"
            minus.style.padding="1px 3px"
            minus.style.height="15px"
            minus.style.fontSize="30px"
            minus.style.cursor="pointer"
            minus.id=j.name+" "+"minus"
            //console.log(span.id)
            listEl.appendChild(minus)
            let paraf=document.createElement("span")
            paraf.textContent=localStorage.getItem(j.name)
            paraf.style.display="flex"
            paraf.style.justifyContent="center"
            paraf.style.justifyContent="center"
            paraf.style.alignItems="center"
            paraf.style.position="absolute"
            paraf.style.bottom="1%"
            paraf.style.left="125%"
            paraf.id=j.name
            //console.log(paraf.id)
            listEl.appendChild(paraf)
            let plus=document.createElement("span")
            plus.textContent="+"
            plus.style.backgroundColor="red"
            plus.style.borderRadius="40%"
            plus.style.display="flex"
            plus.style.justifyContent="center"
            plus.style.alignItems="center"
            plus.style.position="absolute"
            plus.style.bottom="20%"
            plus.style.left="140%"
            plus.style.padding="1px 3px"
            plus.style.height="15px"
            plus.style.fontSize="20px"
            plus.style.fontWeight="bold"
            plus.id=j.name+" "+"plus"
            plus.style.cursor="pointer"
            plus.id=j.name+" plus"
            //console.log(plus.id)
            listEl.appendChild(plus)
            minus.addEventListener("click",function(event){
                let name=event.target.id
                name=name.substring(0,name.length-6)
                //console.log(name)
                if(localStorage.getItem(name)!="0"){
                    let num=parseInt(localStorage.getItem(name))
                    num=num-1
                    localStorage.setItem(name,num)
                    //console.log(name)
                    document.getElementById(name).innerText=localStorage.getItem(name)
                    localStorage.setItem("sum",parseInt(localStorage.getItem("sum"))-1)
                    //console.log( document.getElementById(name).innerText)

                }
            })

            plus.addEventListener("click",function(event){
                let name=event.target.id
                name=name.substring(0,name.length-5)
                console.log(name)
                let num=parseInt(localStorage.getItem(name))
                num=num+1
                localStorage.setItem(name,num)
                document.getElementById(name).innerText=localStorage.getItem(name)
                localStorage.setItem("sum",parseInt(localStorage.getItem("sum"))+1)
                //console.log( document.getElementById(name).innerText)
            })
        }
    }
}
