const { stdin, stdout } = require('process');

require('colors');


const showMenu = () => {

    return new Promise((resolve)=>{

            console.clear();
            console.log('============================================='.green);
            console.log('Select an option'.green);
            console.log('============================================='.green);
        
            console.log(`${`1.`.green} Create task`);
            console.log(`${`2.`.green} List tasks`);
            console.log(`${`3.`.green} List finished tasks`);
            console.log(`${`4.`.green} List pending tasks`);
            console.log(`${`5.`.green} Complete task(s)`);
            console.log(`${`6.`.green} Delete task`);
            console.log(`${`0.`.green} Exit \n`);
        
            const readline = require('readline').createInterface(
                input = process.stdin,
                output = process.stdout
            )
            readline.question(`Select an option: `, (opt) => {
                readline.close();
                resolve(opt);
            });
        
    })

}

const pausa = () => {

    return new Promise((resolve)=>{

        const readline = require('readline').createInterface(
            input = process.stdin,
            output = process.stdout
        )
        readline.question(`Press ${`ENTER`.green} to continue `, (opt) => {
            readline.close();
            resolve();
        });
    })

}

module.exports = {
    showMenu,
    pausa
}