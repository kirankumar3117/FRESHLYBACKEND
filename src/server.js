const app=require("./index")

const connect=require("./configue/db")

const PORT=5000;
app.listen(PORT,async()=>{
    try{
        await connect();
        console.log("working on autho")
    }
    catch(err){
        console.log(err.message)
    }
})
