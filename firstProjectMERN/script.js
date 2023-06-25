async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const json = await response.json() 
        return json
    } catch (err) {
        console.error(err)
    }
}

function display1(data){
    const answer = document.getElementById("new");
    answer.innerHTML = "";
    for (const item of data){
        const itemDiv = document.createElement("div")
        itemDiv.textContent = JSON.stringify(item);
        answer.appendChild(itemDiv);
    }
}

function myFunc(){
    fetchData().then((data) => {
        display1(data);
    })
}

// function fetchDataEvent(){
//     const ans = document.getElementById("new");
//     console.log(fetchData())
//     fetchData().then(data => {
//         var table = '<table border=1>'
//         var col = '';
//         for (var i in data){
//             col += `<td> ${data[i]} </td>`
//         }
//         table += `<tr> ${col} </tr>`
//         table += '</table>'
//         ans.innerHTML = table;
//     })
// }
