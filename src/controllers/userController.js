const UserRepository = require("../repositories/userRepository");
const UserService = require("../services/userService");

async function newUser(req,res){
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            message: "All fields are required: name, email, and password",
            success: false,
        });
    }
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

module.exports = {
    newUser
}