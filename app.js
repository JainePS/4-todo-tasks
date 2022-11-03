const { showMenu, pausa } = require('./messages');

require('colors');
console.clear();

const main = async () => {

    console.log('Hello World');

    let opt ='';

    do{

       opt =  await showMenu();//Pq show menu é a função que vai criar um valor p/ opt.
        console.log({opt});

        await pausa();
    }while(opt != '0') //Pq zero é o opt = Exit

}


main();