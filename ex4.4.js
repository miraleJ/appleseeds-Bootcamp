function sevenBoom(n) {
    let a = [];
    for (let i = 0; i <= n; i++) {
        let temp = '';
        // if it devides to 7
        if (i % 7 === 0) {
            //BOOM
            temp = 'BOOM';
        }
        // if it has 7
        if (i.toString().indexOf('7') !== -1) { 
            temp = temp + 'BOOM';
        } else if (temp === '') {
            temp = i;
        }
        // put the result into an array
        a.push(temp);
    }
    //print the array
    console.log(a);
}

sevenBoom(88);
