for(var i=1;i<=2;i++){
    (function(idX){
        setTimeout(function(){
            console.log(idX)
        },100)
    })(i);
}