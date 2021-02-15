const school = {
    teachers: [
    {
    id: 1,
    name: "Pinchas",
    subjects: ["chemistry", "biology", "physics"],
    students: [],
    capacityLeft: 3,
    },
    {
    id: 2,
    name: "Williams",
    subjects: ["history", "ethics"],
    students: [],
    capacityLeft: 2,
    },
    ],
    students: [
    {
    id: 10,
    name: "Jennifer",
    age: 20,
    },
    {
    id: 11,
    name: "Howard",
    age: 23,
    },
    {
    id: 12,
    name: "Old-Timmy",
    age: 86,
    },
    {
    id:13,
    name: "Houston",
    age: 21,
    },
    ],

    findPerson: function(personType, id) {
        let person;
        if (personType === 'teacher') {
            person = this.teachers.find(person => person.id === id);
        } else if (personType === 'student') {
            person = this.students.find(person => person.id === id);
        }
        return person;
    },

    assignStudent(id, subj) {
        // if there is a matching subject, and the capasity isn't fullcapacityLeft
        let teacher = this.teachers.find(t => (t.subjects.find(s => s === subj) && t.capacityLeft));
        if (!teacher) {
            console.log('sorry, no available teachers left.');
        } else {
            teacher.capacityLeft--;
            teacher.students.push(id);
        }
    },

    assignTeachersSubject(id, newSubj) {
        let teacher = this.findPerson('teacher', id);
        // if the subject doesn't exist to the teacher
        if (!teacher.subjects.find(s => s===newSubj)) {
            teacher.subjects.push(newSubj);
        }
    },

    numberOfPeopleInSchool() {
        return this.teachers.length + this.students.length;
    }
};

////////////1/////////
console.log(school.findPerson('student', 12));

//////////////////////2/////////////
school.assignStudent(13,'ethics');


//////////////3////////////
school.assignTeachersSubject(2, 'English');
school.assignTeachersSubject(2, 'history');
console.log(school.teachers);

/////////////////4////////////
console.log(school.numberOfPeopleInSchool());