import Marks from "../model/marksModel.js"

const showMarks =async (req,res)=>{
    try {
        const marks = await Marks .find()

          res.status(200).json({
            message:'marks found successfully...',
            success:true,
            marks
        })


    } catch (error) {
          res.status(500).json({
            message:'internal server error',
            success:false
        })
    }
}


const createMarks =async   (req,res)=>{
    try {

        const {name, marks} = req.body

        const Usermarks = await Marks.create({name, marks})

        res.status(201).json({
            message:'marks created successfully...',
            marks,
            success:true
        })

        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'internal server error'
        })
    }
}

export { showMarks, createMarks}

