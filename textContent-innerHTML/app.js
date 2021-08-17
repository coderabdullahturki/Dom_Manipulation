const list = document.getElementById('list');
const header = document.getElementById('header');
const item = document.getElementById('item');

console.log(header.textContent);
console.log(list.textContent);
console.log(list.innerHTML);

const randomVar = 'Any value';

const ul = document.createElement('ul');

ul.innerHTML = `<li class="item">${randomVar}</li>
                <li>list item</li>
                <li>list item</li>`;

 document.body.appendChild(ul); 
 
 
 header.textContent = `<h2>added text through textContent</h2>`;
