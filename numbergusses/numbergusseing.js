let btn =document.getElementById("submit");
attempt=0;
 const randomNumber = Math.floor(Math.random() * 50) + 1;
btn.onclick =function(){
    do{
    const gusses=document.getElementById("gusses-input").value;
    let gusses1=Number(gusses);
    if(gusses1<randomNumber){
        document.getElementById("show").innerHTML="too low";
    }
    else if(gusses>randomNumber){
        document.getElementById("show").innerHTML="too high";
    }
    else{
        document.getElementById("show").innerHTML="you gussed it right";
    }
    attempt++;
    document.getElementById("attempt").innerHTML="you have made "+attempt+" attempts";
    }while(gusses1!=randomNumber);
    document.getElementById("gusses-input").value="";
}
