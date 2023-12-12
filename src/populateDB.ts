import mongoose from 'mongoose';
import fs from 'fs/promises';
import path from 'path';
import Course from './entities/Course';
import University from './entities/University';
import Instructor from './entities/Instructor';
import Student from './entities/Student';

const seedDirectory = path.resolve(__dirname, './seeds');

const loadJSON = async (filename: string) => {
  const filePath = path.join(seedDirectory, filename);
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
};

const seedDatabase = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/tsPractice');

    // Load JSON files
    const courseData = await loadJSON('course.json');
    const universityData = await loadJSON('university.json');
    const instructorData = await loadJSON('instructor.json');
    const studentData = await loadJSON('student.json');
    const enrollmentData = await loadJSON('enrollment.json');

    // Clear existing data
    await Course.deleteMany();
    await University.deleteMany();
    await Instructor.deleteMany();
    await Student.deleteMany();
    console.log("Cleared existing data");

    // Perform database seeding using the loaded data
    await Course.insertMany(courseData);
    await University.insertMany(universityData);
    await Instructor.insertMany(instructorData);
    await Student.insertMany(studentData);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error populating database:', error);
  } finally {
    // Close the database connection
    await mongoose.disconnect();
  }
};

// Call the seeding function
seedDatabase();