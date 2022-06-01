//localStorage.clear()

let input = document.getElementById('input')
let addButton = document.getElementById('add')
let ul = document.querySelector('ul')
let number = 0

function addLine() {
    
    let li = document.createElement('li')

    li.appendChild(document.createTextNode(input.value))
    saveLocal(input.value)

    ul.appendChild(li)
    li.setAttribute('name', number)
    li.setAttribute('text', input.value)    

    let btn = document.createElement('button')
    btn.className = 'btn-small'
    let btnTwo = document.createElement('button')
    btnTwo.className = 'btn-small btn-danger'

    btn.appendChild(document.createTextNode('Supprimer'))
    btnTwo.appendChild(document.createTextNode('Marquer'))
    
    li.appendChild(btn)
    li.appendChild(btnTwo)

    btn.addEventListener('click',() => {supp(li.getAttribute('name'),li.getAttribute('text'))})
    btnTwo.addEventListener('click', () => { mark(li.getAttribute('name'), btnTwo) })
    number++

    input.value = ''
}

function supp(a, text) {

    let allElements = document.getElementsByName(a)

    removeLocal(text)

    allElements[0].classList.add('supprimer')
}

function mark(a,b) {

    let allElements = document.getElementsByName(a)
    allElements[0].classList.toggle('mark')

    if (b.textContent == 'Marquer') {
        b.innerHTML = 'Démarquer'

    } else if (b.textContent == 'Démarquer') {
        b.innerHTML ='Marquer'
    }  
}

function validation () {
    let modal = document.getElementById('modal')
    if (input.value != "" && input.value.length < 19) {
        addLine()
    } else {
        modal.click()
    }
}

function saveLocal(data) {
    let tab
    if (localStorage.getItem('tab') === null) {
        tab = []
    } else {
        tab = JSON.parse(localStorage.getItem('tab'))
    }
    tab.push(data)
    localStorage.setItem('tab', JSON.stringify(tab))
}

function removeLocal(data) {
    let tab
    if (localStorage.getItem('tab') === null) {
        tab = []
    } else {
        tab = JSON.parse(localStorage.getItem('tab'))
    }
 
    tab.splice(tab.indexOf(data), 1)
    localStorage.setItem('tab', JSON.stringify(tab))
}

function getLocal() {
    let tab
    if (localStorage.getItem('tab') === null) {
        tab = []
    } else {
        tab = JSON.parse(localStorage.getItem('tab'))
    }
    tab.forEach(function(element) {
        let li = document.createElement('li')

        li.appendChild(document.createTextNode(element))
        ul.appendChild(li)
        li.setAttribute('name', number)
        element =''
    
        let btn = document.createElement('button')
        btn.className = 'btn-small'
        let btnTwo = document.createElement('button')
        btnTwo.className = 'btn-small btn-danger'
    
        btn.appendChild(document.createTextNode('Supprimer'))
        btnTwo.appendChild(document.createTextNode('Marquer'))
        
        li.appendChild(btn)
        li.appendChild(btnTwo)
    
        btn.addEventListener('click',() => {supp(li.getAttribute('name'))})
        btnTwo.addEventListener('click', () => { mark(li.getAttribute('name'), btnTwo) })
        number++
    })
}

addButton.addEventListener('click', validation)
document.addEventListener('DOMContentLoaded', getLocal)
