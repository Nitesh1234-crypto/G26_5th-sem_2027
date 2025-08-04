//1. create a new element using createElement function
//2. add data in that element either using .innerText or innerHtml
//3. insert new Elemnet in parent container using appendChild or append
let todos=[
   {
    id:234234,
    title:"study at 9pm"
} ,
{
    id:234234453,
    title:"play at 6pm"
}
]
// let todo={
//     id:234234,
//     title:"study at 9pm"
// }
let todoContainer = document.querySelector(".todocontainer")
function addTodo(todo){
    let li = document.createElement("li");
    li.innerHTML=`<div>
                <input type="checkbox" name="" id="">
                <h1>${todo.title}</h1>
                <div>
                    <button>❌</button>
                    <button>✏</button>
                </div>
            </div>`
    todoContainer.appendChild(li)
    
}
function showAllTodos(todos){
    todos.forEach(todo=> {
        addTodo(todo)
    });
}
showAllTodos(todos)