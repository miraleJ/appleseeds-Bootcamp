var readlineSync = require('readline-sync');

(function () {
    'use strict';

    let gameOfWar = {
        userMoney: 50,
        uName: '',
        endGame: false,
        bet: 0,
        
        startGame() {
            console.log(`
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            ~~~~~ Welcome to the Game Of War! ~~~~~
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
            // get the name from the user
            this.uName = readlineSync.question('Please enter your name: ');
            
            console.log(`Nice to meet you, ${this.uName}!
            You have an amount of ${this.userMoney}ILS to play with.
            Lets start!`);

            this.takeBet();
        },

        takeBet() {
            this.bet = readlineSync.questionInt(`Place your bet for the next round between 1 and ${this.userMoney}: `);
            // check the bet
            if (this.bet < 1 || this.bet > this.userMoney) {
                this.endGame = true;
                console.log('The bet is not valid!');
            }
        },

        playGame (){
            while (!this.endGame) {
                // randomize a card for the player and a card for the computer
                let uCard = Math.floor(Math.random() * 13) + 1;
                let compCard = Math.floor(Math.random() * 13) + 1;
                console.log(`Your card is ${uCard}, and my is ${compCard}.`);

                // if the user win the round
                if (uCard > compCard){
                    console.log(`You win ${this.bet}ILS, and now you have ${this.userMoney+this.bet}ILS`);
                    this.userMoney += this.bet;

                    // continue the game
                    this.continueGame();
                } else {
                    console.log(`You lost ${this.bet}ILS, and now you have ${this.userMoney-this.bet}ILS`);
                    this.userMoney -= this.bet;

                    // if the user have more money
                    if (this.userMoney > 0) {
                        // continue the game
                        this.continueGame();
                    } else {
                        // end the game
                        console.log('You are broke...');
                        this.endGame = true;
                    }
                }
            }

            // end the game
            console.log(`Bye bye ${this.uName}!`);
        },

        continueGame() {
            // ask the user what he wants to do:
            let options = ['Continue', 'Exit'];
            let choose = readlineSync.keyInSelect(options, 'What do you want to do now?');

            if (choose != 1) {
                this.takeBet();
            } else {
                console.log(`You have ${this.userMoney}ILS`);
                this.endGame = true;
            }
        }
    }
    
    gameOfWar.startGame();
    gameOfWar.playGame();
})();
