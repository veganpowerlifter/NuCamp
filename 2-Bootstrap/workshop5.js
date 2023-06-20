//task 1
class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

//task 2
class Bootcamp {
    constructor(name, level, students) {
        this.name = name;
        this.level = level;
        this.students = [];

    }
    //task 3 before putting a new student into the array check if the email or name is blank
    registerStudent(studentToRegister) {
        if (!studentToRegister.name || !studentToRegister.email) { //if the name is false, we make it a true statement and run the if
            console.log('Invalid name or email')
            return false; // do not need to use else if i use return
        }
        for (const student of this.students) { // we are defining student const here 
            if (student.email === studentToRegister.email) { // check exclusions first, and tell code true unless these exclusions instead of true if some condition. backwards logic
                console.log("Name already registered")
                return false; //return always last unless if statement ?? so why do we put it inside the if not for statement?
            }
        }
        this.students.push(studentToRegister)
        console.log('Success! ' + studentToRegister.name + ' is added to ' + Bootcamp.name)
        return true;//all arrays own the method push => we have to reference the array first then use .push
    }
    // task 4
    listStudents() { //no parameter 
        if (this.students.length === 0) {
            console.log(`No students are registered to the ${this.name} bootcamp.`)
            return false;
        }
        console.log(`The students registered in ${this.name} are:`)

        for (const student of this.students) {
            console.log(`Name: ${student.name} Email: ${student.email}`)
        }
        return true; //helps us leave the function since we don't have else 
    }
}

//testing

testStudent = new Student('Bugs Bunny', 'bugs@bunny.com');
console.log(testStudent);
if (testStudent.name === 'Bugs Bunny' && testStudent.email === 'bugs@bunny.com') {
    console.log('TASK 1: PASS');
}
reactBootcamp = new Bootcamp("React", "Advanced");
console.log(reactBootcamp);
if (reactBootcamp.name === 'React' && reactBootcamp.level === 'Advanced'
    && Array.isArray(reactBootcamp.students) && reactBootcamp.students.length === 0) {
    console.log('TASK 2: PASS');
}

const runTest = (bootcamp, student) => {
    const attemptOne = bootcamp.registerStudent(student); //true
    const attemptTwo = bootcamp.registerStudent(student); //false
    const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny")); //false
    if (attemptOne && !attemptTwo && !attemptThree) {
        console.log("TASK 3: PASS");
    }

    bootcamp.registerStudent(new Student('Babs Bunny', 'babs@bunny.com'));
    if (bootcamp.listStudents()) {
        // console.log("list of bootcamp students: ", bootcamp.listStudents())
        console.log("TASK 4: PASS 1/2");
    }
    bootcamp.students = [];
    if (!bootcamp.listStudents()) {
        console.log("TASK 4: PASS 2/2");
    }
};

runTest(reactBootcamp, testStudent);
