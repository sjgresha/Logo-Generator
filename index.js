const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./lib/shape');

function userQuestions() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "Enter up to 3 characters to display on the logo",
            name: "text"
        },
        {
            type: "input",
            message: "Choose a text color",
            name: "textColor"
        },
        {
            type: "list",
            message: "Choose a shape you would like the logo to be",
            choices: ["Circle", "Square", "Triangle"],
            name: "shape"
        },
        {
            type: "input",
            message: "Choose a color for the shape",
            name: "shapeColor"
        },

    ])
    .then((answers) => {
        if (answers.text.length > 3) {
            console.log("Must enter a value of no more than 3 characters");
            userQuestions();
        } else {
            writeToFile("logo.svg", answers);
        }
    });
}

userQuestions();