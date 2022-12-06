const inquirer = require('inquirer');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you want to do?',
        choices: [
            {
                value: '1',
                name: '1. Create list'
            },
            {
                value: '2',
                name: '2. Tasks list'
            },
            {
                value: '3',
                name: '3. List complete tasks'
            },
            {
                value: '4',
                name: '4. List pending tasks'
            },
            {
                value: '5',
                name: '5. Complete task(s)'
            },
            {
                value: '6',
                name: '6. Delete task(s)'
            },
            {
                value: '0',
                name: '0. Exit'
            }
        ]
    }
]

const inquirerMenu = async () => {
    console.clear();
    console.log('============================================='.green);
    console.log('Select an option'.green);
    console.log('============================================='.green);

    const {option} = await inquirer.prompt(questions);
    return option;
}
const pausa = async () => {

    const question = {
     type:'input',
     name:'enter',
     message:`Press ${`ENTER`.green} to continue`
    }
 
    await inquirer.prompt(question)
 
 }

module.exports = {
    inquirerMenu,
    pausa
}