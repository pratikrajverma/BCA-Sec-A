import jwt from 'jsonwebtoken'

const auth = async (req,res,next)=>{
    try {

        let token 

        if(req.headers.authorization) {

            token  = req.headers.authorization.split(' ')[1]
        }else {
            return res.status(404).json({
                message:'token not found',
                success:false
            })

        }

        console.log(token)


        const payload = await jwt.verify(token , 'bcaSecA' )

        if(!payload){
            return res.status(401).json({
                message:"you are not login .....",
                success:false

            })
        }

        req.role = payload.role

        req.userId = payload.userId


        next()




    } catch (error) {
        console.log(error)

        res.status(500).json({
            message:"internal server error",
            success:false
        })
    }
}

const isStudent = async(req,res, next)=>{
    try {

        const role = req.role

        if(role !== 'Student'){
            return res.status(401).json({
                message:"your not Student",
                success:false
            })
        }

        next()



    } catch (error) {
        
    }
}

const isTeacher = async(req,res,next)=>{
    try {
        const role = req.role

        if(role !== 'Teacher'){
            return res.status(401).json({
                message:"you are not Teacher",
                success:false
            })
        }

        next()



    } catch (error) {
        
        return res.status(500).json({
            message:"internal server error",
            success:false
        })

    }
}

export { auth, isStudent, isTeacher}