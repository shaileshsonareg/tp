tailer = (flag) => {
    return new Promise((resolve, reject) => {
    console.log("Dress preparation started...");
    
    setTimeout(() => {
        if(flag == true)
        resolve("Dress ready hai lekar jao")
        else
        reject("Dress jal gaya hai aap gaali khane ke liye ready raho")
    }, 8000)
})

}

baker = new Promise((resolve, reject) => {
    console.log("Cake preparation started...");
    
    setTimeout(() => {
        resolve("Cake ready hai lekar jao")
    }, 3000)
})

tailer(true).then((res) => {
    console.log(res);
}).catch((rej) => {
    console.warn(rej);
})

baker.then((res) => {
    console.log(res);
})
















// console.log("Hello World");

// setTimeout(() => {
//     console.log("Timeout");
    
// }, 0)

// Promise.resolve().then(() => {
//     console.log("Promise");
    
// })

// console.log("Bye World");
