let promise =new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Data Received")
    },2000)
})

promise.then((result)=>{
    console.log(result)
})