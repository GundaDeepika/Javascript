var ulElement = document.createElement('ul');
console.log(ulElement)
ulElement.textContent = 'BTM Options';

var listElement1 = document.createElement('li');
listElement1.textContent = "JSpiders";

var listElement2 = document.createElement('li');
listElement2.textContent = 'QSpiders';

ulElement.appendChild(listElement1);
ulElement.appendChild(listElement2);

document.body.appendChild(ulElement);

//<button>login</button>
var btnValue = document.createElement('button');
btnValue.textContent = 'Login';

document.body.appendChild(btnValue);