async function fetchUsers() {
 
    url = "https://jsonplaceholder.typicode.com/users"

    var data = await fetch(url).then(res => res.json())

    console.log(data);
    
}



fetchUsers()
















// dress = (flag) => {

//         return new Promise((resolve, reject) => {

//             console.log("Dress preparation started..");
            
//             setTimeout(() => {
//                 if(flag == true)
//                     resolve("Dress ready hai...")
//                 else 
//                     reject("Dress jal gaya hai...")
//             }, 8000)

//         })

// }


// cake = new Promise((resolve, reject) => {

//     console.log("Cake preparation started..");
    
//     setTimeout(() => {
//         resolve("Cake ready hai...")
//     }, 3000)

// })

// dress(true).then(res => {
//     console.log(res);
// }).catch(rej => {
//     console.log(rej);
// })

// cake.then(res => {
//     console.log(res);
// })