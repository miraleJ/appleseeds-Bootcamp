function fun(num) {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            // something
            resolve('the number is bigger then 10');
        } else {
            reject('the number is not bigger then 10');
        }
    })
}

fun(100)
    .then(resultValue => {
        // do something with the result value
        console.log(resultValue)
    }).catch(rejectValue => {
        // do something with the reject value
        console.log(rejectValue)
    })
    