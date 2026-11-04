
import User from '../model/userModel.js'

const createUser = async (req,res)=>{
    try {
        const {name, age, gender, course} = req.body

        console.log(name, age, gender, course)

         



        if(!name || !age || !gender || !course){
            return res.status(404).json({
                message:'data did not found...',
                success:false
            })
        }


        const user = await User.create({
            name, age, gender, course
        })

        console.log(user)


        res.status(201).json({
            message: 'user has created successfully....',
            success:true,
            user

        })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message: 'failed to create user....',error
        })
    }
}


export {createUser}