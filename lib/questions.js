const questions = [
    {
        type: 'input',
        name: 'logotext',
        message: 'Please enter three characters for your logo',
    },
    {
        type: 'input',
        name: 'colour',
        message: 'Please choose a colour for your logo',
    },
    {
        type: 'input',
        name: 'text',
        message: 'Please choose a colour for your logo text',
    },
    {
        type: 'list',
        name: 'shape',
        choices: ['circle', 'triangle', 'square'],
    },
]

module.exports = questions;