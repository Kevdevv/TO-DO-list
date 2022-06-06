//localStorage.clear()
let input = document.getElementById('input')
let addButton = document.getElementById('add')
let ul = document.querySelector('ul')
let number = 0

function addLine() {
    
    let li = document.createElement('li')

    li.appendChild(document.createTextNode(input.value))
    saveLocal(number,input.value,"non")

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

    let tab = JSON.parse(localStorage.getItem('tab'))
    let allElements = document.getElementsByName(a)

    allElements[0].classList.toggle('mark')

    if (b.textContent == "Marquer")
    {
        b.innerHTML = 'Démarquer'
        tab[a][2] = "oui"  
    } else if (b.textContent == 'Démarquer') {
        b.innerHTML ='Marquer'
        tab[a][2] = "non"
    }

    localStorage.clear()
    localStorage.setItem('tab', JSON.stringify(tab))
}  

function validation () {
    let modal = document.getElementById('modal')
    if (input.value != "" && input.value.length < 19) {
        addLine()
    } else {
        modal.click()
    }
}

function saveLocal(name,data,mark) {
    let tab, tab3D

    if (localStorage.getItem('tab') === null) {
        tab = []
    } else {
        tab = JSON.parse(localStorage.getItem('tab'))
    }

    tab3D = [[name], [data], [mark]]
    tab.push(tab3D)
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
        li.appendChild(document.createTextNode(element[1]))
        ul.appendChild(li)
        li.setAttribute('name', element[0])
    
        let btn = document.createElement('button')
        btn.className = 'btn-small'
        let btnTwo = document.createElement('button')
        btnTwo.className = 'btn-small btn-danger'
    
        btn.appendChild(document.createTextNode('Supprimer'))
        
        li.appendChild(btn)
        li.appendChild(btnTwo)

        if (element[2] == 'oui'){
            li.classList.add('mark')
            btnTwo.appendChild(document.createTextNode('Démarquer'))
        }
        else{
            btnTwo.appendChild(document.createTextNode('Marquer'))
        }
            
    
        btn.addEventListener('click',() => {supp(li.getAttribute('name'))})
        btnTwo.addEventListener('click', () => { mark(li.getAttribute('name'), btnTwo) })
    })
}

addButton.addEventListener('click', validation)
document.addEventListener('DOMContentLoaded', getLocal)
