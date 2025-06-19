const result=document.getElementById("result");
const images=[];
function gettemp(){
        return Number(document.getElementById("input").value);
}
function ctof(){
        let f=(gettemp()*9/5)+32;
        document.getElementById("result").innerHTML=`${f} °F`;
       images.push(`<img src ="images/ctof.png">`);
        document.getElementById("imagess").innerHTML=images.join('');

}
function ftoc(){
        let c =(gettemp() -32)*5/9;
        document.getElementById("result").innerHTML=`${c} °C `;
        images.push(`<img src ="images/images (2).png">`);
        document.getElementById("imagess").innerHTML=images.join('');
}
function ftok(){
        let k=(gettemp()-32)*5/9 +273.15;
        document.getElementById("result").innerHTML=`${k} K `;
}
function ctok(){
        let k=(gettemp()+273.15);
         document.getElementById("result").innerHTML=`${k} K `;
}
function  ktoc(){
        let c = gettemp()-273.15
        document.getElementById("result").innerHTML =`${c} C`
}

