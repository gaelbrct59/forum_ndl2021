main();
var background;
function main(){
    background = document.getElementById("background");
    window.addEventListener('scroll', function(e){
        parallaxItems();
    });
}


function parallaxItems() {
    var taillePage = window.pageYOffset;
    background.style.opacity = 0.80 - taillePage/600 + '' ;
    background.style.top = + taillePage +'px';
    background.style.backgroundPositionY = -+ taillePage/4 + 'px';

    document.getElementById("container").style.top = + taillePage +'px';
    document.getElementById("container").style.backgroundPositionY = -+ taillePage *0.5 + 'px';
}