const SubjectModel = require("../models/languageModel");

module.exports = {
  postLanguage: async (req, res) => {
    try {
      const { userId } = req.body; 
      const {selectedSubject } = req.body; 
      const subjectModel = new SubjectModel({ userId, selectedSubject });
      await subjectModel.save();
      return res
        .status(201)
        .json({
          message: "Subject successfully Selected!",
          data: subjectModel,
        });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Internal Server Error", error: err });
    }
  },
};
