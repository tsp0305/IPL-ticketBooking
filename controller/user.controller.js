//importing functions from service layer
const {BookTicket,addUser}=require('../services/user.services')

const bookTicket = async(req,res) =>{
    try {
        let response=await BookTicket(item);
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({message:'Internal Server Error'});
    }

}

const addUser=async(req,res)=>{

     let item = {
            ...req.body
            
     }
    try {
        let response=await addUser(item);
        res.status(201).json({message:'User added'})
    } catch (error) {
        res.status(500).json({message:'Internal Server Error'});
    }
}


module.exports={bookTicket,addUser};