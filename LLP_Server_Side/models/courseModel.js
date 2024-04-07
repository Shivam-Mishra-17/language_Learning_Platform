const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define schema for lessons
const LessonSchema = new Schema({
  title: String,
  description: String,
  avatar: String // Assuming avatar is a URL to the image
});

// Define schema for quizzes
const QuizSchema = new Schema({
  question: String,
  options: [String],
  correctAnswerIndex: Number
});

// Define schema for chapters
const ChapterSchema = new Schema({
  name: String,
  lessons: [LessonSchema],
  quiz: QuizSchema
});

// Define schema for courses
const CourseSchema = new Schema({
  name: String,
  chapters: [ChapterSchema]
});

const CourseModel = mongoose.model('Courses', CourseSchema);

module.exports = CourseModel;
