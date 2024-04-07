const express = require("express");

const SubjectModel = require("../models/languageModel");
const CourseModel = require("../models/courseModel");

module.exports = {
  getCourse: async (req, res) => {
    try {
  const selectedSubject = await SubjectModel.findOne({});
  if (!selectedSubject) {
    return res.status(404).json({ message: "No subject selected" });
  }

      const courses = await CourseModel.find({
        name: selectedSubject.selectedSubject,
      }).populate({
        path: 'chapters',
        populate: {
            path: 'lessons quiz',
            model: 'LessonModel' // Assuming the model name for lessons is LessonModel
        }
    });

      if (!courses || courses.length === 0) {
        return res
          .status(404)
          .json({ message: "No courses found for selected subject" });
      }

      const coursesWithAvatars = courses.map(course => {
        const courseWithAvatar = course.toObject(); // Convert Mongoose document to plain JavaScript object
        courseWithAvatar.chapters.forEach(chapter => {
          chapter.lessons.forEach(lesson => {
            // Assuming lesson.avatar contains the filename (e.g., av1.png)
            lesson.avatar = `${req.protocol}://${req.get('host')}/uploads/${lesson.avatar}`;
          });
        });
        return courseWithAvatar;
      });

      return res.status(200).json({ message: "Success", data: coursesWithAvatars });
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ message: "Internal Server Error", error: err });
    }
  },

};
