const express = require("express");
const nodemailer = require("nodemailer");
const mailgen = require("mailgen");
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

module.exports = {
  postContact: async function (req, res) {
    const { userName, userEmail, userSubject, usercourseName, userMessage } =
      req.body;

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL,
        pass: PASSWORD,
      },
      debug: true,
    });

    let mailGenerator = new mailgen({
      theme: "default",
      product: {
        name: "Language Learning Platform",
        link: "http://localhost:3000",
      },
    });

    let response = {
      body: {
        name: userName,
        table: {
          data: [
            {
              mail: userEmail,
              subject: userSubject,
              courseName: usercourseName,
              message: userMessage,
            },
          ],
        },
      },
    };

    let mail = mailGenerator.generate(response);

    let messageBody = {
      from: EMAIL,
      to: userEmail,
      subject: userSubject,
      html: mail,
    };

    transport
      .sendMail(messageBody)
      .then(() => {
        return res.status(201).json({ message: "Success", data: messageBody });
      })
      .catch((err) => {
        return res
          .status(500)
          .json({ message: "Error in sending data ", error: err });
      });
},
};
