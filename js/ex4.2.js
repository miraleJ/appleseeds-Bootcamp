function gradeAssigner(grade) {
    let gradeLetter = 'not a valid grade';
    if ((grade >= 0) && (grade <= 64)) {
        gradeLetter = 'F';
    } else if ((grade >= 65) && (grade <= 69)) {
        gradeLetter = 'D';
    } else if ((grade >= 70) && (grade <= 79)) {
        gradeLetter = 'C';
    } else if ((grade >= 80) && (grade <= 89)) {
        gradeLetter = 'B';
    } else if ((grade >= 90) && (grade <= 100)) {
        gradeLetter = 'A';
    }
    return gradeLetter;
}
