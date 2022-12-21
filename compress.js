 btn=document.querySelector('#button');
 demo=document.querySelector('#demo');
width=document.querySelector('#width');
height=document.querySelector('#height');
input=document.querySelector('.image input');
upload=document.querySelector('.image img');
ratio=document.querySelector('#ratio');
Quality=document.querySelector('#Quality');
let valratio;
const load=(e) =>{
const file=e.target.files[0];
upload.src=URL.createObjectURL(file);
upload.addEventListener("load",() =>{
    height.value=upload.naturalHeight;
    width.value=upload.naturalWidth;
    valratio=upload.naturalWidth/upload.naturalHeight;
});
}
input.addEventListener("change",load);
upload.addEventListener("click",() =>input.click());

width.addEventListener("keyup",()=>{
    const newheight=ratio.checked?width.value/valratio:height.value;
    height.value=Math.floor(newheight);
});


btn.addEventListener("click",()=>{
var name=prompt("Enter Image name");
const canvas=document.createElement("canvas");
const ctx=canvas.getContext("2d");
const a=document.createElement("a");

const imageQuality=Quality.checked ?0.7:1.0;
canvas.height=height.value;
canvas.width=width.value;

ctx.drawImage(upload,0,0,canvas.width,canvas.height);
// document.body.appendChild(canvas);


a.href=canvas.toDataURL("image/jpeg",imageQuality);
a.download=new Date().getTime();

a.download=name+".jpeg";

a.click();
});