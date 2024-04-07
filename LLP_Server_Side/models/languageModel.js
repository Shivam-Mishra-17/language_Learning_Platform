const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Subjects = new Schema({
  userId: {
    type:String,
    required:true
  },
  selectedSubject: {
    type: String,
    default: "",
    required:true
  },
});

const SubjectModel = mongoose.model("Subjects", Subjects);
module.exports = SubjectModel;
