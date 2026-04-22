const express=require('express');
const app=express();
const users=require('./users.json')
const fs=require("fs")
app.use(express.urlencoded({extended:true}))
app.get('/api/users',(req,res)=>{
   return res.json(users)
})
app.get('/users',(req,res)=>{
   //res.send(res.json(users));
   const html=`
   <ul>
   ${users.map((user)=>`<li>${user.name}</li>`).join(' ')}
   </ul>
   `
   res.send(html);
})
//dynamic parameter in a route/url
app.delete('/users/:id',(req,res)=>{
 const id=Number(req.params.id);
 const users=JSON.parse(fs.readFileSync('users.json','utf-8'))
 const filtered=users.filter(user=>user.id!==id);
 fs.writeFileSync('users.json',JSON.stringify(filtered,null,2))
 res.json({message:"user deleted"})

//  console.log(id);
//  const userwise=users.find(user => user.id==id)
//  return res.json(userwise);
})

app.post('/users',(req,res)=>{
    const data=req.body
    users.push(data);
    //  fs.writeFile("users.json", JSON.stringify(data)+"\n", (err)=>{
    //     if (err){
            
    //     }
  //   }
 
//)
})

app.listen(3000,()=>{
    console.log("http://localhost:3000");
})