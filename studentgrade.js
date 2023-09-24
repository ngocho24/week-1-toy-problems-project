
// Student Marks graded as:
// A > 79
// B - 60 to 79
// C -  59 to 49
// D - 40 to 49
// E - less 40.

//Function that prints grade
function  studentResults(grade) {
//Conditional statement (if) to show that the values entered are between 0 and 100
if (grade >= 0 && grade <= 100) {

    //condition statements for grading the marks using if...else condition

    // A > 79
if (grade >= 79 && grade <=100){
    console.log ('A');

    // B - 60 to 79
} else if (grade >= 60 && grade < 79){ 
    console.log ('B');

    // C -  59 to 49
} else if (grade >= 49 && grade < 59 ){
    console.log ('C');

// D - 40 to 49
} else if (grade >= 40 && grade < 49){
    console.log ('D');

 // E - less 40.
} else if (grade <= 40){
 console.log ('E');

//  When marks are not correct
} else {
    console.log("Wrong marks!")
}
}
}
studentResults (grade = 80); // Call the studentResults function and grades it e.g grade = 80 returns 'A'
 