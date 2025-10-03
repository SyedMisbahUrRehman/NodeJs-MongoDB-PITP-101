const Student = require('../models/Student');

// Get all students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json({ message: "Students fetched successfully", students });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch students", error: err.message });
  }
};

// Get single student by ID
exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json({ message: "Student fetched successfully", student });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch student", error: err.message });
  }
};

// Create new student
exports.createStudent = async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    const saved = await newStudent.save();
    res.status(201).json({ message: "Student created successfully", student: saved });
  } catch (err) {
    res.status(400).json({ message: "Failed to create student", error: err.message });
  }
};

// Update student (PUT)
exports.updateStudent = async (req, res) => {
  try {
    const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Student not found" });
    res.json({ message: "Student updated successfully", student: updated });
  } catch (err) {
    res.status(400).json({ message: "Failed to update student", error: err.message });
  }
};

// Partial update student (PATCH)
exports.patchStudent = async (req, res) => {
  try {
    const patched = await Student.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    if (!patched) return res.status(404).json({ message: "Student not found" });
    res.json({ message: "Student patched successfully", student: patched });
  } catch (err) {
    res.status(400).json({ message: "Failed to patch student", error: err.message });
  }
};

// Delete student
exports.deleteStudent = async (req, res) => {
  try {
    const deleted = await Student.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Student not found" });
    res.json({ message: "Student deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete student", error: err.message });
  }
};
