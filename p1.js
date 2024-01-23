var menu =    document.querySelector("nav h1");
 var full =    document.querySelector(".full");
 var img = document.querySelector("nav img");
var flag = 0
 
menu.addEventListener("click", function(){
    if(flag == 0){
full.style.top = 0
img.style.opacity = 0
flag = 1
}
else{
    full.style.top = "-100%"
img.style.opacity = 1
    flag = 0
}
})
