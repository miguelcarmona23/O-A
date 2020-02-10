const players = ['Rick', 'Summer', 'Morty', 'Beth'];

const team = players;

console.log(players, team);

team[3] = 'Evil Rick';


const team2 = players.slice();

const team3 = [].concat(players);

const team4 = [...players];
//let age = 100;
//let age2 = age;
//console.log(age, age2);
//age = 200;
//console.log(age, age2);

//let name = 'Rick';
//let name2 = name;
//console.log(name, name2);
//name = 'Morty';
//console.log(name, name2);


const person = {
    name: 'Rick Sanchez',
    age: 80
};