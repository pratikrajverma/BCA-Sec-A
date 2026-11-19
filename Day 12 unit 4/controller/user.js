import User from "../model/userModel.js"

const signup = async (req,res)=>{
    try {
        const {name, email, password, role} = req.body


        if(!name || !email || !password || !role){
            return res.status(404).json({
                message: 'data not found for signup',
                success:false
            })
        }

        let user = await User.create({
            name, email , password, role
        })


        return res.status(201).json({
            message:'user created successfully...',
            success:true,
            user
        })


    } catch (error) {

            return res.status(500).json({
                message:'internal server error',
                success:false
            })

    }
}

export {signup}