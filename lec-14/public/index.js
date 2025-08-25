let userContainer= document.querySelector(".user-container")
let registerform= document.querySelector(".register");
console.log(registerform);
let nameInput=document.querySelector(".name");
let userNameInput=document.querySelector(".username");
console.log(userContainer)
function getUsersData(URL){
     fetch(URL)
     .then((res)=>{
        console.log(res)
        return res.json()
        
     })
     .then((data)=>{
        console.log(data)
        data.forEach(user => {
            displayUser(user)
        });
     })
     .catch((err)=>{
        console.log(err)
     })
}
function displayUser(user){
    //user---> {id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', address: {…}, …}
    let li = document.createElement("li");
    li.setAttribute("class","user-item")
    li.innerHTML=`    <div class="user-info">
                <h1>${user.name}</h1>
                <p>${user.username}</p>
            </div>
            <div class="user-btn">
                <button class="user-delete">❌</button>
                <button class="user-edit">✏</button>
            </div>`
    userContainer.appendChild(li)
}
getUsersData("http://localhost:3002/users")


function addUser(name,username,URL){
    let data={
        name:name,
        username:username
    }
    fetch(URL,{
        
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "content-type":"application/json"
        }
    })
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data)
    })
}
registerform.addEventListener("submit",function(e){
    e.preventDefault();
 let name=nameInput.value ;
 let username=userNameInput.value;
 addUser(name,username,"http://localhost:3002/adduser")
})