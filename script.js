let heart_btn=document.getElementsByClassName("heart_btn")
let plus_btn=document.getElementsByClassName("plus-btn")
let Quant=document.getElementsByClassName("Quant")
let minus_btn=document.getElementsByClassName("minus-btn")

for (let  i= 0; i < heart_btn.length; i++) {
     heart_btn[i].addEventListener("click",function(){
        if (heart_btn[i].style.color=="red"){
            (heart_btn[i].style.color="black")
        }
        else 
        (heart_btn[i].style.color="red")
    })
        
    plus_btn[i].addEventListener("click",function(){
        Quant[i].value=Number(Quant[i].value)+1
    })
    minus_btn[i].addEventListener("click",function(){
        if(Number(Quant[i].value>0)){
            Quant[i].value=Number(Quant[i].value)-1
        } 
    })
        
    }
    

