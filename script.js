// see console for output!

const items = [
    {
        active: true,
        firstname: 'Shane',
        lastname: 'Osbourne'
    },
    {
        active: true
        firstname: 'Sally',
        lastname: 'Osbourne'
    },
    {
        active: false,
        firstname: 'Ben',
        lastname: 'Barker'
    }
];

const mapped = items
    .filter(x => x.active)
    .map(x => x.firstname);

console.log(createHtmlList(mapped)) || displayInPreview(createHtmlList(mapped))

function createHtmlList(items) {
    const listElements = items.map(x => `<li>${x.firstname}</li>`)
    return `<ul>\n\t${listElements}\n</ul>`;
}




// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode(string);
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}
