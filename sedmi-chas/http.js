// JSON - javascript object notation - js objekt transformiran vo tekstualen format

// { name : 'Mario' }  ===> { 'name': 'Mario' }

// JSON.stringify(Object) // konvertira od objekt vo json
// JSON.parse(json) // konvertira od json string vo plain object

fetch('https://jsonplaceholder.typicode.com/posts/3') // end point - krajna/pristapna tocka
    .then(response => response.json())   // ovie se callbacks-arrow functions
    .then((data) => {
        console.log(data)})
        .catch(error => console.log(error))
// async function getTodos () {
// const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
// const data = await response.json()
// console.log(data)
// }

// getTodos()
