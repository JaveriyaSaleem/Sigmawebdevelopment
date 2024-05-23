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
console.log(arr[3,4])