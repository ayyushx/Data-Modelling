import mongoose from "mongoose"

//Syntax to define a schema in mongoose
const Users = new mongoose.Schema({
    username : {
        type : String,
        required : [true, "Required Field"], // true and false condition
        unique : true
    },
    email : {
        type : String,
        required : [true, "Required Field"],
        unique : true
    },
    password : {
        type : String,
        required : true,
        unique : true
    }
});

export const User = mongoose.model("User", Users);