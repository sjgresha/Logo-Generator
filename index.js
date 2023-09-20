//importing packages and classes
const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./lib/shape');

function writeFile(fileName, answers) {
    let svg = "";
    svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg>`;
    svg += `${answers.shape}`;

    let shapeChoice;
    if (answers.shape === "Circle") {
        shapeChoice = new Circle();
        svg += `circle cx="115" cy="115" r="80" fill="${answers.shapeColor}"`
    }
    //need to add Square and Triangle

    fs.writeFile(fileName, svg, (error) => {
        error ? console.log(error) : console.log("logo.svg created successfully!");
    });
}

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
            writeFile("logo.svg", answers);
        }
    });
}

userQuestions();