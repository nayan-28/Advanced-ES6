const numbers = [4, 8, 84, 8, 487, 87];

const players = [7, 8, 98, 9, 25, 6];

const selected = players.filter(p => p % 2 === 0);
console.log(selected);


const friends = ['Nayan', 'Pervez', 'Refat', 'Sohag'];

const nameLength = friends.filter(friend => friend.length < 6);
console.log(nameLength);
