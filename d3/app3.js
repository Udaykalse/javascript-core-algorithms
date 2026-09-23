function secretHolder(scr){
    return{
        getScr:function(){
            return scr;
        },
        setScr:function(newSecret){
            scr=newSecret;
        }
    };
}

const obj=secretHolder("hidden123");
console.log(obj.getScr())
obj.setScr("newSecret456")
console.log(obj.getScr())
