var count = 0;
function circle(){
    count++;
    if(count%2 != 0){
        document.getElementById("square").setAttribute('style', 'border-radius: 50%;');
    }
    else{
        document.getElementById("square").setAttribute('style', 'border-radius: 0%;');
    }
}
