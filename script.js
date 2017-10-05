// Array.prototype.indexOf();
// see console for output!

var whitelist = ['.css', '.js'];

var events = [
  {
    file: 'css/core.css'
  },
  {
    file: 'js/app.js'
  },
  {
    file: 'index.html'
  }
];

var filtered = events.filter(event => {
  var ext = event.file.substr(event.file.lastIndexOf('.'));
  return whitelist.indexOf(ext) > -1;
});

console.log(filtered) || displayInPreview(filtered[0].file) || displayInPreview(filtered[1].file);




// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}