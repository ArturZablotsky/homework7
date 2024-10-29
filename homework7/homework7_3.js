function calculateAverageGrade(students) {
    const totalGrades = students.reduce((sum, student) => sum + student.averageGrade, 0);
    return totalGrades / students.length; 
}

const students = [
    { name: "Alice", age: 20, averageGrade: 4.5 },
    { name: "Bob", age: 21, averageGrade: 3.9 },
    { name: "Charlie", age: 19, averageGrade: 4.8 },
];

const averageGrade = calculateAverageGrade(students);
console.log(averageGrade);