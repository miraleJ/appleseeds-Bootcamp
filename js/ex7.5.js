function countLetters(arr) {
    if (arr) {
        let lettersOfArray = [];
        // save every word as letters
        let word = arr[0];
        for (word of arr) {
            lettersOfArray.push(...word.toLowerCase());
        }
        // count every letter
        let letterMap = new Map ();
        let letter = lettersOfArray[0];
        for (letter of lettersOfArray) {
            // check if it is a letter
            if (letter != ' ') {
                let temp = 1;
                // if the letter is already in the map
                if (letterMap.has(letter)) {
                    temp = letterMap.get(letter) + 1;
                }
                letterMap.set(letter, temp);
            }
        }
        return letterMap;
    }
}

const array = ["Hello", "Good Day", "Your Welcome", "hotdog",
"hamburgers"];
console.log(countLetters(array));