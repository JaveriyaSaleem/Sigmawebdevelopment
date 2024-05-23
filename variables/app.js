// we are using let here as var is global scope and let can be globally scopped or block scopped 
// We learned about primative now we checking object 
let student = {
    studentName: "Javeriya Saleem",
    studentClass: "12 Grade",
    studentAge: "19"

}
console.log(student.studentName); //that's how we call let having multiple value
let arr = ["bat","ball","football","pencil","market"]
console.log(arr[2]); //that's how we call array
// they are object
// updating let 
student.favSubject = "Drawing";
console.log(student); //updation made 
console.log(arr[2,3]); //only one working
// assignment 
// page 4 
let studentData ={
    "Name": "Javeriya",
    "Phone Number": "03123456780",
    "Total Marks": "930/1000"
}
console.table(studentData);
// question 1 
let firstVar = "Hello";
console.log(firstVar);
firstVar = 299;
console.log(firstVar);
// question 2 
console.log(typeof (firstVar));
// question 3 
const myName = "Javeriya";
console.log(myName);
// myName = 233; it didn't updated as it was const and showed error
console.log(myName);
// question 4 
// no const didn't let me updated the value 
// question 5 
let dictionary = {
    "Word": "Meaning",
    "Magnificant":"something which is extremely beautiful",
    "Discharge" : "Release",
    "Yelling": "Shouting in loud, sharp way",
    "Excemption": "The action of freeing someone from any obligation",
    "inclined" : "leaning towards someone percepective"
};
console.table(dictionary);
// end 
let data = ["Toyota", "Porsche","Lamborghini","Hyundai","Ferrari","Mercedez","BMW","Volkswagen","Tesla","Ford","Honda","Nisan","Audi","Jaguar","Lexus","Bently",];
console.log(data.length);
