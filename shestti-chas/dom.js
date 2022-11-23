// function get (param) {
//     return document.getElementById(param)
// }   <--- so ova vaka se prai site document.getElementById da e skrateno da pisuvas samo get
const buttonElement = document.getElementById('test')
console.log(buttonElement)

function changeText() {
//event handler
const paragraph = document.getElementById('text')
paragraph.innerText = paragraph.innerText + ' Mario'
}

function createText () {
const span = document.createElement('span');
span.innerText = 'Krajchevski'
span.id = 'dynamicSpan'
document.body.appendChild(span)
} 

function removeChild() {
    document.body.removeChild(document.getElementById('dynamicSpan'))
}

buttonElement.style = 'color: blue'

//onclick event
buttonElement.onclick = () => {
    changeText()
    createText()
};

