const getUsers = async () => {
    url = "https://jsonplaceholder.typicode.com/users"

    var res = await fetch(url).then(res => res.json())

    console.log(res);
    
}

getUsers();

// dress = (flag) => {
    
//     return new Promise((resolve, reject) => {
//         console.log("Dress preparation started...");
        
//         setTimeout(() => {
//             if(flag == true)
//                 resolve("Dress ready hai")
//             else 
//                 reject("Aditya bhai aapka dress jal gaya hai aap extra chocolates lekar jao aur bandaid bhi")
//         }, 8000)
//     })

// }

// cake = new Promise((resolve, reject) => {
//     console.log("Cake preparation started...");
    
//     setTimeout(() => {
//         resolve("Cake ready hai")
//     }, 3000)
// })


// dress(false).then(res => {
//     console.log(res);
// }).catch(rej => {
//     console.log(rej);
// })

// cake.then(res => {
//     console.log(res);
// })
