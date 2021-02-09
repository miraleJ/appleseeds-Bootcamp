function passValid1(pass) {
    if (pass.length >= 7) {
        return 'strong';
    } else {
        return 'weak';
    }
}
function passValid2(pass) {
    return (pass.length >= 7 ? 'strong' : 'weak');
}
function passValid3(pass) {
    return (pass.length >= 7 && 'strong') || 'weak';
}
function passValid4(pass) {
    let capLetter = !(pass.toLowerCase() === pass);
    if (pass.length >= 7) {
        if (capLetter) {
            return 'very strong';
        }
        return 'strong';
    } else {
        return 'weak';
    }
}

console.log (passValid1("1234567"));
console.log (passValid1("123456"));
console.log (passValid2("1234567"));
console.log (passValid2("123456"));
console.log (passValid3("1234567"));
console.log (passValid3("123456"));
console.log (passValid4("1234567"));
console.log (passValid4("123456"));
console.log (passValid4("12R456"));
console.log (passValid4("12r456"));
console.log (passValid4("12R4567"));
console.log (passValid4("12r4567"));