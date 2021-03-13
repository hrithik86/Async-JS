console.log("Callback Functions Tutorial");

// Pretend that this response is coming from the server
const students = [
    {name: "Hrithik", subject: "JavaScript"},
    {name: "Rohan", subject: "Machine Learning"}
]

// When the enrolled function is finished, i.e., after 1s 
// then only the callback function is called
function enrollStudent(student, callback){
    setTimeout(function() {
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    }, 1000);
}

function getStudents(){
    setTimeout(function() {
        let str = "";
        students.forEach(function(student){
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 5000);
}

let newStudent = {name:"Sunny", subject:"Python"}
enrollStudent(newStudent, getStudents);
// getStudents();

