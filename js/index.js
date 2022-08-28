const URL = 'http://localhost:3000/monsters'
let cur_page = 1

document.addEventListener('DOMContentLoaded', getData(cur_page))
document.addEventListener('DOMContentLoaded', nextPage)
document.addEventListener('DOMContentLoaded', prevPage)
document.addEventListener('DOMContentLoaded', createForm)

function getData(page) {
    newURL = URL + '/?_limit=50&_page=' + page
    fetch(newURL).then(resp=>resp.json()).then(json=>json.forEach(element => {
        renderMonster(element)
    }))
}

function renderMonster(monster) {
    const monsterContainer = document.querySelector('#monster-container')
    const newdiv = document.createElement('div')
    newdiv.id = monster.id
    const h2 = document.createElement('h2')
    h2.textContent = monster.name
    const h4 = document.createElement('h4')
    h4.textContent = "Age: "+monster.age
    const p = document.createElement('p')
    p.textContent = "Bio: "+monster.description
    newdiv.append(h2)
    newdiv.append(h4)
    newdiv.append(p)
    monsterContainer.append(newdiv)
}

function nextPage() {
    const forwardBtn = document.querySelector('#forward')
    const monsterContainer = document.querySelector('#monster-container')
    forwardBtn.addEventListener('click', ()=>{
        cur_page = cur_page+1
        monsterContainer.innerHTML = ''
        getData(cur_page)
    })
}

function prevPage() {
    const backBtn = document.querySelector('#back')
    const monsterContainer = document.querySelector('#monster-container')
    backBtn.addEventListener('click', ()=>{
        if (cur_page==1) {
            cur_page = cur_page
        } else {
            cur_page = cur_page-1
        }
        monsterContainer.innerHTML = ''
        getData(cur_page)
    })
}