const mongoose = require ("mongoose")

const uniqueValidator = require('mongoose-unique-validator')
const userSchema=new mongoose.Schema({
    Email:{
        type:String,
        require:true,
    },
    Zip:{
        type:Number,
        require:true,

    },
    Password:{
        type:String,
        require:false,
    }
},{
    collection:"users"
}
)

userSchema.plugin(uniqueValidator, {message: "User already exist"})

module.exports=mongoose.model('User',userSchema);