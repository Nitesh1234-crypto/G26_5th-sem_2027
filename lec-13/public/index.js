let userContainer= document.querySelector(".user-container")
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
getUsersData("http://localhost:3000/users")