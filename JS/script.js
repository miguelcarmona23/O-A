const players = ['Rick', 'Summer', 'Morty', 'Beth'];

const team = players;

console.log(players, team);

team[3] = 'Evil Rick';


const team2 = players.slice();

const team3 = [].concat(players);

const team4 = [...players];
team4[3] = 'Wub a dub dub';
console.log(team4);

const team5 = Array.from(players);
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

const captain = person;
captain.number = 23;

const cap2 = Object.assign({}, person, { number: 23 });
console.log(cap2);