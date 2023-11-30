import mongoose from 'mongoose';
import Student from './entities/Student';

// Establish MongoDB connection
async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://localhost:27017/tsPractice');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

async function testCRUDOperations() {
  try {
    // Create
    const newStudent = new Student({
      name: 'John Doe',
      age: 20,
      studentId: '12345',
    });
    await newStudent.save();

    // Read
    const foundStudent = await Student.findOne({ name: 'John Doe' });
    console.log('Found student:', foundStudent);

    // Update
    if (foundStudent) {
      foundStudent.age = 21;
      await foundStudent.save();
    }

    // Delete
    if (foundStudent) {
        // Student found, proceed with deletion
        const deletedStudent = await foundStudent.deleteOne();
        console.log('Deleted student:', deletedStudent);
    } else {
        // Student not found, handle accordingly
        console.error('Student not found');
    }
  } catch (error) {
    console.error('Error performing CRUD operations:', error);
  }
}

// Connect to the database and perform CRUD operations
connectToDatabase().then(() => {
  testCRUDOperations().finally(() => mongoose.disconnect());
});
