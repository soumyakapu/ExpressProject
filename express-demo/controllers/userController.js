const createUser= (req,res)=>{
    console.log('creatig the user ',req.body)
    res.json({message : 'creating the user'})
}
const getUser =(req,res)=>{
    res.json({message: 'getting the user'})
}
const  createUserById=(req,res)=>{
    res.status(201).json({message:`creating the user with id ${req.params.id}`})
}
const getUserById =(req,res)=>{
    res.json({message:`fetching the user with id ${req.params.id}`})
}
const deleteUserById =(req,res)=>{
    res.json({message :`delteing the user with id ${req.params.id}`})
}
module.exports={createUser,getUser,createUserById,getUserById,deleteUserById}