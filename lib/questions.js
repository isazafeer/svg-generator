const questions = [
    {
        type: "input",
        name: "text",
        message: "Please enter three characters for your logo",
    },
    {
        type: "input",
        name: "textColor",
        message: "Please choose a colour for your logo text",
    },
    {
        type: "list",
        name: "shape",
        message: "Choose a shape for the Logo",
        choices: ["Circle", "Triangle", "Square"],
    },
    {
        type: "input",
        name: "shapeColour",
        message: "Please choose a colour for your logo",
    },
]
module.exports = questions;