import User from "../model/userModel.js"
const dashboard = async (req, res)=>{
    try {
        const userId = req.userId
      

      const user =  await User.findOne({_id:userId})   
      
      console.log(user)

      return res.status(200).json({
        user,
        success:true,
        message:'profile data'
      })

    } catch (error) {
        
console.log(error)
res.status(500).json({
    message: error
})
    }
}

export {dashboard}