const { inquirerMenu, pausa } = require('./helpers/inquirer.js');
const Task = require('./modules/task.js');

console.clear();

const main = async () => {

    console.log('Hello World');
    const tasks = new Task();

    let opt = '';

    do {

        // opt = await inquirerMenu();//Pq show menu é a função que vai criar um valor p/ opt.
        // console.log({ opt });

        const task = new Task('Buy food');
        console.log(task);


        await pausa();
    } while (opt !== '0') //Pq zero é o opt = Exit

}


main();