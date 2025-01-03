const UserRepository = require("../repositories/userRepository");
const UserService = require("../services/userService");

async function newUser(req,res){
    const userService = new UserService(new UserRepository());

    try {
        const user = await userService.signUp(req.body);
        return res.status(201).json({
            message: "Successfully registered the user",
            data: user,
            error: {},
            success: true
        });
        
    } catch (error) {
        console.log(error)
        return res.status(error.statusCode || 500).json({
            message: "Failed to register the user",
            data: {},
            error: error.reason || error.message,
            success: false
        });
    }
}

async function getDetails(req,res){
    const userService = new UserService(new UserRepository());
    try {
        const user = await userService.getUserDetails(req.params.id);
        return res.status(200).json({
            message: "Successfully retrieved the user details",
            data: user,
            error: {},
            success: true
            });
            } catch (error) {
                console.log(error)
                return res.status(error.statusCode || 500).json({
                    message: "Failed to retrieve the user details",
                    data: {},
                    error: error.reason || error.message,
                    success: false
                });
            }
                    
}

module.exports = {
    newUser,
    getDetails
}