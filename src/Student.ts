class Student {
    constructor(private name: string, private age: number, private studentId: string) {}
  
    getDetails(): string {
      return `Name: ${this.name}, Age: ${this.age}, Student ID: ${this.studentId}`;
    }
  }
  
  export default Student;