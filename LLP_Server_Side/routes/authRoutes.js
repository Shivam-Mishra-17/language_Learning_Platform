const express = require("express");
const {
  postRegisterUser,
  postLoginUser,
  getUsers,
  getUserProfile,
} = require("../controller/authController");

const {
  userRegistrationValidate,
  userLoginValidation,
} = require("../utils/userValidation");

const { ensureAuthenticates, verifyToken } = require("../utils/getUsersAuth");
const authController = require("../controller/authController");
const { verify } = require("jsonwebtoken");
const { postLanguage } = require("../controller/subjectController");
const { getCourse } = require("../controller/courseController");
const { postContact } = require("../controller/contactController");
const routes = express.Router();


routes.post("/register", userRegistrationValidate, postRegisterUser);

routes.post("/login", userLoginValidation, postLoginUser);

routes.get("/users", ensureAuthenticates, getUsers);

routes.get("/profile", ensureAuthenticates, getUserProfile);

routes.post("/language", postLanguage);

routes.get('/courses/:selectedSubject', getCourse)

routes.post('/contact', postContact);


module.exports = routes;
