// see console for output

var name = 'shane osbourne';

var upper = name.split(' ') // [shane, osbourne]
.map(x => x.charAt(0).toUpperCase() + x.slice(1)) // [Shane, Osbourne]
.join(' ');

console.log(upper);