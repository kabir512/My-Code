let container = document.getElementById('container');
let input = document.getElementById('toDo');
let todo_container = document.getElementById('todo_container')

const todos = JSON.parse(localStorage.getItem('todos')) || []

for (var i = 0; i < todos.length; i++) {
    addTodo(todos[i])
  }

  input.addEventListener('click', function () {
    addTodo()
  })
  

function addTodo (txt){
    let div = document.createElement('div')
    div.className = 'div'

    let divTitleEle = document.createElement('h3')
    divTitleEle.className = 'h3'
    divTitleEle.innerHTML = txt? txt :  input.value;
    input.value = ""

    let divBtnEle = document.createElement('button')
    divBtnEle.className = 'button'
    divBtnEle.innerText = 'delete'
    divBtnEle.onclick = function (){
        div.remove()
    }
div.appendChild(divTitleEle)
div.appendChild(divBtnEle)

todo_container.appendChild(div)
  if (!txt) {
    input.value = ''
  }
}

function addTodoToStorage (txt) {
  todos.push(txt)
  localStorage.setItem('todos', JSON.stringify(todos))
}

