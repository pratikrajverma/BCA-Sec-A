import User from "../model/userModel.js"

import bcrypt from 'bcrypt'

import jwt from 'jsonwebtoken'


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

const login = async (req,res)=>{
    try {
        const {email, password} = req.body   //it is use to take data from user ( frontend......)

        if(!email || !password){            //it is use to verify data ........
            return res.status(404).json({
                message:'data not found for login',
                success:false
            })
        }


        let user = await User.findOne({email})

        if(!user){
            return res.status(401).json({
                success:false,
                message:'invalid email id , Try again'
            })
        }


        if(await bcrypt.compare(password, user.password)){


          const token =   await jwt.sign(
                {
                    userId: user._id,
                    role : user.role
                },
                'bcaSecA',
                {
                    expiresIn : '2h'
                }
            )



            return res.status(200).json({
                message:'login successfully...',
                success:true,
                user,
                token
            })
        }else{
            return res.status(401).json({
                success:false,
                message : 'invalid password'
            })
        }




    } catch (error) {
        console.log(error)
        
        return res.status(500).json({
            message:'internal server error',
            success:false
        })
    }
}





export {signup,login}