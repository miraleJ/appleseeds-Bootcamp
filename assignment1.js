'use strict';
var readlineSync = require('readline-sync');

console.log('*#*#*#*#*#*#*#*#*#*#\n*# Wellcome to our quiz -\nAre you a nerd?\n*#*#*#*#*#*#*#*#**#');
console.log("First question: There will be a test soon. You are...:");
console.log('1. oh! Is there a test? I think I hear my friends watching a movie... That\'s a better use of my time.')
console.log('2. I learn the day before. I hope it will be ok.');
console.log('3. Three days before the test is more than enough.');
console.log('4. It\'s been a week now that I see only my notebook, I sleep on my books and dream about my teacher.');

let ans = [1, 2, 3, 4];
let sum = readlineSync.keyInSelect(ans, 'Choose your answer:') + 1;

console.log("Second question: What is your favorite class?");
console.log('1. The best is when the teacher doesn\'t come!')
console.log('2. Sports class I guess...');
console.log('3. The teacher of computer science is fine, and doesn\'t give a lot of HW.');
console.log('4. It is too hard to answer! There are a lot of options - math, english, science, chymestry...');

sum += readlineSync.keyInSelect(ans, 'Choose your answer:') + 1;

console.log("The third question: What do you do when you come home after school?");
console.log('1. I Eat fast, play the computer, and run to the play ground.')
console.log('2. I eat, rest a bit, play some games, and do some of the HW.');
console.log('3. I do the HW as fast as I can - and then I have time for fun!');
console.log('4. I do all the HW in all the classes - math, english, science, chymestry I don\'t have time for anything else!');

sum += readlineSync.keyInSelect(ans, 'Choose your answer:') + 1;

console.log("We\'ve past the half! The fourth question is: What do you do in the recess?");
console.log('1. Run to the playground, obviously!')
console.log('2. Put all my things in my bag and go out.');
console.log('3. Finish the last questions of the lesson and go to give some rest to the brain.');
console.log('4. Get ready to the next lesson, memorizing the last lesson, and wait for the teacher. I want to ask him a question.');

sum += readlineSync.keyInSelect(ans, 'Choose your answer:') + 1;

console.log("The last question, Are you ready? While the class, you are...");
console.log('1. It is a great time to sleep a bit.')
console.log('2. I try to listen to the teacher, but the snors of the student from answer number 1 are disturbing me from listening.');
console.log('3. Most of the time I\'m listening. But sometimes talking...');
console.log('4. I don\'t want to lose a word! Why do we have only 45 minutes for the lesson?');

sum += readlineSync.keyInSelect(ans, 'Choose your answer:') + 1;

if (sum < 10) {
    console.log('You probaby are the best player on the field, in class - a bit less...');
} else if (sum < 16) {
    console.log('You like learning, but not too much. Continue with your good work at balancing fun and learning.');
} else {
    console.log('You are the best student in class, remember - you can loosening it sometimes, there is a world outside there!');
}