////////////////1///////////////////
function isString(str, f) {
    if (typeof(str) === "string") {
        f (str);
    }
}

function printFunc(s) {
    console.log(s);
}

isString('abc', printFunc);

//////////////2////////////////
function firstWordUpperCase(str, f) {
    let sWords = str.split(' ');
    sWords[0] = sWords[0].toUpperCase();
    str = sWords.join(' ');

    return f(str);
}

function putDashes(str) {
    let sWords = str.split(' ');
    str = sWords.join('-');
    return str;
}

console.log(firstWordUpperCase('aaa bbb ccc', putDashes));