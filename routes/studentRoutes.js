const express = require('express');
const router = express.Router();

// Destructure methods directly from controller
const {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  patchStudent,
  deleteStudent
} = require('../controllers/studentController');

// Routes
router.get('/', getAllStudents);
router.get('/:id', getStudentById);
router.post('/', createStudent);
router.put('/:id', updateStudent);
router.patch('/:id', patchStudent);
router.delete('/:id', deleteStudent);

module.exports = router;
