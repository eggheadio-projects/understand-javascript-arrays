// see console for output

var name = 'shane osbourne';

var upper = name.split(' ') // [shane, osbourne]
.map(x => x.charAt(0).toUpperCase() + x.slice(1)) // [Shane, Osbourne]
.join(' ');

console.log(upper) || displayInPreview(upper);




// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}