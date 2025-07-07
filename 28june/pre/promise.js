tailer = (flag) => {
    return new Promise((resolve, reject) => {
        console.log("Dress preparation started...");
        
        setTimeout(() => {
            if(flag == true)
            resolve("Dress ready hai lekar jao")
            else
            reject("Dress jal gaya I am sorry ma'am")
        }, 4000)
        
    })
}

baker = new Promise((resolve, reject) => {
    console.log("Cake preparation started...");
    setTimeout(() => {
        resolve("Cake ready hai lekar jao")
    }, 3000)

})

tailer(false).then(res => {
    console.log(res);
}).catch(rej => {
    console.error(rej)
})

baker.then(res => {
    console.log(res);
})