//handling the request and processing the data


import User from '../model/userModel.js'

//post request
export const create = async(req, res)=>{
    try{
        const newUser = new User(req.body);
        const {email} = newUser;

        const userExist = await User.findOne({email})

        if(userExist){
            return res.status(400).json({message:"User already exists"});
        }

         const saveData = await newUser.save();

        res.status(200).json({message:"user created successfully"});

    }catch(error){
        res.status(500).json({errorMessage:error.message})
    }
}

//get request
export const  getAllUsers = async (req, res)=>{
    try{
        const userData = await User.find();
        if(!userData || userData.length === 0){
            return res.status(404).json({message:"User data not Found."})
        }
        res.status(200).json(userData);

    }catch(error){
        res.status(500).json({errorMessage:error.message})
    }
}

//get one id
export const getUserById = async (req, res) =>{
    try{
         const id = req.params.id;
         const userExist = await User.findById(id)

         if(!userExist){
            return res.status(404).json({message:"User data not Found."})
         }
         res.status(200).json({userExist})
    }
    catch(error){
        res.status(500).json({errorMessage:error.message})
     
    }
}

//put request
export const update = async(req, res) => {
    try{
        const id = req.params.id;
         const userExist = await User.findById(id)

         if(!userExist){
            return res.status(404).json({message:"User data not Found."})
         }
        const updatedData =  await User.findByIdAndUpdate(id, req.body , {
            new : true
         })
       //  res.status(200).json(updatedData)
       res.status(200).json({message:"user updated successfully"});


    }catch(error){
        res.status(500).json({errorMessage:error.message})
    }
}


//delete user

export const deleteUser  = async(req, res)=>{
    try{

        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
           return res.status(404).json({message:"user data not found"})
        } 
        await User.findByIdAndDelete(id);
        res.status(200).json({message:"deleted successfully"})

    }catch(error){
        res.status(500).json({errorMessage:error.message})
    }
}