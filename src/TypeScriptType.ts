import {Student} from "./student.ts";

const student1: Student = {
    firstName: "Anton",
    lastName: "Meier",
    age: 17,
    grades: [1, 4, 3, 1, 3, 2, 1, 2]
}

function printStudentInfo(student: Student): void {
    console.log(`${student1.firstName} ${student1.lastName} (${student1.age})`);
    console.log("=".repeat(30));
    const gradesFormatted = student.grades.map(grade => grade === undefined ? '*' : grade).join(",");
    console.log(`Grades: ${gradesFormatted}`);
}

printStudentInfo(student1);

const student2: Student = {
    firstName: "Anton",
    lastName: "Meier",
    age: 17,
    grades: ["A", 2, "F", 3, 1, "B", 2, 5]
}

printStudentInfo(student2);

const student3: Student = {
    firstName: "Anton",
    lastName: "Meier",
    age: 17,
    grades: ["A", 2, undefined, 3, 1, "B", undefined, 5]
}

printStudentInfo(student3);

console.log("----------------------------------------------------------")

const students: Student[] = [
    {
        firstName: "Anton",
        lastName: "Meier",
        age: 16,
        grades: [1, 4, 3, 1, "A", undefined, 1, 2]
    },
    {
        firstName: "Berta",
        lastName: "Müller",
        age: 17,
        grades: ["A", undefined, 1]
    },
    {
        firstName: "Cäsar",
        lastName: "Schmidt",
        age: 17,
        grades: ["A", 1, undefined, 3, 2, 4, 5]
    }
]

function printStudentData(student: Student): void {
    console.log(`${student.firstName} ${student.lastName} (${student.age})`);
    console.log("=".repeat(30));
    const gradesFormatted = student.grades.map(grade => grade === undefined ? '*' : grade).join(",");
    console.log(`Grades: ${gradesFormatted}`);
}

function printAllStudents(students: Student[]): void {
    students.forEach(student => {
        printStudentData(student);
    })
}

printAllStudents(students);

console.log("----------------------------------------------------------")

function printStudentInfoWithDynamicHeader(student: Student): void {
    const header = `${student.firstName} ${student.lastName} (${student.age})`;
    console.log(header);
    console.log("=".repeat(header.length));
    const gradesFormatted = student.grades.map(grade => grade === undefined ? '*' : grade).join(",");
    console.log(`Grades: ${gradesFormatted}`);
}

function printAllStudentsWithDynamicHeader(students: Student[]): void {
    students.forEach(student => {
        printStudentInfoWithDynamicHeader(student);
    })
}

printAllStudentsWithDynamicHeader(students);

console.log("----------------------------------------------------------")