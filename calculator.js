const input=document.querySelector('input');
const btn=document.querySelectorAll('button');
const eql=document.querySelector('#btne');
const clear=document.querySelector('#btnc');
const allclear=document.querySelector('#btnac');
const theme=document.querySelector('#btnt');
const result=document.querySelector('.result');
const body=document.querySelector('body');
const oper=document.querySelector('.oper');
const oper1=document.querySelector('.oper1');
const h2=document.querySelector('h2');
const shift=document.querySelector('#btnshift');
let str="";
const len=str.length;
let col=0;
let snum=0;
const arr=['dot',9,8,7,'p',6,5,4,'s',3,2,1,'m',0,'d'];
const intial=function(a){
    const btn=document.querySelector(`#btn${a}`);
    return btn;
}
const newarr=arr.map(intial);
console.log(newarr);

for(let i=0;i<newarr.length;i++)
{
newarr[i].addEventListener('click',function(e){
    str=str.concat(e.target.value);
    console.log(str);
    input.value=str;
}
)
}
eql.addEventListener('click',function(){
   const res=String(eval(str));
   str=res;
   input.value=str;
})
allclear.addEventListener('click',function(){
   str='';
   input.value=str;
 })
 clear.addEventListener('click',function(){
    
   str=str.slice(0,-1);
   input.value=str;
  })
  theme.addEventListener('click',function(){
    if(col==0){
    result.style.background='white';
    input.style.background='white';
    body.style.background='grey';
    h2.style.color='white';
    for(let i=0;i<btn.length;i++){
      btn[i].style.background='black';
      btn[i].style.color='white';
    }
    col=1;
    }
    else{
        result.style.background='black';
        input.style.background='black';
        body.style.background='white';
        h2.style.color='black';
        for(let i=0;i<btn.length;i++){
          btn[i].style.background='white';
          btn[i].style.color='black';
        }
        col=0;
    }
   })
  
   