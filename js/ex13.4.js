const piramideDraw = (n => {
    for (let i = 0; i < n; i++) {
        let s = "";
        for (let j = 0; j < n; j++) {
            s +=( j <= i ? '#' : ' ');
        }
        console.log(s);
    }
})

piramideDraw(4)