let input = document.getElementById('input')
let addButton = document.getElementById('add')
let ul = document.querySelector('ul')
let number = 0

function addLine() {
    
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li)
    li.setAttribute('name', number)
    input.value = ''

    let btn = document.createElement('button')
    let btnTwo = document.createElement('button')
    btn.appendChild(document.createTextNode('Supprimer'))
    btnTwo.appendChild(document.createTextNode('Marquer'))
    li.appendChild(btn)
    li.appendChild(btnTwo)

    btn.addEventListener('click',() => {supp(li.getAttribute('name'))})
    btnTwo.addEventListener('click', () => { mark(li.getAttribute('name')) })
    number++
    
}

function supp(a) {

    let allElements = document.getElementsByName(a);
    allElements[0].classList.add('supprimer');
}

function mark(a) {
    let allElements = document.getElementsByName(a);
    allElements[0].classList.toggle('mark');
}

function validation () {
    if (input.value != "") {
        addLine()
    }
}

addButton.addEventListener('click', validation)

