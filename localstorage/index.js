// localstorage have six methods 
// setItem()
// getItem()
// removeItem()
// clear()
// key()
// length()

let animals = ['cat', 'dog', 'mouse'];

localStorage.setItem('animals', JSON.stringify(animals));

let values = JSON.parse(localStorage.getItem('animals'));

 console.log(values[0]);

