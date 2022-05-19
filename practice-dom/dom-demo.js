let eu = document.querySelector('li#EU');
eu.remove();
let ul = document.querySelector('ul');
let li;
li = document.createElement('li');
li.textContent = 'アジア大陸';
"アジア大陸";
ul.insertAdjacentElement('beforeend', li);
li = document.createElement('li');
li.textContent = 'ヨーロッパ大陸';
ul.insertAdjacentElement('beforeend', li);
let h2s = document.querySelectorAll('h2');
for (let h2 of h2s) {
    h1.style.backgroundColor = 'palegreen';
    h1.style.fontSize = '20pt'
}

