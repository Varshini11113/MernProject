// function fetchData() {
//     return new Promise((resolve, reject) => { //constructor
//         fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
            //fetch is used for api call
            // Fetch(network call) always returns a promise, the promise 
            // can either be resolved or not resolved
//             console.log(response)
//             resolve(response.json())//convert to json
//         })
//     });
// }

// fetchData()
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// async function fetchData() {
//     //to handle errors in async function give all the await statements in try block
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//         //because of await the next line of code will wait until the fetch runs
//         const json = await response.json() //returns json object, sometimes it can also be promise
//         //so we give await for response too.
//         return json //will be returned to fetch data
//     } catch (err) {
//         console.error(err)
//     }
// }

// //the global function will not wait for anything
// fetchData().then(res => console.log("res", res))

const resolveToVal = val => new Promise(res => 
    setTimeout(() => res(val), Math.random() * 1000))

(async() => {
    const max = 5
    let count = 0

    const promises = [...new Array(max)]
        .map((_, i) => resolveToVal(i)
            .then(() => loadingBarStatus(++count, max)))

    const result = await Promise.all(promises)

    console.log(result) // [undefined, undefined, undefined, undefined, undefined]
})()