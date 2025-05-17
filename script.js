let send = document.getElementById('send');
let list = document.getElementById('list');
let zapis = document.getElementById('zapis');

send.addEventListener('click', () => {
    let newElemnt = document.createElement('li');
    newElemnt.className = 'list-item';
    newElemnt.innerText = zapis.value;

    if (zapis.value == '') {
        alert('Вы ничего не ввели!!!!');
    } else {
        list.appendChild(newElemnt);
        zapis.value = '';
    }
});

let dark = document.getElementById('send');
dark.addEventListener('click', () => {
    header.style.backgroundColor = 'white'
})

let light = document.getElementById('day-night');
light.addEventListener('click', () => {
    header.style.backgroundColor = 'black'
})
let send = document.getElementById('send')
let list = document.getElementById('list')
let zapis = document.getElementById('zapis')
let listText = document.getElementById('list-text')
let li = document.querySelector('.list-item')
let deleteLi = document.querySelector('.edit-delete')

send.addEventListener('click', () => {
    let newElement = document.createElement('li')
    newElement.className = 'list-item'
    newElement.innerHTML = `
        <li class="list-item">
            <h1 class="list-text">${zapis.value}</h1>
        </li>
    `

    let editDelete = document.createElement('div')
    editDelete.className = 'edit-delete'
    newElement.appendChild(editDelete)

    let editBtn = document.createElement('button')
    editBtn.textContent = '✏️'

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = '🗑️'
    editDelete.appendChild(deleteBtn)

    deleteBtn.addEventListener('click', () => {
        newElement.remove()
    })

    editBtn.addEventListener('click', () => {
        let propmEdit = prompt('Укажите что хотите написать')

        newElement.innerHTML = `
            <li class="list-item">
                <h1 class="list-text">${propmEdit}</h1>
            </li>
        `

        let editDelete = document.createElement('div')
        editDelete.className = 'edit-delete'
        newElement.appendChild(editDelete)

        let editBtn = document.createElement('button')
        editBtn.textContent = '✏️'

        let deleteBtn = document.createElement('button')
        deleteBtn.textContent = '🗑️'
        editDelete.appendChild(deleteBtn)

        deleteBtn.addEventListener('click', () => {
            newElement.remove()
        })
    })

    if (zapis.value == '') {
        alert('Вы ничего не написали!!!')
    } else {
        list.appendChild(newElement)
        zapis.value = ''
    }
})
