// Array.prototype.every();

var videos = [
    {
        title: 'Array methods in depth: concat',
        length: 310,
        viewed: 310
    },
    {
        title: 'Array methods in depth: join',
        length: 420,
        viewed: 360
    }
];

function complete(x) {
    return x.viewed === x.length;
}

var isComplete = videos.every(complete);
var completed = videos.filter(complete);

console.log(isComplete);
console.log(completed);
