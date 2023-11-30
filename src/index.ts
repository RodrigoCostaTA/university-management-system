import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Student } from './entities/student.entity';

async function bootstrapConnection() {
    try {
        const connection = await createConnection();
        console.log('Connected to MongoDB: ${connection.name');

        
        const studentRepository = connection.getRepository(Student);

        const newStudent = new Student();
        newStudent.name = 'John Doe';
        newStudent.age = 20;
        
        await studentRepository.save(newStudent);
        
        const foundStudent = await studentRepository.findOne({
            where: { name: 'John Doe' },
          });
        console.log('Found student:', foundStudent);

    } catch (err) {
        console.error('Error connecting to MongoDB: ', err);
    }
}

bootstrapConnection();