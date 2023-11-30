import { Entity, ObjectIdColumn, ObjectId, Column } from "typeorm";

@Entity()
export class Student {
    @ObjectIdColumn()
    studentId!: ObjectId;

    @Column()
    name!: string;

    @Column()
    age!: number;

}