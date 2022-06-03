localStorage.clear()
//prout
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

function saveMark(mark) {
    let tabMark
    if (localStorage.getItem('tabMark') === null) {
        tabMark = []
    } else {
        tabMark = JSON.parse(localStorage.getItem('tabMark'))
    }
    tabMark.push(mark)
    localStorage.setItem('tabMark', JSON.stringify(tabMark))
}

function removeMark(mark) {
    let tabMark
    if (localStorage.getItem('tabMark') === null) {
        tabMark = []
    } else {
        tabMark = JSON.parse(localStorage.getItem('tabMark'))
    }
    tab.splice(tabMark.indexOf(mark), 1)
    localStorage.setItem('tab', JSON.stringify(tabMark))
}

function mark(a,b) {

    let tab3D = JSON.parse(localStorage.getItem('tab'))
    let allElements = document.getElementsByName(a)

    

    allElements[0].classList.toggle('mark')
        b.innerHTML = 'Démarquer'
    

        
    } if (b.textContent == 'Démarquer') {
        b.innerHTML ='Marquer'
        //localstorage = marquer
    }  

    /*

    let q = 4
let search

let inventaire = [
                     {nom: 'pommes', quantité: 2},
                     {nom: 'bananes', quantité: 0},
                     {nom: 'cerises', quantité: 5}
                   ];

let resultat = inventaire.find( search => search.nom === 'cerises');
resultat.quantité = 8
console.log(resultat.quantité);


    tableau
    name,"texte","flag"
    0,"prout","non"
    1,"youpi","oui"


    */
    
    


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

    tab3D = [[name],[data],[mark]]
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
        li.appendChild(document.createTextNode(element))
       // li.classList.add(element)
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

//----------------------TEST----------------------------------------------
/*
function getMark() {
    let tabMark
    if (localStorage.getItem('tabMark') === null) {
        tabMark = []
    } else {
        tabMark = JSON.parse(localStorage.getItem('tabMark'))
    }
    tabMark.forEach(function (element) {
        li.classList.add(element)
})
}
*/

addButton.addEventListener('click', validation)
document.addEventListener('DOMContentLoaded', getLocal)
