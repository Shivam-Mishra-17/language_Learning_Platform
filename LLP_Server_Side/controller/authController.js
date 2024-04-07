const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  /*{
        Validate req.body -- done in utils
        create MongoDb Usermodel -- call from UserSchema from userModel 
        do password encryption -- encrypt using bcrypt taking password from Usermodel.Password
        save data to mongodb --  done
        return response to the client -- data:response use to show response from server -- done
    }*/
  postRegisterUser: async (req, res) => {
    try {
      const userModel = new UserModel(req.body);
      userModel.password = await bcrypt.hash(req.body.password, 10);
      const response = await userModel.save();

      if (!response) {
        return res
          .status(500)
          .json({ message: "error", error: "Failed to save user" });
      }

      response.password = undefined;

      return res.status(201).json({ message: "success", data: response });
    } catch (err) {
      return res.status(500).json({
        message: "error",
        error: err.message || "Internal Server Error",
      });
    }
  },

  /*
    check user using email -- done
    compare password -- done
    create jwt token - jwt.sign (done)
    send response to client -- done
  */
  postLoginUser: async (req, res) => {
    try {
      const user = await UserModel.findOne({ email: req.body.email });
      if (!user) {
        return res.status(401).json({
          message: "Authentication failed, Invalid Username / Password",
        });
      }

      const isPassEqual = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!isPassEqual) {
        return res
          .status(401)
          .json({ message: "Authentication failed, Password" });
      }

      const tokenObject = {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
      };

      const jwtToken = jwt.sign(tokenObject, process.env.SECRET, {
        expiresIn: "3h",
      });
      return res.status(200).json({ jwtToken, tokenObject });
    } catch (err) {
      return res.status(500).json({ message: "Error", error: err });
    }
  },

  getUsers: async (req, res) => {
    try {
      const users = await UserModel.find({}, { password: 0 });
      return res.status(200).json({ data: users });
    } catch (err) {
      return res.status(500).json({ message: "error", error: err });
    }
  },

  getUserProfile: async (req, res) => {
    try {
      const currentUser = await UserModel.findById(user).select("-password");
      return res.status(200).json({ message: "Success", data: currentUser });
    } catch (err) {
      res.status(500).json({ message: "Internal Server Error", error: err });
    }
  },
};
