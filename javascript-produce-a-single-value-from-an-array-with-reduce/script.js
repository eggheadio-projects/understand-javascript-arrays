// Array.prototype.reduce

const users = [
    {
        id: '01',
        name: 'Shane'
    },
    {
        id: '02',
        name: 'Sally'
    }
];

const newUsers = users.reduce((obj, user) => {
    obj[user.id] = user;
    return obj;
}, {});

console.log(newUsers['02'].name);