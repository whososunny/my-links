window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").classList.add("hide");

},1800);

});

const text=[
"Building Skills.",
"Creating Value.",
"Finance Enthusiast."
];

let i=0;
let j=0;
let current="";
let erase=false;

function type(){

const typing=document.getElementById("typing");

if(!erase){

current=text[i].substring(0,j++);

typing.textContent=current;

if(j>text[i].length){

erase=true;

setTimeout(type,1200);

return;

}

}else{

current=text[i].substring(0,j--);

typing.textContent=current;

if(j<0){

erase=false;

i=(i+1)%text.length;

}

}

setTimeout(type,80);

}

type();
