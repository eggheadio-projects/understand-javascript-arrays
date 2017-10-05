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

console.log(isComplete) || displayInPreview(isComplete);
console.log(completed) || displayInPreview(completed.length) || displayInPreview(completed.viewed);




// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}