//1. Crie uma função getAdmins que receba um map
//2. Crie um map e popule-o com nomes de usuários e suas funções
//3. Dentro do getAdmins usar o loop for..of para retornar uma lista com os admins

function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === 'admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usersMap = new Map();
usersMap.set('Ella', 'admin');
usersMap.set('Paul','admin');
usersMap.set('Daniel', 'admin');
usersMap.set('Carolina', 'user');
usersMap.set('Charli', 'user');

console.log(getAdmins(usersMap));