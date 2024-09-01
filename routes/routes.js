// routes/routes.js
const express = require('express');
const router = express.Router();

// Import controllers
const homeController = require('../controllers/homeController');
const contactUsController = require('../controllers/contactUsController');
const aboutUsController = require('../controllers/aboutUsController');
const studentController = require('../controllers/studentController');

// Define routes
router.get('/home', homeController.home);
router.get('/contact-us', contactUsController.contactUs);
router.get('/about-us', aboutUsController.aboutUs);
router.post('/student/add', studentController.addStudent);
router.put('/student/update', studentController.updateStudent);
router.delete('/student/delete', studentController.deleteStudent);
router.get('/students', studentController.getAllStudents);
router.get('/student/:id', studentController.getStudentById);

module.exports = router;
