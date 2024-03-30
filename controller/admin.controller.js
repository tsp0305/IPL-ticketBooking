//importing functions from service layer
const {fetchAllUserItems,addUser,postTicket}=require('../services/admin.services')

const getuserList=async(req,res)=>{
    try {
        let data=await fetchAllUserItems();
        res.status(200).json({'User Details':data});
    } catch (error) {
        res.status(500).json({message:'Internal Server Error'});
    }
}

const postNoTicket = (req,res) => {
    try{
        postTicket(req);
        res.status(200).json({message:'No. of tickets updated'});

    }
    catch(error){
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


module.exports={getuserList,postNoTicket,addUser};