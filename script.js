const input  = document.querySelector('#input');
const button = document.querySelector('#button');
const list   = document.querySelector('#list');

const pets   = [];

button.addEventListener("click", function (evt) {
    if (input.value.length > 0) {
        pets.push(input.value);
        input.value = "";
        render();
    }
});

function render () {
    list.innerHTML = pets.map(x => `<li>${x}</li>`).join('');
}
