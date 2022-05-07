const mongoose=require("mongoose")

const connect=()=>{
    mongoose.connect(
        "mongodb+srv://freshly:freshly@cluster0.pt3iq.mongodb.net/freshly?retryWrites=true&w=majority"
    )
}
module.exports=connect;