let button = document.getElementById('button')
let list = document.getElementById('list')
let input= document.getElementById('int')

let todolist = [];

button.addEventListener('click',()=>{
    todolist.push(input.value)
    addlist(input.value)
    input.value=''
})

function addlist(todo){
    let para = document.createElement('li');
    para.innerText = todo;
    list.appendChild(para)
    para.addEventListener('click',()=>{
        para.style.textDecoration = 'line-through'
        remove(todo)
    })
    para.addEventListener('dblclick',()=>{
        list.removeChild(para)
        remove(todo)
})
}

function remove(todo){
    let index = todolist.indexOf(todo)
    if(index>-1)
    todolist.splice(index,1)
}