import User from "../model/userModel.js"

import bcrypt from 'bcrypt'

const signup = async (req,res)=>{
    try {
        const {name, email, password, role} = req.body


        if(!name || !email || !password || !role){
            return res.status(404).json({
                message: 'data not found for signup',
                success:false
            })
        }

        const hashpassword = await bcrypt.hash(password, 10)

        let user = await User.create({
            name, email , password : hashpassword, role
        })


        return res.status(201).json({
            message:'user created successfully...',
            success:true,
            user
        })


    } catch (error) {
         console.log(error)
            return res.status(500).json({
                message:'internal server error',
                success:false
            })

    }
}

export {signup}