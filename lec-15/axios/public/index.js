//function to get comments data
console.log(axios)
async function getComment(URL){
  //how to send get request using axios
//   axios.get(URL).then((data)=>{
//     console.log(data)
//   })
//   .catch(err=>console.log(err))
try {
    let response= await axios.get(URL)
    console.log(response.data);
} catch (error) {
    console.log(error)
}

}
getComment("https://jsonplaceholder.typicode.com/comments")


//function to add new blog
addBlog("http://localhost:3000/blog","first blog","first blog desciption")
async function addBlog(URL,title,description){
  try {
    let newBlog={
    title:title,
    description:description
    }
    let response=await axios.post(URL,newBlog);
    console.log(response.data)
    
  } catch (error) {
    console.log(error)
  }

}