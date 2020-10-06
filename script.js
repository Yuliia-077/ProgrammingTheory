const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
var count = 0;
var count2 = 0;

function newTodo() {
    var task = prompt('Create new TODO');
    if(task!="" && task!=null){
        count += 1;
        itemCountSpan.innerText = itemCountSpan.textContent = count;
        count2 = count;
        uncheckedCountSpan.innerText = uncheckedCountSpan.textContent = count2;
        
        var elemText=document.createTextNode(task);
        const input=document.createElement('input');
        input.type="checkbox";

        const btndel=document.createElement("button");
        const icon=document.createElement("i");
        icon.classList.add("fas", "fa-trash-alt");
        btndel.appendChild(icon);
        
        var elemLi = document.createElement("li");
        elemLi.append(input);
        elemLi.appendChild(elemText);
        elemLi.append(btndel);
            
        list.appendChild(elemLi);
        
        itemChange(input);
        listenDeleteTodo(btndel,input);
    }
}


function listenDeleteTodo(element, inp) {
    element.addEventListener("click", (event) => {
        element.parentElement.remove();
        event.stopPropagation();
        if(!inp.checked)
            {
               count2 -=1; 
            }
        count -= 1;
        itemCountSpan.innerText = itemCountSpan.textContent = count;
        uncheckedCountSpan.innerText = uncheckedCountSpan.textContent = count2;
    });
}

function itemChange(element){
    element.addEventListener("change", (event) => {
        if (element.checked) {
            count2-=1;
        } else {
            count2+=1;
        }
        uncheckedCountSpan.innerText = uncheckedCountSpan.textContent = count2;
    });
}
