import  express from "express"
import {client} from "@repo/db/client"
const app=express();
app.use(express.json());
app.get("/",async(req,res)=>{
    res.send("gg");
})
app.post("/signup",async(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const user=await client.user.create({
        data:{
            username:username,
            password:password
        }
    })
    res.json({
        message:"SignUp Successfully",
        id:user.id,
    })
})
app.listen(3030);