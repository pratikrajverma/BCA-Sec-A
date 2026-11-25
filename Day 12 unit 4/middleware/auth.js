import jwt from 'jsonwebtoken'

const auth = async (req,res,next)=>{
    try {

        const token  = req.headers.authorization.split(' ')[1]

        const payload = await jwt.verify(token , 'bcaSecA' )

        if(!payload){
            return res.status(401).json({
                message:"you are not login .....",
                success:false

            })
        }

        req.role = payload.role


        next()




    } catch (error) {
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
        
    } catch (error) {
        
    }
}

export { auth, isStudent, isTeacher}