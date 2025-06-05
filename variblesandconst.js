let count=0;
document.getElementById("inc").onclick=function increase(){
    count++;
    document.getElementById("count").innerHTML=count;
}
document.getElementById("rest").onclick=function reset(){
    count=0;
    document.getElementById("count").innerHTML=count;
}
document.getElementById("dec").onclick=function decrease(){
    count--;
    document.getElementById("count").innerHTML=count;
}