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
    btn.appendChild(document.createTextNode('supprimer'))
    btnTwo.appendChild(document.createTextNode('modifier'))
    li.appendChild(btn)
    li.appendChild(btnTwo)

    btn.addEventListener('click',() => {supp(li.getAttribute('name'))})
    number++
    
}

function supp(a) {

    let allElements = document.getElementsByName(a);
            allElements[0].classList.add('supprimer');
}

addButton.addEventListener('click', addLine)

