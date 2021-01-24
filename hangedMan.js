var readlineSync = require('readline-sync');
var figlet = require('figlet');

(function () {
    'use strict';

    let hangMan = {
        words : ['apple','banana','orange','grape','kiwi','pear','cherry','nut','watermelon','mango'],
        hiddenWord : '',

        startGame () {
            // print game opening
            console.log(figlet.textSync('HANG MAN', {
                font: 'Ghost',
                horizontalLayout: 'default',
                verticalLayout: 'default',
                width: 80,
                whitespaceBreak: true
            }));

            // choose the hidden word
            let i = Math.floor(Math.random() * (this.words.length - 1));
            this.hiddenWord = this.words[i];            
        },

        takeAGuess () {
            let l = readlineSync.question();

            while (!this.isLetter(l)) {
                // ask again for a letter
                console.log(`Your guess is Not a letter!
                Please enter a letter guess.`);
                l = readlineSync.question();
            }

            return l;
        },
        
        gamesRounds () {
            // number of guesses
            let guesses = 10;
            // array of the hidden word
            let wordSplited = new Array (this.hiddenWord.split(''));
            // make the word for gamer's view
            let len = this.hiddenWord.length;
            let asteriskedWord = new Array(len);
            for (let i = 0; i < len; i++) {
                asteriskedWord[i] = '*';
            }
            
            // how much letters to find
            let lettersToFind = len;

            // the game continues while there are more guesses and the word still have hidden letters
            while (guesses && lettersToFind) {
                // take a guess
                console.log(`You have ${guesses} guesses.
                The word is:
                ${asteriskedWord.join(' ')}
                What is your guess?
                `);
                let letter = this.takeAGuess();
                // not case sensitive
                letter = letter.toLowerCase();
                // check the letter in the hidden word
                let subWord = this.hiddenWord;
                let index = this.hiddenWord.indexOf(letter);
                if (index != -1) {
                    while (index != -1) {
                        lettersToFind--;
                        subWord = subWord.replace(letter,'*');
                        asteriskedWord[index] = letter;
                        index = subWord.indexOf(letter);
                    }
                } else {
                    // the letter does not exist
                    guesses--;
                };
                
            };
            if (lettersToFind == 0) {
                console.log('You are great! It was nice to play with you!');
            } else {
                if (guesses === 0) {
                    console.log('Maybe you will be better next time!');
                };
            };
        },

        
        
        isLetter (l) {
            return l.match(/[a-z]/i)&&l.length === 1;
        },

        game () {
            this.startGame ();
            this.gamesRounds ()
        }
    
        
    };
    
    hangMan.game();
}) ();