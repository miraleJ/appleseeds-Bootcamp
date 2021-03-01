function makeAllCaps(strArr) {
    let words = strArr.filter(word => typeof(word) === 'string').map(word => word.toUpperCase());
    return new Promise((resolve, reject) => {
        if (words.length > 0) {
            // something
            resolve(words);
        } else {
            reject('no words in the arr');
        }
    })
}

function sortWords(strArr) {
    return new Promise((resolve, reject) => {
        if (strArr.length > 0) {
            strArr.sort();
            resolve(strArr);
        } else {
            reject('no words in the arr');
        }
    })
}

makeAllCaps([987,'jhg','aaa', 'ttt', 'eee',9])
    .then(resultValue => {
        // do something with the result value
        console.log(sortWords(resultValue))
    })
    .catch(rejectValue => {
        // do something with the reject value
        console.log(rejectValue)
    })
    