import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : 'String',
        require:true
    },
    age: {
        type: 'Number',

    },
    gender : {
        type:'String'
    },
    course : {
        type:'String'
    }
})

const User = mongoose.model('User', userSchema)
export default User




