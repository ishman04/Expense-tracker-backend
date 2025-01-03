const User = require("../schema/userSchema");
const InternalServerError = require("../utils/internalServerError");
const NotFoundError = require("../utils/notFoundError");

class UserRepository{
    async createUser(userDetails){
        try {
            const newUser = await User.create(userDetails);
            return newUser;
        } catch (error) {
            console.log(error);
        }
    }
    async findUser(parameters){
        const res = await User.findOne(parameters);
        return res;
    }
    async getUserDetailsById(id){
        try {
            const res = await User.findById(id).select('-password');
            return res
        } catch (error) {
            console.log(error);
            return NotFoundError('user');   
        }
    }
}

module.exports = UserRepository;