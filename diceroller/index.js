function sub(){
    const values =document.getElementById("input").value;
    const num =document.getElementById("number");
    const image=document.getElementById("images");
    const value=[];
    const images =[];
 for( let i=0;i<values;i++){
    let random= Math.floor(Math.random()*6)+1;
    value.push(random);
     images.push(`<img src="images2/${random}.png">`);
    document.getElementById("image").innerHTML=images.join('');
    document.getElementById("number").innerHTML="DICE ROLLED:"+value.join(' , ');
    }
 }

