import mongoose from "mongoose";

const connectDB = async ()=>{

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/BCASecAUnit4')
        console.log('mongodb has connected successfully.....')
    } catch (error) {
        console.log('failed to connect to database.....',error)
    }
}

export default connectDB

